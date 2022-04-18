import React from "react";

const Scroll=(props)=>{
    return(
        <div className="scroll" style={{overflowY: "scroll", height: `${props.height}vh`, maxWidth:"100vw", overflowX:"hidden", paddingBottom:"2vw"}}>
            {props.children}
        </div>
    );
}

export default Scroll;