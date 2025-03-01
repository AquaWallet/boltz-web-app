export * from "./configs/templates/defaults";

const apiUrl = "https://testnet.boltz.exchange/api";
const blockExplorerUrl = "https://mempool.space/testnet";
const blockExplorerUrlLiquid = "https://liquid.network/testnet";
const blockExplorerUrlRsk = "https://explorer.testnet.rsk.co";

export const network = "testnet";
export const bolt11_prefix = "lntb";
export const loglevel = "debug";

export const pairs = {
    "BTC/BTC": {
        apiUrl: apiUrl,
        blockExplorerUrl: blockExplorerUrl,
    },
    "L-BTC/BTC": {
        apiUrl: apiUrl,
        blockExplorerUrl: blockExplorerUrlLiquid,
    },
    "RBTC/BTC": {
        apiUrl: apiUrl,
        blockExplorerUrl: blockExplorerUrlRsk,
    },
};
