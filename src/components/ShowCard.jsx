import React, {useEffect, useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import axios from 'axios';

const ShowCard = (props) => {
    const [item, setItem] = useState({})
    useEffect(()=>{
        getItemInfo();
        
    }, []);
    const getItemInfo = async()=>{
      try{
        const response = await axios.get(`${process.env.REACT_APP_API}/menu_items/${props.id}`)
        setItem(response.data);
        
      }
      catch(err){
        console.log(`error while getting individual item ===> ${err} `)
      }
    }

  return (
    <div>
      <Modal show={props.viewModal}>
        <Modal.Header>
          <Modal.Title>{item.title || "Loading..."} <br/> ${item.price || "Loading..."}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <b>{item.title || "Loading..."} Ingredients:<br/></b> 
            {item.ingredients}
        </Modal.Body>
        <Modal.Footer>
          Please press 'OK' to close the description.
          <Button variant="primary" onClick={props.toggle}>OK</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ShowCard;