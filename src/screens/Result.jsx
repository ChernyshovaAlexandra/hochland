import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import bridge from '@vkontakte/vk-bridge';

import arc1 from '../assets/images/Arc-green.svg'
import arc2 from '../assets/images/arc-yellow.svg'
import arc3 from '../assets/images/arc-red.svg'
import arc4 from '../assets/images/arc-blue.svg'
import ArrDown from '../assets/images/arrow-d.png'
import API from "../utils/API";
import Loader from "../components/Loader";
import FinalCard from "../components/FinalCard";
import img from '../assets/images/576.jpg'
import { finalUrl, vk_link } from "../constants/link";



const Result = ({ setPage, reciever, vk_id, greeting, setLoading, showMessage, showMessageAdditional, setPoints, points, card_url, limit, setBigCard, zoomedCard }) => {
    // const [finLink, generateLink] = useState()
    let mobile = window.innerWidth < 740
    useEffect(() => {
        setLoading(false)
    }, [])
    const send = () => {
        let finLink = finalUrl(card_url, color)
        console.log(finLink, greeting)
        console.log(window.VK.Share)

        if (mobile) {
            bridge.send('VKWebAppShare', {
                link: finLink
            })
                .then((data) => {
                    setLoading('Спасибо за активность! Проверяем задание');

                    if (data.result) {
                        setLoading(false)
                        API.post('/share/private', { vk_id: vk_id })
                            .then(response => {
                                if (response.data.success) {
                                    if (response.data.limit) {
                                        showMessage('Спасибо за активность!')
                                        showMessageAdditional(`Начисление баллов за отправку сообщений происходит за 5 карточек в день, 30 карточек в неделю и 50 карточек за весь период акции.
                                        Выполняйте другие задания, чтобы заработать дополнительные баллы`)
                                    }
                                    else {
                                        showMessage('Ура! Мы начислили вам баллы')
                                        showMessageAdditional(`Вы заработали ${response.data.points - points} баллов`);
                                    }
                                }
                                else {
                                    showMessage('Что-то пошло не так');
                                    showMessageAdditional('Нам не удолось проверить отправку сообщения. Возможно, это ошибка сервера. Мы уже работаем над этим')
                                }
                            })
                            .catch(err => {
                                showMessage('Что-то пошло не так');
                                showMessageAdditional('Нам не удолось проверить отправку сообщения. Возможно, это ошибка сервера. Мы уже работаем над этим')
                            })
                    }
                })
                .catch((error) => {
                    showMessage('Что-то пошло не так');
                    showMessageAdditional('Нам не удолось проверить отправку сообщения. Возможно, это ошибка сервера. Мы уже работаем над этим')
                    console.log(error);
                });
        } else {

            document.getElementsByClassName('vk-share')[0].append(
                window.VK.Share.button({
                    url: finLink,
                    title: `Лучший подарок - это забота! ${greeting}`,
                    image: finLink,
                    noparse: true
                }))
            window.VK.Share.click(0, this)
            setTimeout(() => {
                API.post('/share/private', { vk_id: vk_id })
                    .then(res => {

                        window.VK.Share._popups = [];
                        window.VK.Share._gens = [];
                        if (res.data.success) {
                            if (res.data.limit) {
                                showMessage('Спасибо за активность!')
                                showMessageAdditional('Вы уже получили баллы за выполнение этого задания😊')
                            }
                            else {
                                showMessage('Ура! Мы начислили вам баллы')
                                showMessageAdditional(`Вы заработали ${res.data.points - points} баллов`);
                            }
                            setPoints(res.data.points)
                        }
                        else {
                            showMessage('Что-то пошло не так');
                            showMessageAdditional('Нам не удолось проверить отправку сообщения. Возможно, это ошибка сервера. Мы уже работаем над этим')
                        }
                    })
                    .catch(err => {

                        window.VK.Share._popups = [];
                        window.VK.Share._gens = [];
                        showMessage('Что-то пошло не так');
                        showMessageAdditional('Нам не удолось проверить отправку сообщения. Возможно, это ошибка сервера. Мы уже работаем над этим')
                    })
            }, 17000)

        }

    }
    const shareOnTheWall = () => {
        let finLink = finalUrl(card_url, color)
        console.log(finLink, greeting)
        const process = 'VKWebAppShowWallPostBox'
        let attachments = {
            message: `Лучший подарок - это забота! ${greeting}`,
            attachments: finLink
        }


        bridge.send(process, attachments)
            .then((data) => {
                setLoading('Спасибо за активность! Проверяем репост');
                let checkObj = mobile ? data.post_id : data.result
                if (checkObj) {
                    setLoading(false)
                    API.post('/share/public', { vk_id: vk_id })
                        .then(response => {
                            if (response.data.success) {
                                if (response.data.limit) {
                                    showMessage('Спасибо за активность!')
                                    showMessageAdditional(`Начисление баллов за репост происходит один раз в неделю.
                                    Выполняйте другие задания, чтобы заработать дополнительные баллы`)
                                }
                                else {
                                    showMessage('Ура! Мы начислили вам баллы')
                                    showMessageAdditional(`Вы заработали ${response.data.points - points} баллов`)
                                }

                            }
                            else {
                                showMessage('Что-то пошло не так');
                                showMessageAdditional('Возможно, это ошибка сервера. Мы уже работаем над этим')
                            }
                        })
                        .catch(error => {
                            console.log(error)
                            showMessage('Что-то пошло не так');
                            showMessageAdditional('Возможно, это ошибка сервера. Мы уже работаем над этим')
                        })
                }
                else {
                    showMessage('Что-то пошло не так');
                    showMessageAdditional('Возможно, это ошибка сервера. Мы уже работаем над этим')
                }
            });
    }



    const colors = [
        { col: "green", arc: arc1 },
        { col: "yellow", arc: arc2 },
        { col: "red", arc: arc3 },
        { col: "blue", arc: arc4 },
    ];
    const [index, setInd] = useState(0);
    const [color, setColor] = useState(colors[index].col);
    const [bg, setBg] = useState(colors[index].arc);
    const zoom = (action) => {
        setBigCard(action)
    }
    return (
        <main className="blue-bg min-[766px]:px-8 px-4 pb-6 min-[766px]:pb-8 pt-20 main">
            <div className="flex gap-4 flex-wrap sm:justify-start justify-center">
                <div className="flex-auto min-[766px]:w-32 w-full relative">
                    <Header text={'<span class="text-white">Сердечное поздравление готово!</span>'}
                        size="text-3xl font-white text-left" />
                    {limit ?
                        <p className="mt-4 text-white moris ">
                            Делитесь заботой с близкими и участвуйте в розыгрыше призов
                        </p>
                        :
                        <p className="mt-4 text-white moris ">
                            Вы заработали <span className="text-yellow">10 баллов </span><br />
                            и можете увеличить<br /> свои баллы.
                        </p>
                    }
                    <div className="absolute arrow-d left-6 mx-auto bottom-8 w-fit sm:block hidden" style={{ maxWidth: '85%' }}>
                        <img src={ArrDown} />
                    </div>
                </div>
                <FinalCard zoomedCard={zoomedCard} bigCard={false} zoom={zoom} bg={bg} color={color} reciever={reciever} greeting={greeting} colors={colors} setInd={setInd} index={index} setColor={setColor} setBg={setBg} />
            </div>



            <div className="grid min-[766px]:grid-cols-3 min-[766px]:gap-2 gap-4 min-[766px]:mt-4 mt-8">
                <div className="rounded-lg text-center p-4 flex flex-col justify-between text-blue bg-white hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
                    <Header text="Поделитесь<br/>карточкой" size={'text-xl'} />
                    <p className="text-reg text-sm -mt-3"> Отправьте поздравление в личных сообщениях или сделайте репост, чтобы увеличить баллы  </p>
                    <Button onClick={() => {
                        send()
                    }} classes="bg-yellow rounded-full p-3 w-full text-center font-bold text-sm mt-4" text="Поделиться в ЛС | +10" />
                    <Button onClick={() => {
                        shareOnTheWall()
                    }} classes="bg-yellow rounded-full p-3 w-full text-center font-bold text-sm mt-2" text="Сделать репост | +50" />
                </div>
                <div className="rounded-lg text-center p-4 flex flex-col justify-between text-blue bg-lightGreen hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
                    <Header text="Прояви заботу" size={'text-xl'} />
                    <p className="text-reg text-sm -mt-3">Выполните задание на карточке, опубликуйте фото с хэштегом #сердечнопоздравляю
                        и получите 100 баллов</p>
                    <Button onClick={() => { setPage('task') }} classes="bg-blue text-white rounded-full p-3 w-full text-center font-bold text-sm mt-4" text="Участвовать | +100" />
                </div>
                <div className="rounded-lg text-center p-4 flex flex-col justify-between text-blue bg-white hover:scale-105 transition ease-in-out duration-300 cursor-pointer">
                    <Header text="Предложите свой<br/>вариант карточки" size={'text-xl'} />
                    <p className="text-reg text-sm -mt-3">Напишите свой текст поздравления и заработайте 150 баллов</p>
                    <Button onClick={() => { setPage('propose') }} classes="bg-yellow rounded-full p-3 w-full text-center font-bold text-sm mt-4" text="Предложить | +30" />
                </div>
                <div className="hidden vk-share"></div>
            </div>
            {zoomedCard ?
                <div className="loader z-40 fin" onClick={() => { zoom(false); }}>
                    <div className="cancel-b absolute top-16 right-24 text-blue cursor-pointer bg-blue-100 rounded-lg hover:bg-blue-200" onClick={() => { zoom(false); }}>
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </div>
                    <FinalCard zoomedCard={zoomedCard} bigCard={true} zoom={zoom} bg={bg} color={color} reciever={reciever} greeting={greeting} colors={colors} setInd={setInd} index={index} setColor={setColor} setBg={setBg} />
                </div> : false}
        </main >
    )
}

export default Result;