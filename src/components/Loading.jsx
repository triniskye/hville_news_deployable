import React from "react";
import "../sources/shop_image.jpg"

const Loading =()=>{
    return(
        <div>

        <img src= {require("../sources/shop_image.jpg")} className="App-logo" alt="logo" />
        <p>LOADING...</p>
    
        </div>
    );
}

export default Loading;