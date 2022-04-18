import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Scroll from "./Scroll";
import { cartActions } from "../App/store/cart-slice";


const Cart = ({ cart }) => {
    const dispatch = useDispatch();
    const totalCost = useSelector((state) => state.cart.totalCost)
    const nav = useNavigate();

    const items = cart.map((item) => {
        const handleRemoveItem=()=>{
            const id = item.id
             console.log(id)
            dispatch(cartActions.removeFromCart({
                id
            }))
        }
        return (
            <div key={item.id} className="cartItemCard">
                <p style={{ gridColumnStart: "1" }}><b>{item.title}</b></p>
                <p style={{ gridColumnStart: "2" }}>x{item.quantity}</p>
                <p style={{ gridColumnStart: "3" }}>${item.price} </p>
                <button id={item.id} onClick={handleRemoveItem} style={{ backgroundColor: "maroon", color: "white", width: "70%", gridColumnStart: "4", height: "2vw", marginLeft: "15%", margin: "20%", padding: "fit-content" }}>X</button>
            </div>
        )
    })
    const handleClick = () => {
        nav("/menu")
    }
    const handleClearCart=()=>{
        dispatch(cartActions.clearCart())
    }


    return (
        <div>
            <div className="cart-title">
            <h2 className="title" style={{gridColumnStart:"2"}}>My Cart</h2>
            <button className="continueShoppingButton" onClick={handleClick}>Continue Shopping</button>
            <div>
                <p style={{color:"wheat", marginTop:"4vh", fontSize:"2vw"}}>Total Cost: ${parseFloat(totalCost).toFixed(2)}</p>
            </div>
            <button onClick={handleClearCart} style={{gridColumnStart:"3", width:"fit-content", marginLeft:"30%"}}>Complete Order</button>
            </div>
            
            <Scroll height={75}>
            <div className="cart">
                <div className="cartCard">
                    <div className="cartItemCard">
                        <p><b>Item</b></p>
                        <p><b>Quantity</b></p>
                        <p><b>Total Price</b></p>
                        <p><b>Remove</b></p>
                    </div>
                    <div style={{marginBottom:"2vh"}}>
                    {items}
                    </div>
                    
                </div>
                </div>
            </Scroll>

        </div>
    )
}

export default Cart;