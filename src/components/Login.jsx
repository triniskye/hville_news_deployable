import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";


const Login=(props)=>{
    const nav = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("")
 
    function submitForm(e){
        e.preventDefault()
    fetch('http://localhost:5000/login', {
        method: "POST",
        body: JSON.stringify({
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
        console.log("json",json);
        props.setNewUser(json); 
        props.setToken(json.jwt); 
        setMessage("")
        nav("/account");
      })
      .catch((error) => {
        console.log(error)
        setMessage("Invalid username or password.")
      });
        
    }
    function handleEmail(e){
        setEmail(e.target.value)
    }
    function handlePassword(e){
        setPassword(e.target.value)
    }
    function handleBack(){
        nav("/")
    }
    return(
        <div>
            <h1>login</h1>
            <h2 style={{backgroundColor: "red"}}>{message}</h2>
            <form onSubmit={submitForm}>
                <label>Email:</label><br/>
                <input type="email" placeholder="gbostock@emailprovider.com" onChange={handleEmail}></input><br/>
                <label>Password:</label><br/>
                <input type="password" placeholder="********" onChange={handlePassword}></input><br/><br/>
                <button type="submit">Submit</button>
            </form><br/>
            <p>New Here? <a href="/signup">Signup!</a></p>
            <button className="backButton" onClick={handleBack}>Back</button>
        </div>
    );
}

export default Login;