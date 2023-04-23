import React from "react";
import Logo from "./images/Logo.png"
import "./index.css"

export default function Nav(){
    return(
        <nav>
            <div className="logoarea">
                <img className="logo" src={Logo}/>
                <p className="compname">Open Enterprise</p>
            </div>
            <div className="navlist">
                <ul>
                    <li><a href="#">why open Enterprise</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">contribute</a></li>
                    <li><a href="#" className="green">Request early access</a></li>

                </ul>
            </div>
        </nav>
    )
}
