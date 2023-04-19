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
  
  {                      // [BONUS] SVMPLR - CYBERRAVE II  //
    cid: "bafybeignblyryrcyyyqft5l2btzfcqdlw6a32baat3ddjr7rz5boruakna",
    name: "[BONUS] SVMPLR - CYBERRAVE II",
    nftId: [
      "0xe61495b628bcd46414e6145c50a89cc9833a15689a3e8e8481339f33f563f651",
      "0x95629a13d2bb9d89927f5d4a08a721ab1b6c4eb22ed4891b09fd4dbdd47360f3",
      "0x6c2da065b29c6fce4dbf81184c9cad97320513502c22c80ecfcd4144c5963daf",
      "0x1c24a69f4cc50ade39d05b29c93a2ea6dd46131d94b90df388c74f1f7f5f6cda",
    ],
  },
];

export { unlockables };
