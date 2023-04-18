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
    cid: "bafybeib7gb7paef2c2t4eluaplukidqi2opa32cvm4fofkkl6sddksy4lu", // MP3
    nftId: [
      "0x1703cb457a2c270c8e016f26a0295aafa6356b2cbd11cbb6b1daa0cca0a9e20e",
    ],
  },
];

export { unlockables };
