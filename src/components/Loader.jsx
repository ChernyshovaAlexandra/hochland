import React from "react";
import Header from "./Header";


const Loader = ({ loading, }) => {
    return (
        <div className="loader z-40">
            <div className="grid gap-4 items-center">
                <Header text={loading} size="text-blue text-3xl mb-4 text-center" />
                <svg class="spinner" viewBox="0 0 50 50">
                    <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
                </svg>
            </div>

        </div>
    )
}
export const Message = ({ message, messageAdditional, showMessage, showMessageAdditional }) => {
    return (
        <div className="loader z-40">
            <div className="grid gap-4 items-center relative w-10/12 ">
                <div className="absolute top-4 right-4 text-blue cursor-pointer bg-blue-100 rounded-lg hover:bg-blue-200" onClick={() => { showMessage(false); showMessageAdditional('') }}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </div>
                <div className="bg-white rounded-lg p-6 text-center pt-16 border-2 border-blue">
                    <Header text={message} size="text-blue text-2xl mb-4 text-center" />
                    <p>{messageAdditional}</p>
                </div>
            </div>

        </div>
    )
}

export default Loader;