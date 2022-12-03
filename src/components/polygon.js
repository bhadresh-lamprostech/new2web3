import React from 'react'
import "../components/ens.css";
import ens1 from "../assests/images/ENS1.png";
import ens2 from "../assests/images/ENS2.png";

function polygon() {
  return (
       <div className="metamask-main-div">
    <div className="metamask-section1">
       <h1 className="metamask-title">What is Blockchain Technology?
</h1>
       <div>
        <ul>
            <li className="metamask-content">A Blockchain is a decentralized database that is shared among computer network nodes.
</li>
<li className="metamask-content">Transactional data from numerous sources may be readily collected, integrated, and shared using blockchain cloud services.

</li>
<li className="metamask-content">Data is divided into common blocks linked together using cryptographic hashes as unique IDs. 

</li>
<li className="metamask-content">Data integrity is ensured via Blockchain, which uses a single source of truth to eliminate data duplication and increase security. 

</li>
<li className="metamask-content">Fraud and data tampering is prevented in a blockchain system since data can't be changed without the permission of the nodes of the parties.

</li>
        </ul> </div>
        <h2 className="metamask-small-title">Ethereum:
</h2>
      
<p className="metamask-content" >Ethereum is a decentralized blockchain platform that establishes a peer-to-peer network that securely executes and verifies application code, called smart contracts. Smart contracts allow participants to transact with each other without a trusted central authority. 
</p>
<p className="metamask-content" >Transaction records are immutable, verifiable, and securely distributed across the network, giving participants full ownership and visibility into transaction data. Transactions are sent from and received by user-created Ethereum accounts. 

 
</p>
<p className="metamask-content" >A sender must sign transactions and spend Ether, Ethereum's native cryptocurrency, as a cost of processing transactions on the network.

</p>
<h2 className="metamask-small-title">Why Should You Use Ethereum?
</h2>
<p className="metamask-content" >If you’ve ever sent money overseas (or plan to), or had to worry about the future of your assets due to external forces outside of your control where you live, or been fed up by the numerous restrictions and fees imposed by traditional financial institutions for everyday transactions, you might be interested in what cryptocurrencies have to offer.
</p>
<h2 className="metamask-small-title">Polygon:
</h2>
<p className="metamask-content" >Polygon is essentially a “Layer 2” network built on the Ethereum blockchain to mitigate the traffic load on the main blockchain.

</p>
<p className="metamask-content" >It acts as a speedy parallel blockchain running alongside the main Ethereum blockchain. To use it, you can “bridge” some of your crypto over to Polygon, and then interact with a wide range of popular crypto apps that were once exclusive to the main Ethereum blockchain.


</p>
<h2 className="metamask-small-title">Why Should You Use Polygon?
</h2>
<p className="metamask-content" >The Polygon network allows you to do many of the same things the main Ethereum network allows, but with fees that are often a fraction of a cent. You can try decentralized exchanges like QuikSwap or SushiSwap, yield-generating lending and savings protocols like Aave, NFT markets like OpenSea, or even “no-loss prize games” like Pooltogether. 


</p>
<p className="metamask-content" >To try the Polygon network, you need to send some crypto to a compatible crypto wallet like Coinbase Wallet. You can then “bridge” some of your crypto — stablecoins are a popular choice for this — to the Polygon network. You’ll also need to bridge some MATIC to make transactions, but even a dollar’s worth is plenty because fees are so low. 


</p>
<p className="metamask-content" >Low fees and near-instant transactions make the Polygon network an excellent way to gain some real-world experience trying out DeFi protocols.


</p>
   </div>
   
 </div> )
}

export default polygon