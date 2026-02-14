import React from "react";
import Button from "./button";
import "./home1.css"
// import { GrAmazon } from "react-icons/gr";

function Header(){
    return(
        <>
            <div className="header">This is Header component
                                    {/* <GrAmazon className="ico"/> */}
                                    <Button/>
            </div>
        </>
    )
}

export default Header;