import React from "react";
import Popup from "../components/Popup";
import PopupInner from "../components/PopupInner";

const Rules = ({ setPage }) => {
    return (
        <Popup
            inner={<PopupInner setPage={setPage} />} />
    )
}
export default Rules;