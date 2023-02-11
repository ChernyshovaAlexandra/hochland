import React, { useState } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import API from "../utils/API";
import { steps } from "./CardGeneration";


const MyPropose = ({ vk_id }) => {
    const [text, setText] = useState('');
    const [person, setPerson] = useState('');
    const propose = (e) => {
        e.preventDefault();
        console.log(text, "person: ", person)
        // if (text) {
        //     API.post('/form', {
        //         vk_id: { vk_id },
        //         text: text,
        //         person: person,
        //         category: ''
        //     })
        // }
    }
    return (
        <main className="blue-bg p-6 main grid place-items-center text-blue pt-20">
            <div className=" bg-lightBlue rounded-lg min-[766px]:p-8 p-5 m-auto min-[766px]:w-10/12 h-fit">
                <Header
                    size={'min-[766px]:text-3xl text-xl text-blue text-center min-[766px]:mb-12 mb-8'}
                    text='Предложите свой вариант карточки заботы и участвуйте в розыгрыше' />

                <form className=" text-reg min-[766px]:w-10/12 mx-auto" onSubmit={(e) => { propose(e) }}>
                    <div>
                        <label htmlFor="" className="mb-3 font-bold block">
                            О ком позаботиться?
                        </label>

                        <select name="person" id="" className="rounded-lg mb-8" onChange={e=>setPerson(e.target.value)}>
                            {
                                steps[0].btns.map((opt, id) => (
                                    <option key={id} value={opt.prop} >
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
                        <textarea className="w-full rounded-lg"
                            name="text"
                            id="text"
                            cols="30"
                            rows="10"
                            onChange={e=>setText(e.target.value)}
                            maxLength={100} required>{text}</textarea>
                    </div>
                    <Button
                        type={'submit'}
                        classes="bg-yellow rounded-full py-3 px-6 mx-auto block w-fit text-center font-bold text-sm mt-4" text="Отправить" />
                </form>
            </div>


        </main>
    )
}

export default MyPropose;