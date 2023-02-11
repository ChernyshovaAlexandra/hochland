import React from "react";

const Header = ({ text, size }) => {
    return (
        <h1 className={`${size} mb-4  mx-auto`}
        dangerouslySetInnerHTML={{ __html: text}}
       />
    )
}

export default Header;