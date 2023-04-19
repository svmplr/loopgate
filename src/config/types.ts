export interface Unlockable {
  cid: `baf${string}`;
  name: string;
  nftId: `0x${string}`[];
  requireAll?: boolean;
}

export class ConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ConfigError";
  }
}