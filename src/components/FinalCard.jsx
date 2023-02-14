import React from "react";
import ArrT from '../assets/images/arrT.svg'
import ArrB from '../assets/images/arrB.svg'
import img1 from '../assets/images/family.png'
import img2 from '../assets/images/collegue.png'
import img3 from '../assets/images/friends.png'
import img4 from '../assets/images/lover.png'



const images = {
    family: img1,
    collegue: img2,
    friends: img3,
    lover: img4
}

const FinalCard = ({ bg, color, reciever, greeting, colors, setInd, index, setColor, setBg, zoom, bigCard }) => {

    const arrTop = () => {
        if (index - 1 === -1) {
            setColor(colors[colors.length - 1].col);
            setBg(colors[colors.length - 1].arc);
            setInd(colors.length - 1);
        } else {
            setColor(colors[index - 1].col);
            setBg(colors[index - 1].arc);
            setInd(index - 1);
        }

    }
    const arrDown = () => {
        if (index + 1 === colors.length) {
            setColor(colors[0].col);
            setBg(colors[0].arc);
            setInd(0);
        } else {
            setColor(colors[index + 1].col);
            setBg(colors[index + 1].arc);
            setInd(index + 1);
        }
    }

    return (
        <>
            <div className="min-[766px]:w-80 final-pic cursor-pointer card-style" onClick={() => zoom(true)}>
                <div className="bg-white border-4 with-logo border-white rounded-lg overflow-hidden w-full text-center relative">

                    <div className={`image-frame bg-${color}-res relative w-full h-64 -mt-6`}>
                        <img src={bg} className='absolute mx-auto bottom-0 w-11/12 left-0 right-0 ' alt="" />
                        <img src={images[reciever]} alt="" className="absolute mx-auto bottom-0 w-10/12 left-0 right-0" />
                        <div className={`absolute -bottom-6 border-2 border-white bg-${color}-res text-white rounded-full left-0 w-fit right-0 mx-auto px-4 moris pt-2 pb-1`}>
                            Сердечно поздравляем</div>
                    </div>
                    <div className="mt-8">
                        <span className="text-blue mx-auto">
                            <span className="moris font-bold py-3">
                                Лучший подарок - <span className={`text-${color}-res`}>это забота!</span><br />
                                а забота с Hochland это…<br />
                            </span>
                            {greeting ? <div className="font-bold mt-2 text-xs pb-3">{greeting}</div> : null}
                        </span>
                    </div>
                </div>
            </div>
            {bigCard ? null :
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
                                    className={`rounded-full w-6 mx-auto cursor-pointer h-6 bg-${col.col}-dot ${color === col.col ? 'active' : ''}`}></div>
                            ))
                        }

                    </div>
                    <div className="bg-white rounded-xl p-4 grid gap-y-3 h-fit place-items-center mt-4 arr cursor-pointer" onClick={arrDown}>
                        <img className="min-[766px]:w-6 w-4 min-[766px]:h-6 h-4 object-content object-center " src={ArrB} alt="" />
                    </div>
                </div>}
        </>
    )
}

export default FinalCard;