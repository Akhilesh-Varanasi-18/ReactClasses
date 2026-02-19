import React, { useEffect, useState } from 'react'

export const UseEffectHook = () => {
    const BASEURL = "https://jsonplaceholder.typicode.com/posts";
    const [input, setInput] = useState("");
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = () => {
            fetch(BASEURL).then(response => response.json())
                .then(json => setData(json.filter(i=>i.title.toLowerCase().includes(input.toLowerCase()))));
        }
        fetchData();
    },[input])
    return (
        <div>
            <h1>UseEffectHook</h1>
            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <div>{data.map((i) => 
                <>
                <p>{i.title}</p>
                <p>{i.body}</p>
                <p>{i.id}</p>
                </>
            )}</div>
        </div>
    )
}
