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
      "0xe61495b628bcd46414e6145c50a89cc9833a15689a3e8e8481339f33f563f651", // No Sleep
      "0x95629a13d2bb9d89927f5d4a08a721ab1b6c4eb22ed4891b09fd4dbdd47360f3", // Remedy
      "0x6c2da065b29c6fce4dbf81184c9cad97320513502c22c80ecfcd4144c5963daf", // Groove
      "0x1c24a69f4cc50ade39d05b29c93a2ea6dd46131d94b90df388c74f1f7f5f6cda", // Waiting

      "0xcb322d249745d385d63232d844ddb2f997642f0a3166a2119e2d45e1df865bc0", // Stockholm
      "0xca82f5764f8b798cfff469e7c227c411fc7a039c6ab65e886297b5ffcc2a6b2e", // Chicago
      "0xb54b0bd6c73ed02cd5cce5e80b84a31f04d8c3bcb291482a7cd75456c5f596e9", // Ottawa
      "0x42a9e416d3ce9cf023d151869a3939535227b4f4abb0785b9abc5fccebfc2645", // Seoul
      "0x3a0a32cc2dff5523cf8191ba456ba909d8928b1d412d9244831970629100303c", // Los Angeles
      "0x2156b02205aa3112937875cc09cfa5540555b09c765d936390fa97fad99f6040", // New York
      "0x147c00940e85030e761168c0d114690ddc212a5deece7ea72d5ba63fa6033a35", // New Delhi
      "0x1c14de35a795e58ad136a2390384a8e167c660c877dc6f64190a580bfb5d153b", // Paris
      
      "0x1703cb457a2c270c8e016f26a0295aafa6356b2cbd11cbb6b1daa0cca0a9e20e", // [MIXTAPE] Rorschach
    ],
  },
  {                        //  SVMPLR - Shanti (Code)  //
    cid: "bafybeignblyryrcyyyqft5l2btzfcqdlw6a32baat3ddjr7rz5boruakna",
    name: 'SVMPLR - Shanti (Code)',
    nftId: [
      "0xfee43e951635858d077b45de6d2c67919be5d76ee8829c45171292ec9e19e143", // [MIXTAPE] Rorschach
    ],
  },
];

export { unlockables };
