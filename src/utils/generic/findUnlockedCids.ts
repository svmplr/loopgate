import { unlockables } from "../../config/config";
import { checkIfContainsAll } from "./index";
import { Unlockable, ConfigError } from "../../config/types";

const findUnlockedCids = (
  nfts: string[],
  unlockablesArray: Unlockable[] = unlockables,
  requireAllNfts: boolean = true
) => {
  if (unlockablesArray.length === 0) {
    throw new ConfigError("Empty config file");
  }

  const unlocks = unlockablesArray.filter((item) =>
    checkIfContainsAll(item.nftId, nfts, requireAllNfts)
  );

  const cids = unlocks.map((item) => item.cid);

  return cids;
};

export default findUnlockedCids;