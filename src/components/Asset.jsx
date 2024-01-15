import { setAssetSelect, setAssetSelected } from "../signals";
import "../style/asset.scss";

const Asset = ({ side, signal }) => {
    const openSelect = () => {
        setAssetSelected(side);
        setAssetSelect(true);
    };

    return (
        <div class="asset-wrap">
            <div class={`asset asset-${signal()}`}>
                <div class="asset-selection">
                </div>
            </div>
            <div class="assets-select"></div>
        </div>
    );
};

export default Asset;
