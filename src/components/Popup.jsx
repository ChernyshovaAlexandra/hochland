import React from "react";

const Popup = ({ inner, onClick }) => {
    return (
        <div className="popup bg-blue main">
            <div className="popup-inner p-6 relative sm:rounded-lg">
                <div className="close-btn" onClick={onClick}>
                    <span></span><span></span>
                </div>
                <div >{inner}</div>
            </div>
        </div>
    )
}
export default Popup;