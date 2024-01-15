import { onMount } from "solid-js";

const TransactionProcessing = () => {
    onMount(() => {
        if (window.Processing) {
            Processing.postMessage(true);
        }
    })

    return (
        <div>
        </div>
    );
};

export default TransactionProcessing;
