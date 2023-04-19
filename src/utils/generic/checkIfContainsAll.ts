import { ConfigError } from "../../config/types";

const checkIfContainsAll = (arr1: any[], arr2: any[]) => {
  return arr1.every((value) => arr2.includes(value));
};

export default checkIfContainsAll;
