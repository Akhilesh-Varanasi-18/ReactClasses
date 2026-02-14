import React from "react";
import "./laptop_data.css";
import { Productdetails } from "./data";


function LaptopData(){
    return(
        <>
            <div className="p">
                {
                    Productdetails.map((i)=>{
                        return(
                            <>
                            {console.log(i)}
                            <div className="card">
                                <div className="limg"><img src={i.image} alt="not found" width={330} height={250} /></div>
                                <div className="ldata">
                                    <p>{i.name}</p>
                                    <p>{i.price}</p>
                                    <p>{i.processor}</p>
                                    <p>{i.ram}</p>
                                    <p>{i.bit}</p>
                                    <p>{i.ssd}</p>
                                    <p>{i.warranty}</p>
                                </div>
                        </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default LaptopData;