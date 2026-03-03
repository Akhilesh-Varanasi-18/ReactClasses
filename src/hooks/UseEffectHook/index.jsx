import React, { useEffect, useState } from 'react'

export const UseEffectHook = () => {
    const BASEURL = "https://jsonplaceholder.typicode.com/posts";
    const [input, setInput] = useState("");
    const [data,setData]= useState([]);
    useEffect(()=>{
        const fetchData = ()=>{
            fetch(BASEURL)
            .then(response => response.json())
            .then(data => setData(data.filter(i=>i.title.toLowerCase().includes(input.toLowerCase()))));
        }
        fetchData();
    },[input])

  return (
    <>
    <div>UseEffectHook</div>
    <input type="text" name="" id=""  placeholder='Enter the data' onChange={(e)=>setInput(e.target.value)}/>
    <div>{data.map(i =>
        <>
        <p>{i.title}</p>
        <p>{i.body}</p>
        <p>{i.id}</p>
        </>
    )}</div>
    </>
  )
}

