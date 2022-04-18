import React, {useState, useEffect} from "react";
import MenuCard from "./MenuCard";
import ShowCard from "./ShowCard";
import Scroll from "./Scroll";



function Menu(props){

    const [items, setItems] = useState([]);
    const [viewModal, setViewModal] = useState(false);
    const [id, setId] = useState(0)
  useEffect(() => {
    fetch("http://localhost:5000/menu_items")
      .then(res => res.json())
      .then((data) => {
        console.log("data", data)
        setItems(data)
      })
      .catch(err => setItems(`Errors: ${err}`))
  }, []);

  let burgerCards = items.map((item) => {
    switch(item.food_type){
      case "burger":
        return (
          <div key={item.id}>
            <MenuCard getToken={props.getToken} item={item} toggle={toggle} changeId={changeId}/>
          </div>
        )      
    }
  });
  let rollCards = items.map((item) => {
    switch(item.food_type){
      case "roll":
        return (
          <div key={item.id}>
            <MenuCard getToken={props.getToken} item={item} toggle={toggle} changeId={changeId}/>
          </div>
        )      
    }
  });
  let hotBoxCards = items.map((item) => {
    switch(item.food_type){
      case "hot_box":
        return (
          <div key={item.id}>
            <MenuCard getToken={props.getToken} item={item} toggle={toggle} changeId={changeId}/>
          </div>
        )      
    }
  });
  let fishCards = items.map((item) => {
    switch(item.food_type){
      case "fish":
        return (
          <div key={item.id}>
            <MenuCard getToken={props.getToken} item={item} toggle={toggle} changeId={changeId}/>
          </div>
        )      
    }
  });
  let kidsMealCards = items.map((item) => {
    switch(item.food_type){
      case "kids_meal":
        return (
          <div key={item.id}>
            <MenuCard getToken={props.getToken} item={item} toggle={toggle} changeId={changeId}/>
          </div>
        )      
    }
  });
  let mealDealCards = items.map((item) => {
    switch(item.food_type){
      case "meal_deal":
        return (
          <div key={item.id}>
            <MenuCard getToken={props.getToken} item={item} toggle={toggle} changeId={changeId}/>
          </div>
        )      
    }
  });
  let chickenCards = items.map((item) => {
    switch(item.food_type){
      case "chicken":
        return (
          <div key={item.id}>
            <MenuCard getToken={props.getToken} item={item} toggle={toggle} changeId={changeId}/>
          </div>
        )      
    }
  });
  let chipsCards = items.map((item) => {
    switch(item.food_type){
      case "chips":
        return (
          <div key={item.id}>
            <MenuCard getToken={props.getToken} item={item} toggle={toggle} changeId={changeId}/>
          </div>
        )      
    }
  });
  function toggle(){
    setViewModal(!viewModal);
  }

  function changeId(newId){
    setId(newId);
  }

    return(
        
        <div>
            <h1 className="title">Menu</h1>
            <Scroll height={70}>
            {viewModal ?<ShowCard viewModal={viewModal} id={id} toggle={toggle}/>: <></>}
            {/* burgers */}
            <h2 className="title-left">Burgers <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/hamburger_1f354.png"/></h2>
            <div className="cardsArea">
            {items.length > 0 ? burgerCards : <>Loading...</>}
            </div>
            {/* rolls */}
            <h2 className="title-left">Rolls <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/hot-dog_1f32d.png"/></h2>
            <div className="cardsArea">
            {items.length > 0 ? rollCards : <>Loading...</>}
            </div>
            {/* chicken */}
            <h2 className="title-left">Chicken <img src="https://www.emoji.com/wp-content/uploads/filebase/thumbnails/icons/emoji-icons-glossy-icons-food-drink-icons-food-drink-prepared-food-roasted%20chicken-72dpi-forPersonalUseOnly.png"/></h2>
            <div className="cardsArea">
            {items.length > 0 ? chickenCards : <>Loading...</>}
            </div>
            {/* chips */}
            <h2 className="title-left">Chips <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/whatsapp/314/french-fries_1f35f.png"/></h2>
            <div className="cardsArea">
            {items.length > 0 ? chipsCards : <>Loading...</>}
            </div>
            {/* hot box */}
            <h2 className="title-left">Hot Box <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/openmoji/292/oden_1f362.png"/></h2>
            <div className="cardsArea">
            {items.length > 0 ? hotBoxCards : <>Loading...</>}
            </div>
            {/* fish */}
            <h2 className="title-left">Fish <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/softbank/145/fish_1f41f.png"/></h2>
            <div className="cardsArea">
            {items.length > 0 ? fishCards : <>Loading...</>}
            </div>
            {/* kids meals */}
            <h2 className="title-left">Kids Meals <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/child_1f9d2.png"/></h2>
            <div className="cardsArea">
            {items.length > 0 ? kidsMealCards : <>Loading...</>}
            </div>
            {/* meal deals */}
            <h2 className="title-left">Meal Deals <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/softbank/145/money-bag_1f4b0.png"/></h2>
            <div className="cardsArea">
            {items.length > 0 ? mealDealCards : <>Loading...</>}
            </div>
            </Scroll>
        </div>
    );
}

export default Menu;