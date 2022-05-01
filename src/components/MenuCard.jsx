import React from "react";
import { useSelector } from "react-redux";

const MenuCard=(props)=>{
    const user = useSelector((state)=> state.auth.userDetails)

    const handleView=()=>{
        props.changeId(props.item._id)
        props.toggle()
    }
    const handleEdit=()=>{
        props.changeId(props.item._id)
        props.toggleForm()
    }

    return(
        <div>
            
            <div className={`menuCard ${props.className}`} style={{borderRadius: "15%"}}>
               
                <p>{props.item.title.toUpperCase()}</p>
                <p>${props.item.price}</p>
                {props.item.ingredients != null ? <button type="button" className="viewButton" onClick={handleView}>View</button> : <></>}
                {user.name ? <button type="button" className="viewButton" onClick={handleEdit}>Edit</button> : <></>}
                <div>
                {props.item.available ? <p>Available✔️</p> : <p>Not Available❌</p>}
                </div>
            </div>
        
        
        </div>
    );
}

export default MenuCard;