import React from 'react'
import metamask1 from "../assests/images/Metamask1.png";
import metamask2 from "../assests/images/Metamask2.png";
import metamask3 from "../assests/images/Metamask3.png";
import metamask4 from "../assests/images/Metamask4.png";
import "../components/metamask.css"
// import { useConnect } from 'wagmi'
import {
    useAccount,
    useConnect,
    useDisconnect,
    useEnsAvatar,
    useEnsName,
  } from 'wagmi'


function Metamask() {
    const { address, connector, isConnected } = useAccount()
  const { data: ensAvatar } = useEnsAvatar({ address })
  const { data: ensName } = useEnsName({ address })
    const { connect, connectors, error, isLoading, pendingConnector } =
  useConnect()
  const { disconnect } = useDisconnect()
 
  if (isConnected) {
    return (
      <div>
        <img src={ensAvatar} alt="ENS Avatar" />
        <div>{ensName ? `${ensName} (${address})` : address}</div>
        <div>Connected to {connector.name}</div>
        <button onClick={disconnect}>Disconnect</button>
      </div>
    )
  }
  return (
 <>
 <div className="metamask-main-div">
    <div className="metamask-section1">
    <h1 className="metamask-title">Metamask</h1>
    <p className="metamask-content">A crypto wallet is a form of digital storage to secure access to your crypto. They allow users to send, receive and spend multiple cryptocurrencies</p>
<p className="metamask-content">Unlike a normal wallet, which can hold actual cash, crypto wallets technically don’t store your crypto. Your holdings live on the blockchain, but can only be accessed using a private key. Your keys prove your ownership of your digital money and allow you to make transactions.
</p>
</div>
 
 <h2 className="metamask-small-title">Now that you know what a crypto wallet is, let’s create one for you!</h2>
 <p className="metamask-content" >MetaMask is the most popular Ethereum-compatible wallet used today. You can access it via a secure browser extension that’s compatible with Chrome, Firefox, Brave, and Edge browsers.
</p>
<p className="metamask-content">While MetaMask is most commonly used for transactions on the Ethereum network, it is fully compatible with several other blockchains including Avalanche, Polygon, Binance Smart Chain, Fantom, Harmony, and others.
</p>
<p className="metamask-content">Setup is fairly simple. Here’s a step-by-step walkthrough for setting up your MetaMask wallet on the Chrome browser in five minutes. Although things may look slightly different for other browsers, this should give you a good idea of what you’ll need to do.
</p>

<div>
<h2 className="metamask-small-title" >Installing The Extension</h2>
<p className="metamask-content">First, head over to <span className="metamask-span">MetaMask.</span> Once there, you’ll see a blue button that allows you to download the extension for whatever browser you use. On Chrome, you’ll see this.
</p>
<img src={metamask1} className="metamask-img"/>
<p className="metamask-content">Go ahead and hit that button, and it’ll take you to the Chrome Web Store. Once you are ready to go, click the Add To Chrome button, which will then install your MetaMask wallet for free.
</p>
<p className="metamask-content">Go ahead and hit that button, and it’ll take you to the Chrome Web Store. Once you are ready to go, click the Add To Chrome button, which will then install your MetaMask wallet for free.
</p>
</div>
<div>
    <h2 className="metamask-small-title">Setting Up Your MetaMask Wallet</h2>
    <p className="metamask-content">Next, you’ll be given the option to “Get Started.” Once you’ve clicked that button, you’ll see a screen like this:
</p>
<img src={metamask2} className="metamask-img"/>
<p className="metamask-content">Since you className="metamask-content"are a new user, click the “Create a Wallet” button on the right to get started with a new wallet. Then, the system will ask you whether or not you want to share analytics with MetaMask. This decision is entirely up to you. After that, you’ll be prompted to create a password.
</p>
<img src={metamask3} className="metamask-img"/>
<p className="metamask-content">This is your password for access to your wallet on your local device. As with all online accounts, you should ensure that you are using a strong password. On the next page, you’ll be given a set of 12 words that act as your private key.

</p>
<img src={metamask4} className="metamask-img"/>
<p className="metamask-content">You can think of these words as your master key to all your digital assets. If you have lost or forgotten your password, you can use this set of 12 words to restore your wallet on any device. However, if anyone were to gain access to these 12 words, they could do the same. Anyone with these passphrases can restore your wallet on their digital device and gain access to all your assets, including your cryptocurrency and NFTs. 
</p>
<p  className="metamask-content"><span className="bottom-line">Bottom Line:</span> Write these 12 words down and keep them somewhere safe offline. Do not store these words on your computer. Remember – no one will ever need to know your 12 words other than you. If you ever do get asked for these phrases, it’s likely a scam.
</p>
<p className="metamask-content" >That’s it! Your crypto wallet is now set up! You can access any dApp or transact tokens using this.
</p>
<p className="metamask-content">Try it for yourself!</p>
<div className="connect-wallet">
      {connectors.map((connector) => (
        <button className='connect-btn'
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
        >Connect Wallet
          {!connector.ready && ' (unsupported)'}
          {isLoading &&
            connector.id === pendingConnector?.id &&
            ' (connecting)'}
        </button>
      ))}
 
      {error && <div>{error.message}</div>}
    </div>
</div>
</div>
 </>
  )
}

export default Metamask;