# Ethereum Wallet Generator

A simple, open-source Ethereum wallet generator that runs entirely in your browser.

**Live demo:** https://pepcoiro.github.io/ethereum-wallet-generator/

**Source code:** https://github.com/pepcoiro/ethereum-wallet-generator

## Features

- Generates a 12-word BIP-39 seed phrase using the browser's cryptographically secure random number generator.
- Derives the wallet using the Ethereum BIP-44 path: `m/44'/60'/0'/0/0`.
- Displays the seed phrase, Ethereum address, and private key.
- Includes buttons to copy each value.
- Generates keys locally in the browser; wallet generation does not require requests to external servers.

## How to use

1. Open the [live generator](https://pepcoiro.github.io/ethereum-wallet-generator/).
2. Click **Generate Ethereum Wallet**.
3. Store the seed phrase and private key securely. Anyone who obtains them can control the wallet.

## Use offline

You can save the complete webpage directly from your browser:

1. Open the [live generator](https://pepcoiro.github.io/ethereum-wallet-generator/).
2. In your browser, choose **Save page as** and select **Webpage, Complete** (wording may vary by browser).
3. Keep the downloaded HTML file together with the accompanying resources folder.
4. Disconnect from the internet and open the saved HTML file.

Alternatively, use **Download the code** on the live page or download the [repository ZIP](https://github.com/pepcoiro/ethereum-wallet-generator/archive/refs/heads/main.zip). Extract the archive and open `index.html`.

## Standards and implementation

The generator implements:

- **BIP-39** — mnemonic generation and seed derivation.
- **BIP-32** — hierarchical deterministic key derivation.
- **BIP-44** — Ethereum derivation path.
- **secp256k1** — elliptic curve used for Ethereum keys.
- **Keccak-256** — hash used to derive Ethereum addresses.

## Tests

The repository includes repeatable tests for core cryptographic operations and known reference vectors.

Run them locally with Node.js:

```bash
npm test
```

The test suite covers:
- Keccak-256 known digest.
- BIP-39 mnemonic generation from deterministic zero entropy.
- BIP-39 seed derivation against the published zero-passphrase test vector.
- Ethereum private-key and address derivation using a publicly known Hardhat test mnemonic (test data only; never use it to store funds).

GitHub Actions runs the same tests automatically when changes are pushed or a pull request is opened.

Passing these tests helps verify compatibility with known vectors; it is not a security audit or certification.

## Security

This project is open source so the implementation can be inspected. Before using a generated wallet for significant funds, review the code and independently verify the implementation. Never share your seed phrase or private key, and never enter them into websites or tools you do not trust.

For better security, download the code and run it offline on a trusted device. Saving the webpage from the browser requires choosing the complete webpage option so its JavaScript and CSS resources are saved too.
