import React from "react";
import "./index.css"
import Back from "./images/back.png"

export default function Hero(){
    return(
        <div className="hero">
            <div className="herotext">
                <h1>A new model for open collaboration</h1>
                <p>Run an organization where members get rewarded for their contributions with fractional ownership.</p>
                <button className="herobut">Request Early Access</button>
            </div>
            <div className="heroimg">
                <img src={Back}/>
            </div>
        </div>
    )
}