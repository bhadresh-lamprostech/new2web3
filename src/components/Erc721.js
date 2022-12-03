import React from 'react'

function Erc721() {
  return (
    <div className="metamask-section1">
    <h1 className="metamask-title">ERC-721</h1>
    <h2 className="metamask-small-title">What is a Non-Fungible Token?
</h2>
<p className="metamask-content" >A Non-Fungible Token (NFT) is used to identify something or someone in a unique way. This type of Token is perfect to be used on platforms that offer collectible items, access keys, lottery tickets, numbered seats for concerts and sports matches, etc. This special type of Token has amazing possibilities so it deserves a proper Standard, the ERC-721 came to solve that!
</p>
<h2 className="metamask-small-title">What is ERC-721?
</h2>
<p className="metamask-content" >The ERC-721 introduces a standard for NFT, in other words, this type of Token is unique and can have different value than another Token from the same Smart Contract, maybe due to its age, rarity or even something else like its visual. Wait, visual?


</p>
<p className="metamask-content" >Yes! All NFTs have a uint256 variable called tokenId, so for any ERC-721 Contract, the pair contract address, uint256 tokenId must be globally unique. That said, a dapp can have a "converter" that uses the tokenId as input and outputs an image of something cool, like zombies, weapons, skills or amazing kitties!


</p>
<p className="metamask-content" >Let’s find out more about how you will get your first NFT.</p>

</div>
  )
}

export default Erc721