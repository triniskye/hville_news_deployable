import React, {useState, useEffect} from "react";
import Clock from 'react-live-clock';
import image from "../sources/facebook.PNG";


export default function About(){
    let str1 = "";
    let str2 = "";
    let today = new Date();
    let weekday = today.getDay();
    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    if((weekday === 6) || (weekday === 0)){
        str1 = time
        str2 = "13:00:00"
    }
    else{
        str1 = time
        str2 = "18:00:00"
    }
   

    function storeStatus(str1, str2){
        if(str1 < str2){
            return(
                <p><span style={{color: "greenyellow"}}>We are currently open!</span><span> <Clock format={'HH:mm:ss'} ticking={true} timezone={'Australia/Brisbane'} /></span></p>
            ) 
            

        }
        else if(str1 > str2){
            return(
                <p><span style={{color: "red"}}>We are currently closed! </span><span><Clock format={'HH:mm:ss'} ticking={true} timezone={'Australia/Brisbane'} /></span></p>
            ) 
        }
        else{
            return(
                <p style={{color: "greenyellow"}}>i dont know where i am, where am i?</p>
            )
        }
    }
    
    return(
        <div>
            <h1 className="title">About</h1>
            <div className="aboutContent">
                <div className="aboutDetails">
                    <div className="hours-div" style={{gridColumnStart: "1"}}>
                    <h2 className="hours-title title-left">Hours:</h2><br/>
                    <p className="hours-text">Mon-Fri 6am-6pm | Kitchen: 6am-5:45pm</p>
                    <p className="hours-text">Sat-Sun 6am-1pm | Kitchen: 6am-12:45pm</p>
                    <div className="hours-time">
                    {storeStatus(str1, str2)}
                    </div>
                    </div>
                    <div className="img-div" style={{gridColumnStart:"2"}}>
                    <img className="about-img" src={image} alt="facebook-snippet"/>
                    <h1 className="fb-link" style={{marginTop:"1.5vw"}}>Check out our Facebook <a style={{color:"rgb(184, 63, 93)"}} href="https://www.facebook.com/pages/category/Shopping---retail/Harrisville-News-General-Store-1566869643342901/">HERE!</a></h1>
                    </div>

                </div>
                
            </div>
        </div>
    )
}