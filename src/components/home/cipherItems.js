import { GiCombinationLock } from 'react-icons/gi';
import { BsFillBarChartFill } from 'react-icons/bs';

export const ciphers = [
    {
        id: 1,
        title: "Atbash",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tempore deserunt recusandae tenetur sint soluta dignissimos consectetur maiores molestias corrupti possimus, repellendus ullam doloribus, distinctio quis harum voluptatem porro veniam!",
        path: "/atbash",
        icon: <GiCombinationLock />,
    },
    {
        id: 2,
        title: "ROT-13",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        path: "/rot-13",
        icon: <GiCombinationLock />,
    },
    {
        id: 3,
        title: "Vigenère",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        path: "/vigenere",
        icon: <GiCombinationLock />,
    },
    {
        id: 4,
        title: "Frequency Analysis",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tempore deserunt recusandae tenetur sint soluta dignissimos consectetur maiores molestias corrupti possimus, repellendus ullam doloribus, distinctio quis harum voluptatem porro veniam!",
        path: "/frequency",
        icon: <BsFillBarChartFill />,
    },
]
