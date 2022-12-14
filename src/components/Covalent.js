import React from "react";
import axios from "axios";
import { useState } from "react";
import { useAccount } from "wagmi";

function Covalent() {
  const { address } = useAccount();

  const [data, setData] = useState({});
  const getNft = async () => {
    const resp = await axios
      .get(
        `https://api.covalenthq.com/v1/5/address/${address}/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=false&key`,
        { auth: { username: "ckey_f09b8656acce40139909164b62e" } }
      )
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data.items[0].nft_data[0].external_data);
      });
  };

  return (
    <div className="metamask-main-div">
      <div className="metamask-section1">
        <h1 className="metamask-title">Covalent & Block Explorer</h1>
        <h2 className="metamask-small-title">Block Explorer</h2>
        <p className="metamask-content">
          Block explorers are one of the most important tools in a crypto
          enthusiast’s arsenal. They provide an online interface for searching a
          blockchain, and enable you to retrieve data about transactions,
          addresses, blocks, fees, and more. Each block explorer provides data
          about a particular blockchain, and the type of information included
          will vary depending on the architecture of the blockchain it serves.
        </p>
        <p className="metamask-content">
          The block explorer of Ethereum is etherscan & Polygon is polyscan.
        </p>
        <h2 className="metamask-small-title">Why Use a Block Explorer?</h2>
        <p className="metamask-content">
          Block explorers have potential utility for traders, miners,
          validators, businesses, and enthusiasts alike. You can use a block
          explorer to check the status of a transaction if you’re buying or
          selling crypto. You can also acquire information associated with your
          blockchain address, including your transaction history, the total
          value of the assets held at the address, the total amount of crypto
          received at the address, and the total amount of crypto sent from the
          address, among other data points.
        </p>
        <h2 className="metamask-small-title">Covalent</h2>
        <p className="metamask-content">
          Covalent provides a unified API bringing visibility to billions of
          Web3 data points.
        </p>
        <p className="metamask-content">
          The world's first decentralized network to provide deep, granular and
          historical Blockchain data via an open, proof-based protocol.
        </p>
        <p className="metamask-content">
          So, as we checked Blockchain Explorer it is difficult to use those for
          developers and that’s were Covalent comes into picture.
        </p>
        <p className="metamask-content">Now, let’s see it in action.</p>
        <p className="metamask-content">
          The table seen below shows all the transactions that you have done so
          far, these are provided by Covalent API.
        </p>
        <div>
          <p>
            Here we are showing the NFT from your wallet that we minted earlier.
            This is by using Covalent API.
          </p>
        </div>
        <div className="covalent-demo">
          <div>
            <div className="nft-card">
              <img className="nft-img-1" src={data.image} alt={data.image} />
              <h6 className="name-nftport">Name :{data.name}</h6>
              <h6 className="name-nftport">Description:{data.description}</h6>
            </div>
            <button
              onClick={() => getNft()}
              className="section6-button get-nft"
            >
              GetNft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Covalent;
