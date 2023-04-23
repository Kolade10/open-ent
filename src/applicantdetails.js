import React from "react";
import Teeth from "./images/teethgal.png"
import Star from "./images/Star.png"
import "./index.css"

export default function Details(props){
    return(
       <div>
         <div className={props.class}>
                                <img className="person" src={props.image}/>
                                <h3 className="name">{props.name}</h3>
                                <img className="star" src={props.star}/>
                                <p className="rate">{props.rate}</p>
        </div>
        
       </div>
    )
}