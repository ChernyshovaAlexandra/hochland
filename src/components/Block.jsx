import React from "react";


const Block = ({ text, onClick, img, classes }) => {
    return (
        <div className={`sm:py-6 sm:px-4 p-3  grid place-items-center rounded-lg cursor-pointer block-style  ${classes ? classes : 'lightblue-bg w-36 sm:w-52'}`} onClick={onClick}>
            <img className="w-24 sm:w-48 h-24 sm:h-48 object-contain" src={img} alt="" />
            <p className={`relative ${classes ? 'text-white' : 'text-blue'} text-center font-bold`}
                dangerouslySetInnerHTML={{ __html: text }}
            />
        </div>
    )
}

export default Block;