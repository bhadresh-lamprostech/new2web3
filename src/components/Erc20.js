import React from 'react'
import erc20 from "../assests/images/ERC20.png";

function Erc20() {
  return (
    <div className="metamask-main-div">
         <h1 className="metamask-title">Faucet(Native & ERC 20)</h1>
         <h2 className="metamask-small-title">Native token
</h2>
<p className="metamask-content" >Native tokens are a blockchain's inherent digital currency. Every independent blockchain has its own native crypto that is used to reward miners and validators adding blocks to the blockchain and as a payment method, including for transaction fees.

</p>
<p className="metamask-content" >There are also non-native tokens that are derivatives of a blockchain built to rely on the native token. Non-native tokens are made for specific purposes and come in the form of governance tokens, wrapped tokens, and stablecoins, among others.


</p>
<h2 className="metamask-small-title">Examples of Native Tokens
</h2>
<p className="metamask-content" >There are several native tokens with their respective blockchains. Some examples are the Ethereum blockchain’s native token, called Ether (ETH); the Binance Smart Chain, which has a native token called Binance Coin (BNB); and Cardano’s native token, ADA.


</p>
<h2 className="metamask-small-title">Importance of Native Tokens
</h2>
<p className="metamask-content" >To understand the importance of a native token, let’s review how the Ethereum blockchain functions and the role of Ether, its native currency.




</p>
<p className="metamask-content" >The Ethereum blockchain has helped shape several industries because it was designed to have smart contracts, used to develop decentralized applications (dApps). Ethereum is a critical component in decentralized finance (DeFi). The variety of its use cases has added to the value of Ether.



</p>
<p className="metamask-content" >Ether has two primary uses on the Ethereum blockchain: payment, for transactions made via Ethereum and for transaction fees, also known as gas fees; and collateral, which network validators stake to establish their eligibility. Some Ethereum-based decentralized applications also use Ether as an authorized currency to facilitate transactions.



</p>
<p className="metamask-content" >Gas fees on the Ethereum blockchain refer to the fees paid for transactions to be completed. The fees are denominated in Gwei (1 ETH is equal to 1 billion Gwei).




</p>
<p className="metamask-content" >Validators are decentralized computers or nodes that approve and confirm transactions. To participate, nodes stake Ether, making them eligible.



</p>
<p className="metamask-content" >Just as Ethereum’s Ether becomes valuable in this way, other blockchains, such as Solana and Algorand, have native tokens that enable smart contracts.




</p>
<h2 className="metamask-small-title">ERC 20
</h2>
<p className="metamask-content" >The ERC-20 introduces a standard for Fungible Tokens, in other words, they have a property that makes each Token be exactly the same (in type and value) as another Token. For example, an ERC-20 Token acts just like the ETH, meaning that 1 Token is and will always be equal to all the other Tokens.





</p>
<p className="metamask-content" >Let’s get some tokens for our goerli testnet. 





</p>
<p className="metamask-content" >Step 1. Copy your address from MetaMask extension 




</p>
<p className="metamask-content" >Just as Ethereum’s Ether becomes valuable in this way, other blockchains, such as Solana and Algorand, have native tokens that enable smart contracts.




</p>
<img src={erc20} className="metamask-img metamask-dummy-ss"/>
<p className="metamask-content" >Step 2. Go to this link  <a href="https://goerli-faucet.mudit.blog/">https://goerli-faucet.mudit.blog/ </a> & paste the address. 




</p>

    </div>
  )
}

export default Erc20