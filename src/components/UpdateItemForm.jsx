import React, { useEffect, useState } from "react";

import { Modal, Button } from 'react-bootstrap';

import axios from "axios";

const UpdateItemForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [available, setAvailable] = useState();
  
  useEffect(()=>{
    getItemInfo();

  },[])

  const getItemInfo = async()=>{
    try{
      const response = await axios.get(`${process.env.REACT_APP_API}/menu_items/${props.id}`);
      setTitle(response.data.title);
      setIngredients(response.data.ingredients);
      setPrice(response.data.price);
      setAvailable(response.data.available);
      
      
    }
    catch(err){
      console.log(`error while getting individual item ===> ${err} `)
    }
  }
  
  async function submitForm(e){
    e.preventDefault();
    try{
      const response = await axios.put(`${process.env.REACT_APP_API}/menu_items/${props.id}/update_details`, {
        title: title,
        price: price,
        ingredients: ingredients,
        available: available
    });
    console.log(response.data)
    props.toggleForm();
    window.location.reload();
    }
    catch(err){
      console.log("error with update items", err)
    }

  }
  function handleTitle(e) {
    setTitle(e.target.value)
  }
  function handlePrice(e){
    setPrice(e.target.value)
  }
  function handleIngredients(e){
    setIngredients(e.target.value)
  }
  function handleAvailable(){
    setAvailable(!available);
    
  }



  return (
    <div>
      <Modal show={props.viewForm}>
        <Modal.Header>
          <Modal.Title>Update Item Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={submitForm}>
            <label>Title:</label><br />
            <input type="text" value={title} onChange={handleTitle}/><br />
            <label>Price:</label><br />
            <input type="text" value={price} onChange={handlePrice}/><br />
            <label>Ingredients:</label><br />
            <input type="text" className="input-ingredients" value={ingredients} onChange={handleIngredients}/><br />
            <label>Availability</label><br/>
            {available? <input type="checkbox" checked onChange={handleAvailable}/> 
            : 
            <input type="checkbox" onChange={handleAvailable}/>}Is Available
            
            
          </form>
        </Modal.Body>
        <Modal.Footer>
          Please press 'OK' to confirm changes.
          <Button variant="primary" onClick={submitForm}>OK</Button>
          <Button variant="primary" onClick={props.toggleForm}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default UpdateItemForm;