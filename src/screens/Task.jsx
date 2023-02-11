import React from "react";
import Header from "../components/Header";
import share from '../assets/images/share.png'
import publicate from '../assets/images/publicate.png'


const Task = () => {
    return (
        <main className="blue-bg p-6 main grid place-items-center text-blue pt-20">
            <div className="bg-white rounded-lg min-[766px]:p-8 p-5 m-auto min-[766px]:w-10/12 h-fit">
                <Header text={'Приготовить завтрак с сыром Hochland для …'}
                    size={'min-[766px]:text-3xl text-xl text-blue text-center min-[766px]:mb-12 mb-8'}
                />

                <div className="content">
                    <div className="grid min-[766px]:grid-cols-2 gap-4 text-blue text-reg">
                        <div className="bg-lightBlue rounded-lg overflow-hidden">
                            <p className="min-[766px]:p-8 p-5 font-bold">Выполни задание, сделай фото</p>
                            <img className="mx-auto -mb-4 h-28" src={share} alt="" />
                        </div>
                        <div className="bg-lightBlue rounded-lg overflow-hidden">
                            <p className="min-[766px]:p-8 p-5 font-bold">Опубликуй ВКонтакте с хештегом </p>
                            <img className="mx-auto -mb-12 h-36" src={publicate} alt="" />
                        </div>
                    </div>
                    <div className="min-[766px]:p-8 p-5 h-44 bg-lightBlue rounded-lg font-bold text-blue text-reg mt-4">
                        <p>Получи 100 баллов<br/>и участвуй в розыгрыше призов</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Task;