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
  
  {                              
    cid: "bafybeiakgraksww3ms42laanu22v6gc7mmdq5bohw4y7qvpadjhgn334yq",
    nftId: [
      "0x6c2da065b29c6fce4dbf81184c9cad97320513502c22c80ecfcd4144c5963daf",
    ],
  },
];

export { unlockables };
