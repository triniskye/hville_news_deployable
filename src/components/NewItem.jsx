import React, { useEffect, useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import axios from "axios";

const NewItem = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [available, setAvailable] = useState();
  const [food_type, setFood_type] = useState();
  
  
  async function submitForm(e){
    e.preventDefault();
    try{
      const response = await axios.post(`${process.env.REACT_APP_API}/create-menu-item`, {
        title: title,
        price: price,
        food_type: food_type,
        ingredients: ingredients || null,
        available: available

    });
    console.log(response.data)
    props.toggleNewForm();
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
      <Modal show={props.viewNewForm}>
        <Modal.Header>
          <Modal.Title>New Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={submitForm}>
            <label>Title:</label><br />
            <input type="text" placeholder="Hamburger W/ The Lott" onChange={handleTitle}/><br />
            <label>Price:</label><br />
            <input type="text" placeholder="9.00" onChange={handlePrice}/><br />
            <label>Food Type: (only choose one)</label><br/>
            <input type="checkbox" value="burger"/>Burger
            <input type="checkbox" value="roll"/>Roll
            <input type="checkbox" value="chips"/>Chips
            <input type="checkbox" value="kids_meal"/>Kids Meal
            <input type="checkbox" value="fish"/>Fish
            <input type="checkbox" value="chicken"/>Chicken
            <input type="checkbox" value="hot_box"/>Hot Box Item
            <input type="checkbox" value="meal_deal"/>Meal Deal<br/>
            <label>Ingredients:</label><br />
            <input type="text" className="input-ingredients" placeholder="e.g. BURGER PATTY, LETTUCE, TOMATO" onChange={handleIngredients}/><br />
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

export default NewItem;