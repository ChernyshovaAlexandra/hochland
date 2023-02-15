import React from "react";
import img1 from '../assets/images/rule1.png'
import img2 from '../assets/images/rule2.png'
import img3 from '../assets/images/rule3.png'
import img4 from '../assets/images/yandex-mini.png'
import img5 from '../assets/images/ozon.png'
import img6 from '../assets/images/toster.png'
import Button from "./Button";
import Header from "./Header";


const PopupInner = ({ setPage }) => {
    return (
        <>
            <div className="min-[766px]:flex gap-4 h-fit">
                <div className="min-[766px]:w-5/12 w-full h-full">
                    <Header text="Правила" size="text-white text-center text-2xl" />
                    <div className="grid gap-4 h-full -mt-2 grid-mob" style={{ 'gridTemplateRows': '33% 28.3% 37%' }}>
                        <div className="p-4 rounded-lg bg-lightBlue text-blue font-bold">
                            <img className="w-16 h-16 object-contain mb-4" src={img1} alt="" />
                            <p>Выберите о ком и в какой сфере вы бы хотели позаботиться
                            </p>
                        </div>
                        <div className="p-4 rounded-lg bg-lightBlue text-blue font-bold">
                            <img className="w-16 h-18 object-contain mb-4" src={img2} alt="" />
                            <p>Создайте карточку заботы</p>
                        </div>
                        <div className="p-4 rounded-lg bg-lightBlue text-blue font-bold">
                            <img className="w-16 h-12 object-contain mb-4" src={img3} alt="" />
                            <p>Отправляйте карточки друзьям и близким и участвуйте в розыгрыше ценных призов от Hochland!</p>
                        </div>
                    </div>
                </div>
                <div className="min-[766px]:w-7/12 mt-8 min-[766px]:mt-0">
                    <Header text="Призы" size="text-white text-center text-2xl" />
                    <div className="bg-blueZ -mt-2 p-4 rounded-lg text-blue">
                        <Header text="Еженедельные подарки" size="text-blue text-lg" />
                        <p className="block -mt-2">Если вы набрали от 50 баллов:</p>
                        <div className="my-2 rounded-lg bg-white p-3">
                            <div className="flex gap-4 font-bold">
                                <img src={img5} alt="" srcSet="" />
                                <p>50 сертификатов OZON номиналом <span className="text-red">500 рублей</span></p>
                            </div>
                        </div>
                        <p>Если вы набрали от 100 баллов:</p>
                        <div className="my-2 rounded-lg bg-white p-3">
                            <div className="flex gap-4 font-bold">
                                <img src={img6} alt="" srcSet="" />
                                <p>3 тостера в неделю</p>
                            </div>
                        </div>
                        <hr className="my-4 border-black" />
                        <Header text="Главные призы" size="text-blue text-lg" />
                        <p  className="block -mt-2">Если вы набрали от 100 баллов:</p>
                        <div className="my-2 rounded-lg bg-white p-3">
                            <div className="flex gap-4 font-bold">
                                <img src={img5} alt="" srcSet="" />
                                <p>50 сертификатов OZON номиналом <span className="text-red">1000 рублей</span></p>
                            </div>
                        </div>
                        <p>Среди 30% пользователей с наибольшим количество баллов:</p>
                        <div className="my-2 rounded-lg bg-white p-3">
                            <div className="flex gap-4 font-bold">
                                <img src={img4} alt="" srcSet="" />
                                <p>5 Яндекс станций мини</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Button text={'Вперед'} classes="bg-yellow rounded-full py-3 px-12 mx-auto block w-fit text-center font-bold text-sm mt-4" onClick={() => setPage('cardgen')} />
        </>
    )
}

export default PopupInner;