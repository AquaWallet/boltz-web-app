import { render, screen } from "@solidjs/testing-library";
import { describe, expect, test } from "vitest";

import BlockExplorer from "../../src/components/BlockExplorer";
import { pairs } from "../../src/config";
import i18n from "../../src/i18n/i18n";

describe("BlockExplorer", () => {
    test.each`
        asset      | baseLink                               | address
        ${"BTC"}   | ${pairs["BTC/BTC"].blockExplorerUrl}   | ${"bcrt1qh47qjmkkdxmg8cjxhe7gnnuluwddcw692cfjsv"}
        ${"L-BTC"} | ${pairs["L-BTC/BTC"].blockExplorerUrl} | ${"el1qqfvxkyk2973r8y0dd42ce34r33gplzaharn0sj69qs6gvkua0r0evkk6skde36hgfx2gufy8s8ppdz54kqwkcn9az63n5pcj3"}
    `(
        "should link to $asset addresses",
        async ({ asset, baseLink, address }) => {
            render(() => <BlockExplorer asset={asset} address={address} />);

            const button = await screen.findByText(
                i18n.en.blockexplorer.replace(
                    "{{ typeLabel }}",
                    i18n.en.blockexplorer_lockup_address,
                ),
            );
            expect(button).not.toBeUndefined();
            expect((button as any).href).toEqual(
                `${baseLink}/address/${address}`,
            );
        },
    );

    test.each`
        asset      | baseLink                               | txId
        ${"BTC"}   | ${pairs["BTC/BTC"].blockExplorerUrl}   | ${"813c90372c9b774396c66099cf8015f9510a8ba5686cbb78d8e848959fe7bb5d"}
        ${"L-BTC"} | ${pairs["L-BTC/BTC"].blockExplorerUrl} | ${"9193b769c217808a17a86890195851eab78fdfd2f14d877163587327620324af"}
    `(
        "should link to $asset transactions",
        async ({ asset, baseLink, txId }) => {
            render(() => <BlockExplorer asset={asset} txId={txId} />);

            const button = await screen.findByText(
                i18n.en.blockexplorer.replace(
                    "{{ typeLabel }}",
                    i18n.en.blockexplorer_claim_tx,
                ),
            );
            expect(button).not.toBeUndefined();
            expect((button as any).href).toEqual(`${baseLink}/tx/${txId}`);
        },
    );
});
