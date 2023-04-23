import React from "react";
import Tricirc from "./images/tricirc.png"
import Mem from "./shares";
import memberdata from "./memberdata";
import Black from "./images/black.png"
import Multicircle from "./images/multicirc.png"
import Semi from "./images/semi.png"
import applicantdata from "./applicantdata";
import Details from "./applicantdetails";
import Appabout from "./appabout";

import "./index.css"


export default function Member(){
    const [share, setShare] = React.useState(["test", "test"])
    const notify = share.length;
    let sharedisplay
    if (notify == 0){
        sharedisplay ="share"
    }
    else if (notify ==1){
        sharedisplay ="share"
    }
    else {
        sharedisplay ="shares"
    }
    const memdata = memberdata.map(membdata =>{
        return <Mem
                key ={membdata.id}
                image ={membdata.image}
                name ={membdata.name}
                shares ={membdata.shares}
        />
    })
    const detailsData = applicantdata.map(detailsData =>{
        return <Details
        key = {detailsData.id}
        class = {detailsData.class1}
        image = {detailsData.image}
        name = {detailsData.name}
        star = {detailsData.star}
        rate = {detailsData.rate}
        commits = {detailsData.commits}
        status = {detailsData.status}
        />
    })
    const [abt, setAbt]= React.useState(applicantdata)
    const aboutData = abt.map(aboutData=>{
        return <Appabout
        key={aboutData.id}
        name = {aboutData.name}
        role = {aboutData.role}
        rate = {aboutData.rate}
        star = {aboutData.star}
        image = {aboutData.image}
        commit = {aboutData.commits}
        class = {aboutData.class2}
        status ={aboutData.status}
        />
        
    })
    console.log(abt)
    return(
        <div className="member">
            <div className="membersec">
            <div className="kickstart">
                <img src={Tricirc} alt=""/>
                <h1>Kickstart an organization with your co-founders</h1>
                <p>It’s the early days, you just had a long conversation with two friends about a meaningful challenge that you’re all passionate about and have a potential solution for. You’re ready to embark the startup journey.</p>
            </div>
            <div className="memberbox">
                <h2>Members</h2>
                <div>
                    {memdata}
                </div>
            </div>
            </div>
            <div className="vote">
                <div className="votebox">
                    <div className="voteimg">
                        <img src={Black}/>
                        <div>
                        <h3>Jassir Jonis</h3>
                        <p>Pre-seed angel investor</p>
                        </div>
                    </div>
                    <p className="votebody">Hey guys, love what you’re doing and I’m convinced that together we’ll achieve amazing things.</p>
                    <div className="commitgrid">
                        <div className="commit">
                            <p>
                                COMMIT
                            </p>
                            <h3>
                                10,000 DAI
                            </h3>
                        </div>
                        <div className="commit">
                            <p>
                                SHARES
                            </p>
                            <h3>
                                20
                            </h3>
                        </div>
                    </div>
                    <button className="votebut"> Go to Vote</button>
                </div>
                <div className="votetext">
                    <img src={Multicircle} alt=""/>
                    <h1>Onboard users, investors and advisors as you grow</h1>
                    <p>You’ve bootstrapped and delivered an MVP, and some investors and advisors are interested in having a chat with you. As an Open Enterprise, you can onboard them seamlessly into your digital organization and align them with your success.</p>
                </div>
            </div>
            <div className="contributor">
                <div className="contritext">
                    <img src={Semi}/>
                    <h1>Engage highly committed contributors</h1>
                    <p>You need talented people on-demand across various tasks that your full-time workforce can’t prioritize at the moment. As an Open Enterprise, you can easily fund tasks and have people apply to work on them in return for funds or shares.</p>
                </div>
                <div className="contribox">
                    <div className="entbox">
                        <div className="entshare">
                        <h4>Write a how-to on Open Enterprise</h4>
                        <div>{notify} {sharedisplay}</div>
                        </div>
                        <p>Looking for an amazing copywriter using Open Enterprise to help us write an article on how to get started.</p>
                    </div>
                    <div className="appdisp">
                        <div className="applicants">
                            <h3 className="apphead"> {applicantdata.length} applicants</h3>
                            <div>
                                {detailsData}
                            </div>
                            <div className="appabout">
                            {aboutData}
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}