//passing props from parent to child

export function User({name,age,height}){ //desturcturing of props
    return(
        <>
            <div>
                <h2>{name}</h2>
                <h2>{age}</h2>
                <h2>{height}</h2>
            </div>
        </>
    )
}


//passing function as prop

export function Message({handleClick}){
    return(
        <>
            <button onClick={handleClick}>Click</button>
        </>
    )
}

//default props

export function Welcome({name="Guest"}){
    return(
        <>
            <h2>Welcome Back !! {name}</h2>
        </>
    )
}


//Props.children

export function Card({children}){
    return(
        <>
            <div style={{border : "1px solid black" , padding: "10px"}}>
                {children}
            </div>
        </>
    )
}