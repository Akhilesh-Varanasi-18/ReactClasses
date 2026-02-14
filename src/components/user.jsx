//passing props


export function PUser(props){
    return(
        <>
            <div>
                <h2>Name : {props.name}</h2>
                <h2>Name : {props.age}</h2>
            </div>
        </>
    )
}



//passing function as prop

export function PButton({handleClick}){
    return(
        <>
            <button onClick={handleClick}>Click me</button>
        </>
    )
}

// default props

export function Pgreet({name="stranger"}){
    return(
        <>
            <h2>hello {name}</h2></>
    )
}

//props.children

export function PCard({ children }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      {children}
    </div>
  );
}

