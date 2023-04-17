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
  ////////////////////////////////////////////////////////////////////////////////////////////
  {                              // SOUNDS OF SVMPLR //
    cid: "bafybeief34f5jnc3hzybkpsffvwkv67svdwlvg575ubd5sdbhh7zz7jcxm", // Waiting
    nftId: [
      "0x6c2da065b29c6fce4dbf81184c9cad97320513502c22c80ecfcd4144c5963daf",
    ],
  },
  {
    cid: "bafybeiftvauq25nidsk5waxnmn62gqqwpgctu3j7vsbb5t4grklgrwpd6e", // Remedy
    nftId: [
      "0x95629a13d2bb9d89927f5d4a08a721ab1b6c4eb22ed4891b09fd4dbdd47360f3",
    ],
  },
  {
    cid: "bafybeibsdybfl7jcb4oqbalcppgy2zgbypcpu3sxizjmbqg7eppdx7nqma", // Groove
    nftId: [
      "0x1c24a69f4cc50ade39d05b29c93a2ea6dd46131d94b90df388c74f1f7f5f6cda",
    ],
  },
  {
    cid: "bafybeihwiavg4qmbve3dihhl6fvova5gw5j3ywj2vedmr6nfswn4x4b454", // No Sleep
    nftId: [
      "0xe61495b628bcd46414e6145c50a89cc9833a15689a3e8e8481339f33f563f651",
    ],
  },
  {                  // BONUS - SOUNDS OF SVMPLR - Running Up That Hill //
    cid: "bafybeihhx5v3saq3b7n55ub5q3atuw2udbqc5ictkv2ih7vd3hxptu22nu", // Running Up That Hill
    nftId: [
      "0x6c2da065b29c6fce4dbf81184c9cad97320513502c22c80ecfcd4144c5963daf",
    ], // You need to own 'GM #1' to unlock this.
  },
  {
    cid: "bafybeihx5eacyxeydcpvudwxa242rnjhn67femy46gzas5d2djb24ti5mi", // MP4 video example
    nftId: [
      "0x8aa9d39f44b4b8488d0bbf04ea12bec99ddbe676a1b9a38d853701327437e78c",
    ], // You need to own 'GM #2' to unlock this.
  },
  {
    cid: "bafybeihhx5v3saq3b7n55ub5q3atuw2udbqc5ictkv2ih7vd3hxptu22nu", // Web game example
    nftId: [
      "0x8aa9d39f44b4b8488d0bbf04ea12bec99ddbe676a1b9a38d853701327437e78c",
      "0x3d483f631a391a3706446613929d253cfddcb47900a07593c5004c5e3827d9ee",
    ], // You need to own 'GM #1' & 'GM #2' to unlock this.
  },
];

export { unlockables };
