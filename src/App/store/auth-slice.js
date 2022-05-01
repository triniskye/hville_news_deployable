import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        userDetails : {},
        jwt: ""


    },
    reducers:{
        LoginUser(state, action){
            const user = action.payload;
            state.userDetails = user;
            
            
        },
        setJWT(state, action){
            const token = action.payload;
            state.jwt = token;

        }
    }
});

export const authActions = authSlice.actions;
export default authSlice;