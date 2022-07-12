import React from "react";
import { createContext, useContext, useState } from "react";

export const Ctx = createContext();
export const Context = () => {
    return useContext(Ctx);
}

const Provider = ({ children }) => {

    const [hide, setHide] = useState(false);

    // const closeModalHandler = () => {
    //     setHide((state) => !state);
    // }


    const [cards, setCards] = useState([
        {
            title: 'React Chapter 1',
            description: 'npx create-react-app'
        }
    ])
    // value = {
    // cards,
    // setCards,
    // ...
    // }
    return (
        <Ctx.Provider value={{ cards, setCards, hide, setHide}}>  {/* s-ar fi scris value={value}*/}
            {children}
        </Ctx.Provider>
    )
}

export default Provider;