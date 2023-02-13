import React, { useState } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import Logo from '../assets/images/logo_hochland.png'
import Popup from "../components/Popup";
import PopupInner from "../components/PopupInner";
import MainPic from "../components/MainPic";

const Main = ({ setPage }) => {
    const [popup, showPopup] = useState(false)
    return (
        <main className="bg-blue w-full main relative overflow-hidden">
            <div className="sm:flex h-full">
                <div className="flex-1 p-8 -mr-24 sm:w-3/12 w-full relative z-20">
                    <div className="logo sm:mb-16 sm:w-24 w-16 sm:h-24 h-16 mb-8">
                        <img src={Logo} alt="" />
                    </div>

                    <Header
                        size="text-xl sm:text-2xl text-white"
                        text={`Подарите близким <span class="text-yellow">заботу</span> <br class="hidden sm:block" />и хорошее настроение вместе <br class="hidden sm:block" />с <span class="text-yellow">Hochland</span>!`} />
                    <p className=" mt-3 mb-8 text-white text-lg font-bold">
                    Отправляйте карточки заботы <br /> и принимайте участие<br /> в <span className="text-yellow">розыгрыше</span> ценных<br /> призов
                        {/* <span className="text-yellow">Генерируй карточки</span> заботы<br /> и участвуй в розыгрыше<br /> ценных призов */}
                    </p>
                    
                    <Button
                    classes={'bg-yellow px-4 py-3 rounded-xl text-blue font-bold uppercase'}
                        onClick={() => { setPage('cardgen') }}
                        text='Сделать ❤️ карточку'

                    />
                    <div onClick={() => setPage('rules')
                    }
                        className="mt-4 text-white underline hover:no-underline text-reg cursor-pointer">Правила акции</div>

                </div>
                <div className="mainPic flex-1 self-end sm:w-9/12 -ml-16 min-[766px]:static absolute right-0 bottom-44 w-7/12 -mb-4 sm:-mb-0 z-10 min-[530px]:w-6/12 min-[530px]:-mb-8 min-[766px]:-mb-0">
                    <MainPic />
                </div>
            </div>

            <div className="absolute -bottom-6 min-[766px]:-bottom-2 p-6 bg-darkBlue text-white text-reg rounded-lg sm:w-4/12 w-full sm:left-8 z-20">
                <p> Поздравляйте с теплом и заботой
                    вместе <br className="sm:block hidden" />с Hochland</p>
                <Button
                    onClick={() => { }}
                    text='Участвовать'
                    classes="rounded-full bg-lightBlue text-blue px-4 py-4 my-6 "

                />
            </div>
            
        </main>
    )
}

export default Main;