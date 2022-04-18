import React, {useEffect, useState} from 'react';
import {Modal, Button} from 'react-bootstrap';

const ShowCard = (props) => {
    const [item, setItem] = useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/menu_items/${props.id}`)
        .then(res => res.json())
        .then((data) => {
            setItem(data)
        })
        .catch(err => console.log(err))
    }, []);
  return (
    <div>
      <Modal show={props.viewModal}>
        <Modal.Header>
          <Modal.Title><img src={item.img_source}/>{item.title} <br/> ${item.price}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {item.title} Ingredients:<br/>
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