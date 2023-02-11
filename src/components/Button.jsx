import React from "react";


const Button = ({
    onClick, text, classes
}) => {
    return (
        <button
            onClick={onClick}
            type="button"
            className={
                classes ? classes : "bg-yellow px-4 py-3 rounded-xl text-blue font-bold"
            }>
            <p className="relative"
                dangerouslySetInnerHTML={{ __html: text }}
            />
        </button>
    )
}
export default Button;