const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { webcrypto } = require('node:crypto');
const { TextEncoder } = require('node:util');

const source = fs.readFileSync(path.join(__dirname, '..', 'script.js'), 'utf8');
const browserStub = {
  getElementById() {
    return {
      addEventListener() {},
      classList: { add() {}, remove() {} },
      style: {},
      textContent: '',
      disabled: false
    };
  },
  querySelectorAll() { return []; }
};
const context = {
  crypto: webcrypto,
  TextEncoder,
  Uint8Array,
  BigInt,
  document: browserStub,
  navigator: {},
  window: { isSecureContext: false },
  setTimeout,
  console
};
vm.createContext(context);
vm.runInContext(source + `
globalThis.__walletTest = {
  makeMnemonic,
  mnemonicToSeed,
  deriveEthereumPrivateKey,
  privateKeyToAddress,
  keccak256,
  hex
};
`, context);
const wallet = context.__walletTest;

test('Keccak-256 matches the empty-input reference digest', () => {
  assert.equal(
    wallet.hex(wallet.keccak256([])),
    'c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470'
  );
});

test('BIP-39 creates the expected mnemonic from zero entropy', async () => {
  context.crypto = {
    getRandomValues: (array) => array.fill(0),
    subtle: webcrypto.subtle
  };
  const phrase = await wallet.makeMnemonic();
  context.crypto = webcrypto;
  assert.equal(phrase, 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about');
});

test('BIP-39 seed matches the published zero-passphrase test vector', async () => {
  const phrase = 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about';
  const seed = await wallet.mnemonicToSeed(phrase);
  assert.equal(
    wallet.hex(seed),
    '5eb00bbddcf069084889a8ab9155568165f5c453ccb85e70811aaed6f6da5fc1' +
    '9a5ac40b389cd370d086206dec8aa6c43daea6690f20ad3d8d48b2d2ce9e38e4'
  );
});

test('BIP-32/BIP-44 derives the known Ethereum private key and address', async () => {
  const phrase = 'test test test test test test test test test test test junk';
  const seed = await wallet.mnemonicToSeed(phrase);
  const privateKey = await wallet.deriveEthereumPrivateKey(seed);
  assert.equal(
    privateKey.toString(16).padStart(64, '0'),
    'ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'
  );
  assert.equal(
    wallet.privateKeyToAddress(privateKey),
    '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'
  );
});
