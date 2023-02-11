import React from "react";
import Header from "./Header";


const GenerationContainer = ({ extraClasses, text, headerStyles, inner }) => {
    return (
        <div className={`w-full p-8 pt-16 ${extraClasses}`}>
            <Header
                size={`${headerStyles} relative z-10 mb-32 text-center mt-2`}
                text={text}
            />
            {inner}

        </div>
    )
}

export default GenerationContainer;