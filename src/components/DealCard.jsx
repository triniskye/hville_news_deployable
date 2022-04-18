import React from "react";


const DealCard=(props)=>{
    function handleView(){
        props.changeId(props.item.id)
        console.log(props.item.id)
        props.toggle()
    }

    return(
        <div>
            
            <div className="dealCard">
               
                <p>{props.item.title}</p>
                <p>${props.item.price}</p>
                {props.item.ingredients != null ? <button type="button" className="viewButton" onClick={handleView}>View</button> : <></>}
                
                <div>
                {props.item.available ? <p>Available✔️</p> : <p>Not Available❌</p>}
                </div>
            </div>
        
        
        </div>
    );
}

export default DealCard;