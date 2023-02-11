import React from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import { steps } from "./CardGeneration";


const MyPropose = () => {
    const propose = () => {

    }
    return (
        <main className="blue-bg p-6 main grid place-items-center text-blue pt-20">
            <div className=" bg-lightBlue rounded-lg min-[766px]:p-8 p-5 m-auto min-[766px]:w-10/12 h-fit">
                <Header
                    size={'min-[766px]:text-3xl text-xl text-blue text-center min-[766px]:mb-12 mb-8'}
                    text='Предложите свой вариант карточки заботы и участвуйте в розыгрыше' />

                <form action="" className=" text-reg min-[766px]:w-10/12 mx-auto">
                    <div>
                        <label htmlFor="" className="mb-3 font-bold block">
                            О ком позаботиться?
                        </label>

                        <select name="" id="" className="rounded-lg mb-8">
                            {
                                steps[0].btns.map((opt, id) => (
                                    <option value={opt.prop}
                                    >
                                        {opt.name}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div>
                        <label htmlFor="" className="mb-3 font-bold block">
                            Лучший подарок - это забота,
                            а забота с Hochland - это…
                        </label>
                        <textarea className="w-full rounded-lg" name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <Button onClick={() => { propose() }} classes="bg-yellow rounded-full py-3 px-6 mx-auto block w-fit text-center font-bold text-sm mt-4" text="Отправить" />
                </form>
            </div>


        </main>
    )
}

export default MyPropose;