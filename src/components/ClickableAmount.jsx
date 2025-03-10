import { Show } from "solid-js";

import { formatAmount } from "../utils/denomination";

const ClickableAmount = ({ label, onClick, amount }) => {
    return (
        <div>
            <Show when={label !== undefined}>{label}: </Show>
            <span onClick={() => onClick(amount())} class="btn-small btn-light">
                {formatAmount(amount())}
            </span>
        </div>
    );
};

export default ClickableAmount;
