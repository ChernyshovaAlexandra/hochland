import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import Logo from '../assets/images/logo_hochland.png'
import MainPic from "../components/MainPic";
import Rules from '../assets/Full_rules.pdf'

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
                        onClick={() => { setPage('rules') }}
                        text='Сгенерировать'
                    />
                    <a href={Rules} target="_blank"
                        className="block sm:bg-transparent bg-blue p-2 absolute bottom-6 min-[766px]:bottom-16 text-white underline hover:no-underline text-reg cursor-pointer">Правила акции</a>
                </div>
                <div className="mainPic flex-1 self-end sm:w-9/12 -ml-16 min-[766px]:static absolute right-0 bottom-44 w-7/12 -mb-4 sm:-mb-0 z-10 min-[530px]:w-6/12 min-[530px]:-mb-8 min-[766px]:-mb-0">
                    <MainPic />
                </div>
            </div>
        </main>
    )
}

export default Main;