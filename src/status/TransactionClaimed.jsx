import checkbox from "../assets/checkbox.svg";

import t from "../i18n";

const TransactionClaimed = () => {
    Done.postMessage(true);

    return (
        <div>
            <h2>{t("congrats")}</h2>
            <img src={checkbox} style="width: 100px; margin-top:50px" alt="done" />
            <hr />
        </div>
    );
};

export default TransactionClaimed;
