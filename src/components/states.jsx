import { useState } from "react";

// Creating and updating states
export function Counter(){
    const [count,setCount] =useState(0);
    return(
        <>
            <h2>The Dynamic Counter is: {count}</h2>
            <button onClick={()=>setCount(count+8)}>Increment</button>
        </>
    )
}


//how to use multiple states in one component

export function Profile(){
    const [name,setName]= useState("Akhil");
    const [age,setAge]= useState(15);
    return(
        <>
            <h1>The name of the Student : {name}</h1>
            <h1>The age of the Student : {age}</h1>
            <button onClick={()=>setName("Rahul")}>ChangeName</button>
            <button onClick={()=>setAge(28)}>ChangeAge</button>
        </>
    )
}

//States with Objects

export function Data(){
    const [user,setUser]= useState({
        name:"Akhil",
        age:15,
        city : "Delhi"
    });
    const UpdateUser=()=>{
        setUser({
            ...user, //copy of the object
            age:65
        });
    };
    return(
        <>
            <h1>The name of the Student : {user.name}</h1>
            <h1>The age of the Student : {user.age}</h1>
            <h1>The city of the Student : {user.city}</h1>
            <button onClick={UpdateUser}>ChangeAge</button>
        </>
    )
}