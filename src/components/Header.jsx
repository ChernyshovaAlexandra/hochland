import React from "react";

const Header = ({ text, size, style }) => {
    return (
        <h1 className={`${size} mb-4  mx-auto`}
            style={style}
            dangerouslySetInnerHTML={{ __html: text }}
        />
    )
}

export default Header;