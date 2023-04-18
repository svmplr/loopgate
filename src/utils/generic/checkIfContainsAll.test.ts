import checkIfContainsAny from "./checkIfContainsAny";
import { ConfigError } from "../../config/types";

const mockConfig = ["0x1", "0x2", "0x3"];

describe("comparing whether all values in one array are present in another array", () => {
  it("should return true if the target is the same as the config", () => {
    expect(checkIfContainsAny(mockConfig, mockConfig)).toBe(true);
  });

  it("should return true if the has all values as the config, and more", () => {
    expect(
      checkIfContainsAny(mockConfig, ["0x0", "0x1", "0x2", "0x3", "0x4"])
    ).toBe(true);
  });

  it("should return false if an incomplete array is presented", () => {
    expect(checkIfContainsAny(mockConfig, ["0x1", "0x2"])).toBe(false);
  });

  it("should return false if an empty array is compared", () => {
    expect(checkIfContainsAny(mockConfig, [])).toBe(false);
  });

  it("should throw an error if an empty config is presented", () => {
    expect(() => checkIfContainsAny([], ["0x1", "0x2", "0x3"])).toThrowError(
      ConfigError
    );
  });
});
