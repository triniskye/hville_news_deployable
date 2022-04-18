import React, {useState, useEffect} from "react";
import image from "../sources/shop_image_use.jpg";
const Contact=()=>{
    
    return(
        <div>
            
            <h1 className="title">Contact Us</h1>
            <div className="contactContent">
                <div className="contactImageContainer">
                    <img className="contactImage" src={image} alt="shop_front"/>
                </div>
                <div className="contactDetails">
                    <p>PHONE: (07) 5467 1255</p>
                    <p>ADDRESS: 37 Queen St, Harrisville QLD 4307</p>
                </div>

            </div>
        </div>
    );
}

export default Contact;