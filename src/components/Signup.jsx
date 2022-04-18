import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
    const navigate = useNavigate();

    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function submitForm(e) {
        e.preventDefault()
       
        fetch('http://localhost:5000/signup', {
        method: "POST",
        body: JSON.stringify({
            first_name : fName,
            last_name : lName,
            email : email,
            password : password
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
    .then((response) => {
        if (response.ok) {
          return response.json();
        }
        else{
            throw new Error('Something went wrong');
        }
        
      })
        .then((json) => {
            console.log(json);
            props.setNewUser(json);
            props.setToken(json.jwt);
            console.log("success")
            navigate('/');
        })
        .catch(err => console.log(err)
        );


    }
    function handleFName(e) {
        setFName(e.target.value)
    }
    function handleLName(e) {
        setLName(e.target.value)
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
                <input placeholder="Gertrude" onChange={handleFName}></input><br />
                <label>Last Name:</label><br />
                <input placeholder="Bostock" onChange={handleLName}></input><br />
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