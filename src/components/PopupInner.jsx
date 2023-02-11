import React from "react";
import img1 from '../assets/images/rule1.png'
import img2 from '../assets/images/rule2.png'
import img3 from '../assets/images/rule3.png'
import img4 from '../assets/images/yandex.png'
import img5 from '../assets/images/ozon.png'
import Button from "./Button";


const PopupInner = ({setPage}) => {
    return (
        <div>
            <h2 class="text-3xl text-center text-blue">Правила</h2>
            <div className="content mt-4 overflow-auto">
                <div className="grid sm:grid-cols-3 gap-2 ">
                    <div className="lightblue-bg p-4">
                        <img className="w-16 h-16 sm:w-24 sm:h-24 object-contain" src={img1} alt="" />
                        <p className="mt-4 text-blue">
                            Выбирайте о ком и в какой сфере хотели бы поделиться
                        </p>
                    </div>
                    <div className="lightblue-bg p-4">
                        <img className="w-16 h-16 sm:w-24 sm:h-24 object-contain" src={img2} alt="" />
                        <p className="mt-4 text-blue">Генерируйте карточку заботы</p>
                    </div>
                    <div className="lightblue-bg p-4">
                        <img className="w-16 h-16 sm:w-24 sm:h-24 object-contain" src={img3} alt="" />
                        <p className="mt-4 text-blue">Делитесь карточками, выполняйте задания и участвуйте в розыгрыше ценных призов от Hochland!</p>
                    </div>
                </div>
                <div className="mt-4 lightgreen-bg p-4">
                    <h3 className="text-2xl text-green">Еженедельные подарки</h3>
                    <div className="mt-4 grid sm:grid-cols-2 gap-4">
                        <div>
                            <p className="text-green">Если вы набрали 150 баллов и более:</p>
                            <div className="w-full bg-white p-4 mt-4">
                                <div className="flex gap-2">
                                    <img className="w-11 h-11 object-contain" src={img4} alt="" />
                                    <p className="text-blue">30 подписок Яндекс Плюс</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="text-green">Если вы набрали 500 баллов и более:</p>
                            <div className="w-full bg-white p-4 mt-4">
                                <div className="flex gap-2">
                                    <img className="w-11 h-11 object-contain" src={img5} alt="" />
                                    <p className="text-blue">10 сертификатов OZON номиналом <span className="text-red">3000 рублей</span></p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <Button
                onClick={()=>setPage('cardgen')}
                    classes="block mt-6 mx-auto w-fit bg-yellow px-6 py-3 rounded-2xl text-blue font-bold"
                    text={'Вперед'}
                />
            </div>
        </div>
    )
}

export default PopupInner;