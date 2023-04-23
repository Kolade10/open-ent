import React from "react";
import "./index.css"
import Memone from "./images/memone.png"

export default function Mem(props){
    return(
        <div className="mem">
                    <img src={props.image}/>
                    <div className="share">
                        <h2>{props.name}</h2>
                        <p>{props.shares}</p>
                    </div>
                </div>
    )
}