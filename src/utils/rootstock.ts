// Satoshis are 10 ** 8 and Wei 10 ** 18 -> sats to wei 10 ** 10
export const satoshiToWei = (satoshis: number) => BigInt(satoshis) * 10n ** 10n;

export const prefix0x = (val: string) => `0x${val}`;
