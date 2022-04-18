import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        totalCost : 0

    },
    reducers:{
        addToCart(state, action){
            const newItem = action.payload
            //to check if already exists in cart//
            const existingItem = state.itemsList.find((item)=>item.id === newItem.id);
            if (existingItem){
                existingItem.quantity++;
                existingItem.price += parseFloat(newItem.price);
                state.totalQuantity++;
                
            }
            else{
                state.itemsList.push({
                    id: newItem.id,
                    price: parseFloat(newItem.price),
                    quantity : newItem.quantity,
                    title: newItem.title
                });
                state.totalQuantity+= newItem.quantity;
                
            }
            state.totalCost += parseFloat(newItem.price) ;
            
        },
        removeFromCart(state, action){

            const item = action.payload
            console.log(item.id);
            const itemToRemove = state.itemsList.filter(el => el.id === item.id);
            const newList = state.itemsList.filter(el => el.id != item.id);
            state.itemsList = newList;
            console.log(itemToRemove);
            window.location.reload(false);
            
            
        },
        clearCart(state){
            for(let i = 0; i < state.totalQuantity; i++){
                state.itemsList.pop()
                console.log(`${i} has been removed`);
                
            }
            window.location.reload(false);

        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;