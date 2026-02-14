import React, { createContext, useState } from 'react'
import "../../hooks/hooks.css";
import { ImageContainer } from './imageContainer';


export const GlobalContext = createContext();
export const UseContextAPIHook = () => {
    const [toggle, setToggle] = useState(false);
    const store = {
        toggle,
        setToggle
    };
    return (
        <GlobalContext.Provider value={store} className='parent'>
            <div>
                <h1>UseContextAPIHook</h1>
                <ImageContainer />
            </div>
        </GlobalContext.Provider>
    )
}
