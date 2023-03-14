import React, { useState } from 'react';
import Header from '../components/Header';
import ArrT from '../assets/images/arrT.svg'
import ArrB from '../assets/images/arrB.svg'
import { winners } from '../constants/winners';
import toster from '../assets/images/toster_img.png'
import ozon from '../assets/images/ozon_img.png'

const prev = () => { }
const next = () => { }

const Winners = () => {
    const [week, setWeek] = useState(1)
    const next = () => {
        setWeek(week + 1)
    }
    const prev = () => {
        setWeek(week - 1)
    }
    return (
        <div className="bg-blue w-full main relative overflow-hidden p-6 pt-12">
            <Header text="Победители" size="text-white text-center text-2xl" />
            <div className="bg-white rounded-lg p-4 mx-auto min-[560px]:w-10/12 w-full">
                <div className="pr-6 overflow-y-auto win-block" >
                    <ul>
                        {winners.filter(i => i['week'] === week)[0].winners.map((win, id) => (
                            <li key={id} className=''>
                                <div className="flex gap-4 justify-between border-b py-3 items-center min-[356px]:flex-row flex-col">
                                    <div className="name-container flex gap-3 items-center max-[356px]:w-full">
                                        <div className="w-3 h-3 rounded-full bg-green shrink-0"></div>
                                        <p className="name w-fit block">{win.name}</p>
                                        <div className="ml-1 w-8 h-8 shrink-0">
                                            <img src={win.prize === 'toster' ? toster : ozon} alt="" />
                                        </div>
                                    </div>
                                    <p className='text-blue text-reg max-[356px]:w-full' >{win.link}</p>
                                </div>
                            </li>
                        )
                        )}
                    </ul>
                </div>
            </div>
            <div className="mt-8 flex gap-2 items-center mx-auto w-fit">
                <button
                    disabled={!(week - 1)}
                    className="bg-white disabled:opacity-75 disabled:cursor-default rounded-xl p-4 grid gap-y-3 h-fit place-items-center arr cursor-pointer -rotate-90" onClick={prev}>
                    <img className="min-[766px]:w-6 w-4 min-[766px]:h-6 h-4 object-content object-center " src={ArrT} alt="" />
                </button>
                <div className="bg-white rounded-xl p-4 grid gap-y-3 h-fit place-items-center " onClick={prev}>
                    <p className='text-reg font-bold text-blue'>Неделя {week} </p>
                </div>

                <button
                    disabled={(week + 1) > winners.length}
                    onClick={next}
                    className="bg-white disabled:opacity-75 disabled:cursor-default rounded-xl p-4 grid gap-y-3 h-fit place-items-center arr cursor-pointer rotate-90">
                    <img className="min-[766px]:w-6 w-4 min-[766px]:h-6 h-4 object-content object-center " src={ArrT} alt="" />
                </button>
                
            </div>
        </div>
    )
}

export default Winners