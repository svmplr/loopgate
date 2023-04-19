import { ConfigError } from "../../config/types";

const checkIfContainsAll = (arr1: any[], arr2: any[], exactMatch: boolean = true) => {
  if (exactMatch) {
    return arr1.every((value) => arr2.includes(value));
  } else {
    return arr1.some((value) => arr2.includes(value));
  }
};

export default checkIfContainsAll;