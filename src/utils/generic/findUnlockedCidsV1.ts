/**import { unlockables } from "../../config/config";
import { checkIfContainsAllV1 } from "./index";
import { Unlockable, ConfigError } from "../../config/types";


/**const findUnlockedCidsV1 = (
  nfts: string[],
  unlockablesArray: Unlockable[] = unlockables
) => {
  if (unlockablesArray.length === 0) {
    throw new ConfigError("Empty config file");
  }

  // For each row in the config, check if the user holds all NFTs necessary to unlock them.
  const unlocks = unlockablesArray.filter((item) =>
  checkIfContainsAllV1(item.nftId, nfts)
  );

  // We're only interested in the CIDs
  const cids = unlocks.map((item) => item.cid);

  return cids;
};

export default findUnlockedCidsV1;*/