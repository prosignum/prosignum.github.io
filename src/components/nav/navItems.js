import Home from '../home/home';
import Atbash from '../atbash/atbash';
import Rot from '../rot/rot';
import Vigenere from '../vigenere/vigenere';
import Frequency from '../frequency/frequency';

export const navItems = [
    {
        id: 1,
        title: "Home",
        path: "/",
        component: <Home />,
    },
    {
        id: 2,
        title: "Atbash",
        path: "/atbash",
        component: <Atbash />
    },
    {
        id: 3,
        title: "ROT-13",
        path: "/rot-13",
        component: <Rot />
    },
    {
        id: 4,
        title: "Vigenère",
        path: "/vigenere",
        component: <Vigenere />
    },
    {
        id: 5,
        title: "Frequency Analysis",
        path: "/frequency",
        component: <Frequency />
    }
]