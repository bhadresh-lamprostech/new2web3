import React from "react";
import Confetti from "react-confetti";

function Resources() {
  return (
    <div className="metamask-main-div">
      <Confetti
        width="1900px"
        // height="1200px"
        recycle={false}
        numberOfPieces={500}
        frictio={5}
        className="confetti-div"
      />
      <div className="metamask-section1">
        <h1 className="metamask-title">Congratulations!</h1>
        <h2 className="metamask-small-title">
          You have completed the 12-step guide to starting the Web3 journey. You
          are now ready to explore more dApps on blockchain.
        </h2>
        <p className="metamask-content">
          You can always come back to these steps if you have any doubts. To
          supplement your learning, we are adding some helpful resources below:
        </p>
        <a
          className="metamask-content accent-color"
          href="https://metamask.io/buy-crypto/
"
        >
          https://metamask.io/buy-crypto/
        </a>
        <div>
          <a
            className="metamask-content accent-color"
            href="https://docs.ens.domains/frequently-asked-questions"
          >
            https://docs.ens.domains/frequently-asked-questions
          </a>
        </div>
        <div>
          <a
            className="metamask-content accent-color"
            href="https://medium.com/push-protocol

"
          >
            https://medium.com/push-protocol
          </a>
        </div>
        <div>
          <a
            className="metamask-content accent-color"
            href="https://ethereum.org/en/what-is-ethereum/
"
          >
            https://ethereum.org/en/what-is-ethereum/
          </a>
        </div>
        <div>
          <a
            className="metamask-content accent-color"
            href="https://polygon.technology/
"
          >
            https://polygon.technology/
          </a>
        </div>
        <div>
          <a
            className="metamask-content accent-color"
            href="https://www.investopedia.com/news/what-erc20-and-what-does-it-mean-ethereum/

"
          >
            https://www.investopedia.com/news/what-erc20-and-what-does-it-mean-ethereum/
          </a>
        </div>
        <div>
          <a
            className="metamask-content accent-color"
            href="https://metamask.io/buy-crypto/
"
          >
            https://metamask.io/buy-crypto/
          </a>
        </div>
        <div>
          <a
            className="metamask-content accent-color"
            href="https://www.covalenthq.com/
"
          >
            https://www.covalenthq.com/
          </a>
        </div>
        <div>
          <a
            className="metamask-content accent-color"
            href="https://docs.nftport.xyz/docs

"
          >
            https://docs.nftport.xyz/docs
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resources;
