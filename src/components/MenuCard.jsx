import React from "react";


const MenuCard=(props)=>{


    const handleView=()=>{
        props.changeId(props.item.id)
        console.log(props.item.id)
        props.toggle()
    }

    return(
        <div>
            
            <div className="menuCard" style={{backgroundColor : "rgb(184, 63, 93)", borderRadius: "15%"}}>
               
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

export default MenuCard;