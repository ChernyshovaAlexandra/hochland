import React from "react";


const Button = ({
    onClick, text, classes, type
}) => {
    return (
        <button
            onClick={onClick}
            type={type ? type : "button"}
            className={
                `button-st ${classes ? classes : "bg-yellow px-4 py-3 rounded-xl text-blue font-bold"}`
            }>
            <p className="relative"
                dangerouslySetInnerHTML={{ __html: text }}
            />
        </button>
    )
}
export default Button;