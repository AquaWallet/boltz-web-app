/* @refresh reload */
import { Navigate, Route, Router, Routes } from "@solidjs/router";
import log from "loglevel";
import { createRoot, createSignal } from "solid-js";
import { render } from "solid-js/web";

import Create from "./Create";
import Error from "./Error";
import { setHideHero } from "./Hero";
import NotFound from "./NotFound";
import Notification from "./Notification";
import Pay from "./Pay";
import Refund from "./Refund";
import RefundStep from "./RefundStep";
import { loglevel } from "./config";
import { Web3SignerProvider } from "./context/Web3";
import { checkReferralId } from "./helper";
import { detectLanguage } from "./i18n/detect";
import { setWasmSupported, setWebln } from "./signals";
import "./style/index.scss";
import { detectEmbedded } from "./utils/embed";
import "./utils/patches";
import { swapChecker } from "./utils/swapChecker";
import { checkWasmSupported } from "./utils/wasmSupport";
import { detectWebLNProvider } from "./utils/webln";

export const [embedded, setEmbedded] = createSignal(false);

log.setLevel(loglevel);

detectWebLNProvider().then((state) => setWebln(state));
setWasmSupported(checkWasmSupported());
checkReferralId();
detectLanguage();

createRoot(() => {
    swapChecker();
});

if (detectEmbedded()) {
    setHideHero(true);
    setEmbedded(true);
}

if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("./service-worker.js", { scope: "./" })
        .then((reg) => {
            log.info(`Registration succeeded. Scope is ${reg.scope}`);
        });
}

const loaderElement = document.getElementsByClassName("initial-loader")[0];
loaderElement.remove();

const cleanup = render(
    () => (
        <Router>
            <Web3SignerProvider>
                <Routes>
                    <Route path="*" element={<Navigate href={"/404"} />} />
                    <Route path="/404" component={NotFound} />
                    <Route path="/" component={Create} />
                    <Route path="/swap/:id" component={Pay} />
                    <Route path="/swap/refund/:id" component={RefundStep} />
                    <Route path="/error" component={Error} />
                    <Route path="/refund" component={Refund} />
                </Routes>
                <Notification />
            </Web3SignerProvider>
        </Router>
    ),
    document.getElementById("root"),
);

if (import.meta.hot) {
    console.log("Hot reload");
    import.meta.hot.dispose(cleanup);
}
