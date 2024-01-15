import { useNavigate } from "@solidjs/router";

import t from "../i18n";

const InvoiceExpired = () => {
    const navigate = useNavigate();

    return (
        <div>
            <p>{t("invoice_expired")}</p>
        </div>
    );
};

export default InvoiceExpired;
