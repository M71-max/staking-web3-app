import React from 'react';
import ReactDOM from 'react-dom/client';
import { chain } from 'wagmi';
import reportWebVitals from './reportWebVitals';
import { createClient, configureChains, defaultChains, WagmiConfig } from "wagmi";
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from "wagmi/providers/public";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

import App from './App';

import './index.css';

// API key for Ethereum node
// Two popular services are Infura (infura.io) and Alchemy (alchemy.com)
// Configure chains for connectors to support
const { chains, provider, webSocketProvider } = configureChains([chain.goerli], [
  alchemyProvider({ apiKey: 'mUob5BuwDVy8sahxWzBzYBsWHC3KG41r' }),
  publicProvider(),
]);


// Set up connectors
export const connectors = [
  new CoinbaseWalletConnector({
    chains,
    options: {
      appName: "app-ui",
    },
  }),
  
  new MetaMaskConnector({
    chains,
  }),
];

const client = createClient({
  autoConnect: true,
  provider,
  connectors,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <WagmiConfig client={ client }>
      <App />
    </WagmiConfig>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
