import { Unlockable } from "./types";

/*********************************************************
Replace the `unlockables` below with your own content. 
Here are two examples:

1️⃣ Unlock a Submarined file by owning one specific NFT.
{ 
  cid: "<YOUR_CID>", 
  nftId: ["<YOUR_NFT_ID"]
}

2️⃣ Unlock a Submarined file by owning multiple NFTs.
{
  cid: "<YOUR_CID",
  nftId: [
    "<YOUR_FIRST_NFT_ID", "<YOUR_SECOND_NFT_ID", 
  ]
}
*********************************************************/

const unlockables: Unlockable[] = [
  
  {                       // [MIXTAPE ALBUM] Rorschach //
    cid: [
      "bafybeieb6qbvnly35nh4ok4n4sbhexh2aar2jgdnroz4aj4bhholpademu", 
      "bafybeibwcad2y74iqtkyrxrnmjkh2lmyl6pxnbkmlnpdfaqwvvcz3dc4ty",
      "bafybeignizscfldiumlj4puqwqpyqd67jk6ufqlg6lmfzy2t6bzyctdf2q",
     ],
    nftId: [
      "0x1703cb457a2c270c8e016f26a0295aafa6356b2cbd11cbb6b1daa0cca0a9e20e",
    ],
  },
];

export { unlockables };
