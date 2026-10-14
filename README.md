# Ethereum Wallet Generator

A simple, open-source Ethereum wallet generator that runs in your browser.

**Live demo:** https://pepcoiro.github.io/ethereum-wallet-generator/

## Features

- Generates a 12-word BIP-39 seed phrase using the browser's cryptographically secure random number generator.
- Derives the wallet using the Ethereum BIP-44 path: `m/44'/60'/0'/0/0`.
- Displays the seed phrase, Ethereum address, and private key.
- Includes buttons to copy each value.
- Uses client-side JavaScript; the code contains no requests to external servers for generating a wallet.

## How to use

1. Open the [live generator](https://pepcoiro.github.io/ethereum-wallet-generator/).
2. Click **Generate Ethereum Wallet**.
3. Store the seed phrase and private key securely. Anyone who obtains them can control the wallet.

For a more cautious setup, download `index.html`, inspect the source code, and open it locally on a trusted device with network access disabled.

## Standards and implementation

The generator implements:

- **BIP-39** — mnemonic generation and seed derivation.
- **BIP-32** — hierarchical deterministic key derivation.
- **BIP-44** — Ethereum derivation path.
- **secp256k1** — elliptic curve used for Ethereum keys.
- **Keccak-256** — hash used to derive Ethereum addresses.

## Security

This project is open source so the implementation can be inspected. Before using a generated wallet for significant funds, review the code and independently verify the implementation. Never share your seed phrase or private key, and never enter them into websites or tools you do not trust.
