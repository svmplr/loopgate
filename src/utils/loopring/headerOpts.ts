// Fetch options used whenever the Loopring API Key is required
const headerOpts = {
  headers: {
    "Content-Disposition": "attachment",
    "X-API-KEY": `${process.env.LOOPRING_API_KEY}`,
    
  },
};

export default headerOpts;
