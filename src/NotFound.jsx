import { useNavigate } from "@solidjs/router";

import t from "./i18n";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div id="notfound" class="inner-wrap">
            <h3>
	       Something went wrong :-(
            </h3>
        </div>
    );
};

export default NotFound;
