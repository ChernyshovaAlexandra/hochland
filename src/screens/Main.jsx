import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import Logo from '../assets/images/logo_hochland.png'
import MainPic from "../components/MainPic";

const Main = ({ setPage, generateImg }) => {

    useEffect(() => {
        generateImg('');
    });
    return (
        <main className="bg-blue w-full main relative overflow-hidden">
            <div className="sm:flex h-full">
                <div className="flex-1 p-8 -mr-24 sm:w-3/12 w-full relative z-20 main-text">
                    <div className="logo sm:mb-16 sm:w-24 w-16 sm:h-24 h-16 mb-8">
                        <img src={Logo} alt="" />
                    </div>

                    <Header
                        size="text-xl sm:text-2xl text-white"
                        text={`Подарите близким <span class="text-yellow">заботу</span> <br class="hidden sm:block" />и хорошее настроение вместе <br class="hidden sm:block" />с <span class="text-yellow">Hochland</span>!`} />
                    <p className=" mt-3 mb-8 text-white text-lg font-bold">
                        <span className="text-yellow">Отправляйте карточки</span> <br className="hidden sm:block" />
                        заботы и участвуйте<br className="hidden sm:block" /> в розыгрыше ценных<br className="hidden sm:block" /> призов
                    </p>

                    <Button
                        classes={'bg-yellow px-4 py-3 rounded-xl text-blue font-bold uppercase'}
                        onClick={() => { setPage('cardgen') }}
                        text='Сгенерировать'
                    />
                    <Button
                        classes={'block mt-2 bg-white px-4 py-3 rounded-xl text-blue font-bold uppercase'}
                        onClick={() => { setPage('Winners') }}
                        text='
                        <span class="flex gap-2 items-center">
                        <svg class="w-4 h-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.33333 0.555556C3.33333 0.408213 3.39187 0.266905 3.49605 0.162719C3.60024 0.0585317 3.74155 0 3.88889 0H16.1111C16.2585 0 16.3998 0.0585317 16.504 0.162719C16.6081 0.266905 16.6667 0.408213 16.6667 0.555556V1.11111H19.4444C19.5918 1.11111 19.7331 1.16964 19.8373 1.27383C19.9415 1.37802 20 1.51932 20 1.66667V5C20 5.73671 19.7073 6.44325 19.1864 6.96419C18.6655 7.48512 17.9589 7.77778 17.2222 7.77778H16.2872C15.8901 8.8984 15.201 9.89264 14.291 10.6578C13.381 11.4229 12.2833 11.9312 11.1111 12.13V15.5556H14.4444C14.5918 15.5556 14.7331 15.6141 14.8373 15.7183C14.9415 15.8225 15 15.9638 15 16.1111V19.4444C15 19.5918 14.9415 19.7331 14.8373 19.8373C14.7331 19.9415 14.5918 20 14.4444 20H5.55556C5.40821 20 5.26691 19.9415 5.16272 19.8373C5.05853 19.7331 5 19.5918 5 19.4444V16.1111C5 15.9638 5.05853 15.8225 5.16272 15.7183C5.26691 15.6141 5.40821 15.5556 5.55556 15.5556H8.88889V12.13C7.71674 11.9312 6.61896 11.4229 5.70899 10.6578C4.79902 9.89264 4.10987 8.8984 3.71278 7.77778H2.77778C2.04107 7.77778 1.33453 7.48512 0.813592 6.96419C0.292658 6.44325 0 5.73671 0 5V1.66667C0 1.51932 0.0585317 1.37802 0.162719 1.27383C0.266905 1.16964 0.408213 1.11111 0.555556 1.11111H3.33333V0.555556ZM16.6667 5.55556V2.22222H18.8889V5C18.8889 5.44203 18.7133 5.86595 18.4007 6.17851C18.0882 6.49107 17.6643 6.66667 17.2222 6.66667H16.6667V5.55556ZM3.33333 2.22222H1.11111V5C1.11111 5.44203 1.28671 5.86595 1.59927 6.17851C1.91183 6.49107 2.33575 6.66667 2.77778 6.66667H3.33333V2.22222Z" fill="currentColor"/></svg>
                        Победители</span>'
                    />
                    <button onClick={() => { setPage('rules') }}
                        className="block sm:bg-transparent bg-blue p-2 absolute bottom-6 min-[766px]:bottom-16 text-white underline hover:no-underline text-reg cursor-pointer">Правила акции</button>
                </div>
                <div className="mainPic flex-1 self-end sm:w-9/12 -ml-16 min-[766px]:static absolute right-0 bottom-44 w-7/12 -mb-4 sm:-mb-0 z-10 min-[530px]:w-6/12 min-[530px]:-mb-8 min-[766px]:-mb-0">
                    <MainPic />
                </div>
            </div>
        </main>
    )
}

export default Main;