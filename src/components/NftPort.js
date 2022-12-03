import React from "react";
import push1 from "../assests/images/Push1.png";
import {useState, useEffect} from 'react'
import { useAccount } from "wagmi";
import axios from "axios";
import { ethers } from "ethers";
import Poo from "../artifacts/contracts/MintNft.sol/MintNft.json";

const Poo_contract_address = "0x17a94A57b9398dF5Ba47231E9523e71196c0eC50";

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();


function NftPort() {
  var imageUri = "";
  var metdataUri = "";
  const { address } = useAccount();

   const [selectedFile, setSelectedFile] = useState();
   const [preview, setPreview] = useState();

   useEffect(() => {
     if (!selectedFile) {
       setPreview(undefined);
       return;
     }

     const objectUrl = URL.createObjectURL(selectedFile);
     setPreview(objectUrl);

     // free memory when ever this component is unmounted
     return () => URL.revokeObjectURL(objectUrl);
   }, [selectedFile]);

   const onSelectFile = (e) => {
     if (!e.target.files || e.target.files.length === 0) {
       setSelectedFile(undefined);
       return;
     }

     // I've kept this example simple by using the first image instead of multiple
     setSelectedFile(e.target.files[0]);
   };

  
  
  

  const mintCertificate = async (e) => {
    e.preventDefault();
    const nftImage = e.target.nftImage_id.files[0];
    const name = e.target.nftName.value;
    const description = e.target.description.value;
    console.log(name);
    if (nftImage == undefined) {
      alert("please select an Image");
      return;
    }
    console.log(nftImage);

    const form = new FormData();
    form.append("file", nftImage);

    const options = {
      method: "POST",
      url: "https://api.nftport.xyz/v0/files",
      headers: {
        "Content-Type":
          "multipart/form-data; boundary=---011000010111000001101001",
        Authorization: "3a00a5ae-f74a-4369-820d-8da1cc435690",
      },
      data: form,
    };
    console.log(options);

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        console.log(response.data.ipfs_url);

        imageUri = response.data.ipfs_url;
      })
      .catch(function (error) {
        console.error(error);
      });

    const metadata = {
      method: "POST",
      url: "https://api.nftport.xyz/v0/metadata",
      headers: {
        "Content-Type": "application/json",
        Authorization: "4455109c-4819-40f5-9ec5-5882af32a7ed",
      },
      data: {
        name: name,
        description: description,
        file_url: imageUri,
      },
    };

    await axios
      .request(metadata)
      .then(function (response) {
        console.log(response.data);
        metdataUri = response.data.metadata_uri;
      })
      .catch(function (error) {
        console.error(error);
      });

    const mintNft = new ethers.Contract(Poo_contract_address, Poo.abi, signer);
    const mintNFT = await mintNft.safeMint(
      address,
      metdataUri
    );
    console.log(mintNFT);
  };
  return (
    <div className="metamask-section1">
      <h1 className="metamask-title">NFT Port</h1>

      <p className="metamask-content">
        NFTPort is the Stripe for NFTs: one-stop, simple NFT Infrastructure and
        APIs for developers to bring NFT applications to market in hours instead
        of months.
      </p>
      <p className="metamask-content">
        Start by going to the ENS app and connecting your wallet.
      </p>
      <p className="metamask-content">
        NFTPort takes care of the infrastructure so that developers can focus on
        building their application. NFTPort provides APIs for multi-chain NFT
        data and NFT minting, together with out-of-the-box NFT search,
        recommendations and detecting NFT counterfeits.
      </p>
      <p className="metamask-content">
        NFTPort is used by 5000+ devs, including leading projects such as POAP
        and Nifty Gateway. Built by a team of ex-NATO, Nvidia & Monese and
        backed by the Co-Founders of Polygon, Skype & Wise.
      </p>
      <p className="metamask-content">
        Basically, NFT Port is helping to mint your first NFT right now.
      </p>
      <p className="metamask-content">Go on & click Mint NFT button</p>
      <div className="nftport-box">
        <div>
          <form onSubmit={mintCertificate}>
            <div>
              <input type="file" id="nftImage_id" onChange={onSelectFile} />
              {selectedFile && <img className="nftimg" src={preview} />}
            </div>
            <div className="name">
              <input type="text" placeholder="name" id="nftName" />
            </div>
            <div className="description">
              <input type="text" placeholder="name" id="description" />
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NftPort;
