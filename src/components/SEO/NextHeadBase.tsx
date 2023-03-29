import Head from "next/head";

const NextHeadBase = () => {
  const baseUrl = "https://login.svmplr.com/";
  const ogImgUrl = `${baseUrl}/images/splash.png`;
  const title = "SVMPLR Storage - Access your NFTs.";
  const description =
    "Securely and easily access your SVMPLR content and files.";

  return (
    <Head>
      <title>SVMPLR Storage - Access your NFTs.</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:image" content={ogImgUrl} />
      <meta property="og:site_name" content="SVMPLR Storage - Access your NFTs." />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImgUrl} />
      <link rel="shortcut icon" href="/images/favicon.png" />
    </Head>
  );
};

export default NextHeadBase;
