import React, { useState } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import bridge from '@vkontakte/vk-bridge';

import ArrT from '../assets/images/arrT.svg'
import ArrB from '../assets/images/arrB.svg'
import img1 from '../assets/images/family.png'
import img2 from '../assets/images/collegue.png'
import img3 from '../assets/images/friends.png'
import img4 from '../assets/images/lover.png'
import arc1 from '../assets/images/Arc-green.svg'
import arc2 from '../assets/images/arc-yellow.svg'
import arc3 from '../assets/images/arc-red.svg'
import arc4 from '../assets/images/arc-blue.svg'
import ArrDown from '../assets/images/arrow-d.png'


const images = {
    family: img1,
    collegue: img2,
    friends: img3,
    lover: img4
}



const Result = ({ setPage, reciever }) => {
    if (!reciever) { reciever = 'family' }
    const send = () => {
        document.getElementsByClassName('vk-share')[0].append(window.VK.Share.button({
            url: 'https://localhost:3000',
            title: "Моя забота о тебе",
            image: 'https://bali.top/storage/images/Post/100/img-0766.jpeg',
            noparse: true

        }))
        window.VK.Share.click(0, this);

    }
    const share = () => {
        bridge.send('VKWebAppShare', {
            link: 'https://vk.com/vkappsdev'
        })
            .then((data) => {
                if (data.result) {
                    // Запись размещена
                }
            })
            .catch((error) => {
                // Ошибка
                console.log(error);
            });

    }
    const colors = [
        { col: "green", arc: arc1 },
        { col: "yellow", arc: arc2 },
        { col: "red", arc: arc3 },
        { col: "blueL", arc: arc4 },
    ];
    const [index, setInd] = useState(0);
    const [color, setColor] = useState(colors[index].col);
    const [bg, setBg] = useState(colors[index].arc)

    const arrTop = () => {
        if (index == 0) { setInd(colors.length - 1) } else { setInd(index - 1) }
        setColor(colors[index].col);
        setBg(colors[index].arc);
    }
    const arrDown = () => {
        if (index == colors.length - 1) { setInd(0) } else { setInd(index + 1) }
        setColor(colors[index].col);
        setBg(colors[index].arc);
    }
    return (
        <main className="blue-bg min-[766px]:px-8 px-4 pb-6 min-[766px]:pb-8 pt-20 main">
            <div className="flex gap-4 flex-wrap">
                <div className="flex-auto min-[766px]:w-32 w-full relative">
                    <Header text={'<span class="text-yellow">Сыр</span><span class="text-white">дечное поздравление готово!</span>'}
                        size="text-3xl font-white text-left" />
                    <p className="mt-4 text-white moris ">
                        Вы заработали <span className="text-yellow">10 баллов </span><br />
                        и можете увеличить<br /> свои баллы.
                        
                    </p>
                    <div className="absolute arrow-d left-6 mx-auto bottom-8 w-fit sm:block hidden">
                            <img src={ArrDown} />
                        </div>
                </div>
                <div className="min-[766px]:w-72 final-pic">
                    <div className="bg-white border-4 with-logo border-white rounded-lg overflow-hidden w-full text-center ">
                        <div className={`image-frame bg-${color}-res relative w-full h-64 -mt-6`}>
                            <img src={bg} className='absolute mx-auto bottom-0 w-11/12 left-0 right-0 ' alt="" />
                            <img src={images[reciever]} alt="" className="absolute mx-auto bottom-0 w-10/12 left-0 right-0" />
                            <div className={`absolute -bottom-6 border-2 border-white bg-${color}-res text-white rounded-full left-0 w-fit right-0 mx-auto px-4 moris pt-2 pb-1`}>
                                <span className="text-yellow" style={{ lineheight: '1.8' }}>Сыр</span>дечно поздравляем</div>
                        </div>
                        <div className="p-3 mt-4">
                            <span className="text-blue mx-auto">
                                <span className="moris font-bold ">
                                    Лучший подарок - <span className={`text-${color}`}>это забота!</span><br />
                                    а забота с Хохланд это…<br />
                                </span>
                                <div className="font-bold mt-2 text-xs">
                                    ...это порадовать родителей после работы
                                    домашними бургерами с плавленым
                                    сыром Hochland</div>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="min-[766px]:w-16 self-center">
                    <div className="bg-white rounded-xl p-4 grid gap-y-3 h-fit place-items-center mb-4 arr cursor-pointer" onClick={arrTop}>
                        <img className="min-[766px]:w-6 w-4 min-[766px]:h-6 h-4 object-content object-center " src={ArrT} alt="" />
                    </div>
                    <div className="bg-white rounded-xl p-4 grid gap-y-3 h-fit place-items-center">
                        {
                            colors.map((col, id) => (
                                <div
                                    key={id}
                                    onClick={() => { setColor(col.col); setInd(id); setBg(col.arc) }}
                                    className={`rounded-full w-6 mx-auto cursor-pointer h-6 bg-${col.col} ${color === col.col ? 'active' : ''}`}></div>
                            ))
                        }

                    </div>
                    <div className="bg-white rounded-xl p-4 grid gap-y-3 h-fit place-items-center mt-4 arr cursor-pointer" onClick={arrDown}>
                        <img className="min-[766px]:w-6 w-4 min-[766px]:h-6 h-4 object-content object-center " src={ArrB} alt="" />
                    </div>
                </div>
            </div>



            <div className="grid min-[766px]:grid-cols-3 min-[766px]:gap-2 gap-4 min-[766px]:mt-4 mt-8">
                <div className="rounded-lg text-center p-4 flex flex-col justify-between text-blue bg-white">
                    <Header text="Поделитесь<br/>карточкой" size={'text-xl'} />
                    <p className="text-reg text-sm -mt-3"> Поделитесь карточкой в личных сообщениях или сделайте репост, чтобы увеличить баллы  </p>
                    <Button onClick={() => { send() }} classes="bg-yellow rounded-full p-3 w-full text-center font-bold text-sm mt-4" text="Поделиться в ЛС | +10" />
                    <Button onClick={() => { share() }} classes="bg-yellow rounded-full p-3 w-full text-center font-bold text-sm mt-2" text="Сделать репост | +10" />
                </div>
                <div className="rounded-lg text-center p-4 flex flex-col justify-between text-blue bg-lightGreen">
                    <Header text="Прояви заботу" size={'text-xl'} />
                    <p className="text-reg text-sm -mt-3">Выполните задание на карточке, опубликуйте фото с хэштегом #сЫрдечнопоздравляю
                        и получите 100 баллов</p>
                    <Button onClick={() => { setPage('task') }} classes="bg-blue text-white rounded-full p-3 w-full text-center font-bold text-sm mt-4" text="Участвовать | +100" />
                </div>
                <div className="rounded-lg text-center p-4 flex flex-col justify-between text-blue bg-white">
                    <Header text="Предложите свой<br/>вариант карточки" size={'text-xl'} />
                    <p className="text-reg text-sm -mt-3">Напишите свой текст поздравления и заработайте 150 баллов</p>
                    <Button onClick={() => { setPage('propose') }} classes="bg-yellow rounded-full p-3 w-full text-center font-bold text-sm mt-4" text="Предложить | +30" />
                </div>
                <div className="hidden vk-share"></div>
            </div>
        </main >
    )
}

export default Result;