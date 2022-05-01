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
                    <p className="hours-text">PHONE: (07) 5467 1255</p>
                    <p className="hours-text">ADDRESS: 37 Queen St, Harrisville QLD 4307</p>
                    <p className="hours-text">FACEBOOK: <a style={{color:"rgb(184, 63, 93)"}} href="https://www.facebook.com/Harrisville-News-General-Store-1566869643342901/?hc_ref=ARSAPk7ScospOllo-bwojN2ut4_tkdHtiMUUObtcXgmi9omBph1qonc0SVyvJPR1AAA&fref=nf&__xts__[0]=68.ARDnG8AKiA68xc79FGboZn6MVelx_TX2qQkD8UoW2s7tAtxBUaq69TGeqdRiISCAGdQ_8B0BKbIzjtPpZd1d8Xx3d_WxfMcw1VP27RH4Ofrqb1x8yK_aQeH-t4pc_WNrqM-Lb5Ek2O1ZditvTuwwapQvgns2K_6fblJj2l63Jp4tR8WSHleohJ3ZdGHfUvz63Ro-4A8EyPsxmupTf0LlQDlARrWRzYgLjQMpV7fo5_fqmML0GJhyefUIkj5s9scR0ieKgf-SnzoHz2oFb6hEE6kTys0tN8eB7NMxt9NyUOfxN7EKeZw&__tn__=kC-R">View Here</a></p>
                </div>

            </div>
        </div>
    );
}

export default Contact;