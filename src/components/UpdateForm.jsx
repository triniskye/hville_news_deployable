import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

const UpdateForm = (props) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  
  function checkPassword(e){
    e.preventDefault()
    fetch('http://localhost:5000/login', {
      method: "POST",
      body: JSON.stringify({
          email : props.user.email,
          password : currentPassword
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
      submitForm();
    })
    .catch((error) => {
      console.log(error)
      setError("Invalid current password.")
    });
      
  }
  function submitForm(){
    if (newPassword != "") {
      fetch(`http://localhost:5000/update_user/${props.user.id}`, {
        method: "PUT",
        body: JSON.stringify({
          first_name: props.user.first_name,
          last_name: props.user.last_name,
          email: props.user.email,
          password: newPassword
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          else {
            throw new Error('Something went wrong');
          }

        })
        .then((json) => {
          console.log(json);
          props.toggle()
          navigate("/login")
          alert("Password changed successfully.")
        })
        .catch((err) => {
          setError(err)
          console.log(err)
          alert("Password could not be changed.")
        });
    }
    else {
      setError("Cannot leave any section blank!")
    }

  }
  function handleCurrentPassword(e) {
    setCurrentPassword(e.target.value)
  }
  function handleNewPassword(e) {
    setNewPassword(e.target.value)
  }

  return (
    <div>
      <Modal show={props.show}>
        <Modal.Header>
          <Modal.Title>Update Your Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2 style={{ color: "red", fontSize: "1.5vw" }}>{error}</h2>
          <form onSubmit={submitForm}>
            <label>Current Password:</label><br />
            <input type="password" placeholder="********" onChange={handleCurrentPassword}></input><br />
            <label>New Password:</label><br />
            <input type="password" placeholder="********" onChange={handleNewPassword}></input><br />
          </form>
        </Modal.Body>
        <Modal.Footer>
          Please press 'OK' to confirm changes.
          <Button variant="primary" onClick={checkPassword}>OK</Button>
          <Button variant="primary" onClick={props.toggle}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default UpdateForm;