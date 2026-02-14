import React from 'react'
import { useState } from 'react';
import "../../hooks/hooks.css";

export const UseStateHook = () => {
    const [count,setCount] = useState(0);  
    const incrementHandler=()=>{
        setCount(prevState=>prevState+1);  
        console.log(count);
    }
    return (
        <>
            <div className='parent'>
                <h1>UseStateHook</h1>
                <h2>The Dynamic Counter is: {count}</h2>
                <button onClick={incrementHandler}>Increment</button>
            </div>
        </>

    )
}
