import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";

const Login=(props)=>{
    const nav = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
 
    async function submitForm(e){
        e.preventDefault()
        try{
            const response = await axios.post(`${process.env.REACT_APP_API}/login`, {
                email: email,
                password: password
            });
            
            toast.success("Success!");

            nav("/");   
            props.setNewUser(response.data.user)
            props.setToken(response.data.token)
        }
        catch(err){
            console.log(`register error: ${err}`)
            if(err.response.status === 400){
                toast.error(`error: ${err.response.data}`)
            }
        }
    }
    function handleEmail(e){
        setEmail(e.target.value)
    }
    function handlePassword(e){
        setPassword(e.target.value)
    }
    return(
        <div>
            <p className="vendor-message"><span>This is the log in for the vendor of this website only.</span><br/>
            <span>Click <a href="/">here</a> to leave this page if you are not the vendor. </span></p>
            <h1>Vendor Login</h1>
            
            <form className="login-form"onSubmit={submitForm}>
                <label>Email:</label><br/>
                <input type="email" placeholder="example@emailprovider.com" onChange={handleEmail}></input><br/>
                <label>Password:</label><br/>
                <input type="password" placeholder="********" onChange={handlePassword}></input><br/><br/><br/><br/>
                <button type="submit">Submit</button><br/><br/>
                
            
            </form>
            
        </div>
    );
}

export default Login;