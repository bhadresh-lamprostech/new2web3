import React from 'react'
import "../components/ens.css";
import ens1 from "../assests/images/ENS1.png";
import ens2 from "../assests/images/ENS2.png";

function Ens() {
  return (
    <div className="metamask-section1">
       <h1 className="metamask-title">ENS</h1>
       <h2 className="metamask-small-title">To make this more interesting for you, let’s add a human-friendly domain name to the wallet address.
</h2>
<p className="metamask-content" >Start by going to the <a href="https://worldcoin.org/download">ENS app</a> and connecting your wallet.
</p>
<img src={ens1} className="metamask-img"/>
<p className="metamask-content" >Next, you can search the name that you want. If it is available, click on the name again to go the Register screen. This gives you the pricing for the number of years selected.
</p>
<img src={ens2} className="metamask-img"/>
<p className="metamask-content" >You’ll be required to sign two transactions — one to request to register, and the other to actually register.

</p>
<p className="metamask-content" >Click on the “request to register” button, you’ll get a push notification from your wallet to confirm this transaction.

</p>
<p className="metamask-content" >Here, you’ll notice a small network fee. You can adjust the amount to pay depending on how quickly you want the transaction to get fulfilled, the wallet app will usually suggest an estimate that you can go with. 

</p>
<p className="metamask-content" >Most wallets allow you to select amounts for a “slow🐌, normal⏱ or fast🚀” transaction. The more money you’re willing to spend, the faster your transaction will be.

</p>
<p className="metamask-content" >Once you approve the transaction, it will be submitted on the blockchain, and you’ll wait for it to be confirmed.

</p>
<p className="metamask-content" >Once your transaction has been confirmed on the blockchain, you’ll be required to wait for one minute to ensure that someone else hasn’t tried to register that name within the same period. If this checks out, you’ll be able to initiate the second transaction by clicking “Register”.

</p>
<p className="metamask-content" >You’ll get another notification from your wallet to sign the transaction. This time, you’ll see the cost of the ENS name, as well as the network fee.
</p>
<p className="metamask-content" >Once this transaction is confirmed, you now own the ENS name and will be able to see it as a collectible in your wallet.

</p>
<p className="metamask-content" >Try it for yourself!

</p>
<div className="connect-wallet">
    <button className='connect-btn'>Set up ENS</button>
</div>
    </div>
  )
}

export default Ens