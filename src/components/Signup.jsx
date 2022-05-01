import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {toast} from "react-toastify";

const Signup = (props) => {
    const nav = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function submitForm(e){
        e.preventDefault()
        try{
            const response = await axios.post(`${process.env.REACT_APP_API}/register`, {
                name: name,
                email: email,
                password: password
            });

            toast.success("Success!");
            nav("/");
        }
        catch(err){
            console.log(`register error: ${err}`)
            if(err.response.status === 400){
                toast.error(`error: ${err.response.data}`)
            }
        }
    } 

    function handleName(e) {
        setName(e.target.value)
    }
    function handleEmail(e) {
        setEmail(e.target.value)
    }
    function handlePassword(e) {
        setPassword(e.target.value)
    }
    
    return (
        <div>
            <h1>Signup</h1>

            <form onSubmit={submitForm}>
                <label>First Name:</label><br />
                <input placeholder="Gertrude" onChange={handleName}></input><br />
                <label>Email:</label><br />
                <input type="email" placeholder="gbostock@emailprovider.com" onChange={handleEmail}></input><br />
                <label>Password:</label><br />
                <input type="password" placeholder="********" onChange={handlePassword}></input><br />
                <button type="submit">Submit</button>
                <p>Already Have an Account? <a href="/login">Login!</a></p>
            </form>
        </div>
    );
}

export default Signup;