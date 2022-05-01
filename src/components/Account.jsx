import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

const Account = (props) => {

  const navigate = useNavigate();
  const userDetails = useSelector((state)=>state.auth.userDetails);
  let user = false;

  if (userDetails.name){
    user = true;
  } else {
    user = false;
  }

  function handleLogout(){
    props.clearStorage();
    navigate("/")
  }

  return (
    <div>
      <div className="accountHeader">
      <h1 className="title" style={{gridColumnStart:"3"}}>Account</h1>
      {user === true ? <button className="logout" onClick={handleLogout}>Logout</button> : <></> }
      </div>
      <div>
        {user === true ? (
          <div>
            <div className="userDetails">
              <h2 className="email">
                <b>Email:</b>
                <br />
                {userDetails.email}
              </h2>
              <h2 className="name">
                <b>Name:</b>
                <br />
                {userDetails.name.charAt(0).toUpperCase() +
                  userDetails.name.substring(1)}                 
              </h2>

            </div>
          </div>
        ) : (
          <div>
            <h2>
              Are you the vendor? Log in <a style={{color:"rgb(184, 63, 93)"}} href="/login">here</a>.
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
