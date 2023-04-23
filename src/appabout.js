import React from "react";
import Red from "./images/redhead.png"
import Star from "./images/Star.png"
import applicantdata from "./applicantdata";
import "./index.css"

export default function Appabout(props){
    return(
        <div className={props.class}>
                            <img src={props.image}/>
                            <h3 className="appabouthead">{props.name}</h3>
                            <p className="appaboutrole">{props.role}</p>
                            <div className="commitbox">
                                <h5 className="commitval"> {props.commit}</h5>
                                <img src={props.star}/>
                                <p>{props.rate}</p>
                            </div>
                            <button className="commitbutt">View Profile</button>
        </div>
    )
}