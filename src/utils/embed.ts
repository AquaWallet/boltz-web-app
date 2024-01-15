import { assets } from "../consts";

export const detectEmbedded = () => {
    const paramsString = window.location.search;
    const searchParams = new URLSearchParams(paramsString);
    if (searchParams.has("embed") && searchParams.get("embed") === "1") {
        return true;
    }
    return false;
};

export const parseSwapParams = () => {
    const paramsString = window.location.search;
    const searchParams = new URLSearchParams(paramsString);
    const swapParams = {} as {amount: String, address: String, assetSend: String, assetReceive: String};
    if (searchParams.has("address")) {
        swapParams.address = searchParams.get("address");
    }
    if (searchParams.has("assetSend")) {
        const asset = searchParams.get("assetSend");
        if (assets.includes(asset)) {
            swapParams.assetSend = asset;
        }
    }
    if (searchParams.has("assetReceive")) {
        const asset = searchParams.get("assetReceive");
        if (assets.includes(asset)) {
            swapParams.assetReceive = asset;
        }
    }

    if (searchParams.has("amount")) {
        const amount = searchParams.get("amount");
        swapParams.amount = amount;
    }

    return swapParams;
};

export const parseRefundParams = () => {
    const paramsString = window.location.search;
    const searchParams = new URLSearchParams(paramsString);
    const refundParams = {} as {refundAddress: String};
    if (searchParams.has("refundAddress")) {
        refundParams.refundAddress = searchParams.get("refundAddress");
    }
    

    return refundParams;
};