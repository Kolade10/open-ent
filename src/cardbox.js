import React from "react";
import "./index.css"

export default function Cardbox(props){
    return(
        <div className="cardbox">
                <div className="incard">
                    <img src={props.image} alt=""/>
                    <h3>{props.head}</h3>
                    <p>{props.body}</p>
                </div>
            </div>
    )
}