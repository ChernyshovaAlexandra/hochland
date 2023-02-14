import React, { useState } from "react";
import Block from "../components/Block";
import GenerationContainer from "../components/GenerationContainer";

import { steps } from "../constants/steps";
import {
    useTransition,
    useSpring,
    useChain,
    config,
    animated,
    useSpringRef,
} from '@react-spring/web'




const CardGeneration = ({ setPage, setReciever, setMatter, prepareImage }) => {
    const [step, setStep] = useState(0);
    const [open, set] = useState(true);
    const [second, setSec] = useState(false);
    const springApi = useSpringRef();

    const { size, ...rest } = useSpring({
        ref: springApi,
        config: config.stiff,
        from: { transform: 'scale(.2)' },
        to: {
            transform: open ? 'scale(1)' : 'scale(.2)'
        },
    })
    const transApi = useSpringRef()
    let transition = useTransition(open ? steps[0].btns : [], {
        ref: transApi,
        trail: 400 / steps[0].btns.length,
        from: { opacity: 0, scale: 0 },
        enter: { opacity: 1, scale: 1 },
        leave: { opacity: 0, scale: 0 },
    });

    let transition2 = useTransition(second ? steps[1].btns : [], {
        ref: transApi,
        trail: 400 / steps[1].btns.length,
        from: { opacity: 0, scale: 0 },
        enter: { opacity: 1, scale: 1 },
        leave: { opacity: 0, scale: 0 },
    });

    useChain(open ? [springApi, transApi] : [transApi, springApi], [
        0,
        open ? 0.1 : 0.6,
    ])

    const setNext = (item) => {
        if (step === 0) {
            set(false)
            setTimeout(() => {
                setSec(true);
                setCardProps(item.prop);

            }, 800)
        }
        else {
            setCardProps(item.prop);
            prepareImage(item.prop);
           
        }
    }



    const setCardProps = (props) => {
        if (step === 0) { setStep(1); setReciever(props) } else {
            setMatter(props);
        }
    }
    return (

        <GenerationContainer
            extraClasses={steps[step].extraClasses}
            text={steps[step].header}
            inner={
                <>
                    {!second ?
                        <div className="grid grid-cols-2 gap-4 w-fit mx-auto mt-8 relative">
                            {
                                transition((style, item) => (
                                    <animated.div
                                        style={{ ...style, background: item.css }}>
                                        <Block
                                            classes={item.classes}
                                            text={item.name}
                                            img={item.img}
                                            onClick={() => setNext(item)} />
                                    </animated.div>
                                ))
                            }
                        </div > :
                        <div className="grid grid-cols-2 gap-4 w-fit mx-auto mt-8 relative">
                            {
                                transition2((style, item) => (
                                    <animated.div
                                        style={{ ...style, background: item.css }}>
                                        <Block
                                            classes={item.classes}
                                            text={item.name}
                                            img={item.img}
                                            onClick={() => setNext(item)} />
                                    </animated.div>
                                ))
                            }
                        </div >
                    }
                </>
            }
            headerStyles={'text-3xl font-black'}
        />
    )
}

export default CardGeneration;