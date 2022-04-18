import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UpdateForm from "./UpdateForm";

const Account = (props) => {
  const [show, setShow] = useState(false)
  const navigate = useNavigate();

  let firstName = "";
  let lastName = "";
  let user = false;
  const token = props.getToken();
  useEffect(()=>{
    if(token === null){
      refreshPage();
    }
    else{
      console.log("token exists")
    }
  },[token])
  function refreshPage(){
    window.location.reload(true);
  }
  if (props.user.email != null) {
    firstName = props.user.first_name;
    lastName = props.user.last_name;
    user = true;
  } else {
    user = false;
  }
  function toggle() {
    show === false ? setShow(true) : setShow(false);
   
  }
  function handleLogout(){
    window.localStorage.removeItem("my_app_user")
    sessionStorage.clear()
    navigate("/login")
  }
  useEffect(()=>{
    const token = props.getToken()
    if (!token) {
      navigate('/login')
    }
    else{
      console.log("logged in")
    }
  },[])
  return (
    <div>
      <div className="accountHeader">
      <h1 className="title" style={{gridColumnStart:"3"}}>Account</h1>
      {user === true ? <button className="logout" onClick={handleLogout}>Logout</button> : <></> }
      </div>
      <div>
        {show === true ? <UpdateForm user = {props.user} toggle ={toggle} show = {show} /> : <></>}
        {user === true ? (
          <div>
            <div className="userDetails">
              <h2 className="email">
                <b>Email:</b>
                <br />
                {props.user.email}
              </h2>
              <h2 className="name">
                <b>Name:</b>
                <br />
                {firstName.charAt(0).toUpperCase() +
                  firstName.substring(1)} {" "} 
                {lastName.charAt(0).toUpperCase() + lastName.substring(1)}
              </h2>

            </div>
            <button className="editButton" onClick={toggle}>Change Password</button>
          </div>
        ) : (
          <div>
            <h2>
              Please log in, <a href="/login">here</a>.
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
