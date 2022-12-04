import React from "react";
import axios from "axios";
import { useState } from "react";
function FatchNFT() {
  const [data, setData] = useState({});
  const getNft = async () => {
    const resp = await axios
      .get(
        `https://api.covalenthq.com/v1/5/address/0x737175340d1D1CaB2792bcf83Cff6bE7583694c7/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=false&key`,
        { auth: { username: "ckey_f09b8656acce40139909164b62e" } }
      )
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data.items[0].nft_data[0].external_data);
      });
  };
  return (
    <div>
      <button onClick={() => getNft()}>GetNft</button>
      <div>
        <img  className="nft-img-1" src={data.image} alt={data.image} />
      </div>
    </div>
  );
}

export default FatchNFT;
