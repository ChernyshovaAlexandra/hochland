import React from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import { finalUrlReady } from "../constants/link";

const CardReady = ({ image, color, setHash }) => {
    return (
        <main className="bg-blue w-full main relative overflow-hidden result-bg">
            <div className="w-10/12 text-center mx-auto py-6 relative">
                <div className="bg-gray result-pic mx-auto my-4 rotate-6 mb-8 rounded-xl relative"
                    style={{
                        backgroundImage: `url('${finalUrlReady(image, color)}')`,
                        backgroundPosition: 'center',
                        backgroundSize: '100%',
                        backgroundRepeat: 'no-repeat'
                    }}
                ></div>

                <Header
                    text={`<span>С вами <span class="text-yellow">поделились</span><br class="hidden sm:block" /> сердечным поздравлением!</span>`}
                    size="text-white sm:text-3xl text-2xl" />
                <p className="mt-4 mb-8 text-white font-bold">Генерируйте поздравления<br className="hidden sm:block" />  для близких и участвуйте<br class="hidden sm:block" />  в розыгрыше призов</p>
                <Button text='Сгенерировать' onClick={() => setHash(false)} />
            </div>
        </main>
    )
}

export default CardReady;