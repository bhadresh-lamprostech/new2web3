import logo from './logo.svg';
import './App.css';
import React from 'react';
import "rsuite/dist/rsuite.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Steps, Panel, Placeholder, ButtonGroup, Button } from "rsuite";
// import landingpage from "./components/LandingPage.js";
import LandingPage from './components/LandingPage.js';
import Metamask from './components/Metamask.js';
import {
  WagmiConfig,
  createClient,
  defaultChains,
  configureChains,
} from 'wagmi'

import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import NftPort from './components/NftPort';
import Worldcoin from './components/Worldcoin';
import PushProtocol from './components/PushProtocol';
import FatchNFT from './components/FatchNFT';

const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
  alchemyProvider({ apiKey: 'yourAlchemyApiKey' }),
  publicProvider(),
])

// Set up client
const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    // new CoinbaseWalletConnector({
    //   chains,
    //   options: {
    //     appName: 'wagmi',
    //   },
    // }),
    // new WalletConnectConnector({
    //   chains,
    //   options: {
    //     qrcode: true,
    //   },
    // }),
    // new InjectedConnector({
    //   chains,
    //   options: {
    //     name: 'Injected',
    //     shimDisconnect: true,
    //   },
    // }),
  ],
  provider,
  webSocketProvider,
})

function App() {


  return (
    <div className="App">
      <WagmiConfig client={client}>
          <Navbar></Navbar>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            {/* <Route path="/metamask" element={<FatchNFT />}></Route> */}
          </Routes>
        </Router>
      </WagmiConfig>
    
    </div>
  );
}

export default App;
