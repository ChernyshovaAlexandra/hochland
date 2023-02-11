import React from "react";

const Popup = ({ inner, onClick }) => {
    return (
        <div className="popup sm:rounded-lg">
            <div className="popup-inner p-6 relative">
                <div className="close-btn" onClick={onClick}>
                    <span></span><span></span>
                </div>
                <div >{inner}</div>
            </div>
        </div>
    )
}
export default Popup;