
import card1 from '../assets/images/card1.png'
import card2 from '../assets/images/card2.png'
import card3 from '../assets/images/card3.png'
import card4 from '../assets/images/card4.png'
import card5 from '../assets/images/card5.png'
import card6 from '../assets/images/card6.png'
import card7 from '../assets/images/card7.png'
import card8 from '../assets/images/card8.png'



export const steps = [
    {
        id: 1,
        header: '<span class="text-white text-center">О ком хотите<br/>позаботиться?</span>',
        extraClasses: 'blue-bg round overflow-hidden main',
        btns: [
            { name: 'О родственнике', img: card1, prop: 'family' },
            { name: 'О коллеге', img: card2, prop: "collegue" },
            { name: 'О любимом человеке', img: card3, prop: 'lover' },
            { name: 'О друге/подруге', img: card4, prop: 'friends' }

        ]
    },
    {
        id: 2,
        header: '<span class="text-white text-center">В каком направлении вы бы<br class="hidden sm:block" />"хотели проявить заботу?</span>',
        extraClasses: 'blue-bg round overflow-hidden main',
        // classes: 'bg-blue border-4 border-white w-40 sm:w-60',
        btns: [
            { name: 'Путешествия', img: card5, prop: 'trip' },
            { name: 'Развлечения', img: card6, prop: 'advertisement' },
            { name: 'Спорт', img: card7, prop: 'sport' },
            { name: 'Хобби', img: card8, prop: 'hobby' }
        ]
    }
]