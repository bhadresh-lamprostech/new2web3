import React from 'react'
import axios from 'axios'

function FatchNFT() {

    const getNft = async() => {

    

    const resp = await axios
      .get(
        `https://api.covalenthq.com/v1/5/address/0x6Ea2D65538C1eAD906bF5F7EdcfEa03B504297ce/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=false&key`,
        { auth: { username: "ckey_f09b8656acce40139909164b62e" } }
      )
      .then((res) => {
        console.log(res.data.data);
      });
    }
  return (
    <div>
        
        <button onClick={()=>getNft()}>GetNft</button>
    </div>
  )
}

export default FatchNFT