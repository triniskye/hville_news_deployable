import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../App/store/cart-slice";
import { useNavigate } from "react-router-dom";

const MenuCard=(props)=>{
    const nav = useNavigate();
    const id = props.item.id;
    const title = props.item.title;
    const price = props.item.price;
    const quantity = 1
    const dispatch = useDispatch();
    const token = props.getToken()
    const handleAddToCart=()=>{
    if (token != null){
        dispatch(cartActions.addToCart({
            id,
            price,
            quantity,
            title
          }));
    }
    else{
        nav("/login")
    }

    }
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
                <button className="cartButton" onClick={handleAddToCart}>Add To Cart</button>
                <div>
                {props.item.available ? <p>Available✔️</p> : <p>Not Available❌</p>}
                </div>
            </div>
        
        
        </div>
    );
}

export default MenuCard;