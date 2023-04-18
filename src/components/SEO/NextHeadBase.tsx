import Head from "next/head";

const NextHeadBase = () => {
  const baseUrl = "https://login.svmplr.com/";
  const ogImgUrl = `${baseUrl}/images/login.svmplr.com-thumbnail.png`;
  const title = "SVMPLR NFT Login - Access your Tokenized Music and NFT assets.";
  const description =
    "Access exclusive SVMPLR content and files purchased on the Gamestop NFT Marketplace. Securely manage your NFT music and 3D assets by connecting your Ethereum layer 2 wallet.";

  return (
    <Head>
      <title>SVMPLR NFT Login - Access your Tokenized Music and NFT assets.</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:image" content={ogImgUrl} />
      <meta property="og:site_name" content="SVMPLR NFT Login - Access your Tokenized Music and NFT assets." />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImgUrl} />
      <link rel="shortcut icon" href="/images/login.svmplr.com-favicon.png" />
    </Head>
  );
};

export default NextHeadBase;
