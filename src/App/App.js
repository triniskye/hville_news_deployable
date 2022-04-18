import React, {useState, useEffect } from 'react';
import '../stylesheets/App.css';
import { BrowserRouter as Router, useNavigate, Route, Routes} from "react-router-dom";
import Home from '../components/Home';
import Menu from '../components/Menu';
import Contact from '../components/Contact';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Account from '../components/Account';
import About from '../components/About';
import NavBar from '../components/NavBar';
import { cartActions } from './store/cart-slice';
import { useSelector, useDispatch } from "react-redux";
import Cart from '../components/Cart';


function App() {
const [loggedIn, setLoggedIn] = useState(false);
const [user, setUser] = useState([]);
const cartItems = useSelector((state)=> state.cart.itemsList)
const dispatch = useDispatch();
console.log(cartItems);
 
function setNewUser(newUserArr){
  setUser(newUserArr.user);
  console.log("user",newUserArr.user)
  setLoggedIn(true)
}

useEffect(() => {
  const userData = window.sessionStorage.getItem('my_app_user');
  setUser(JSON.parse(userData));
  console.log("reload", userData);
  const cartData = JSON.parse(window.sessionStorage.getItem('myCart'));
  if (cartData){
    cartData.map((item)=>{
      let id = item.id;
      let price = item.price;
      let title = item.title;
      let quantity = item.quantity;
      dispatch(cartActions.addToCart({
        id,
        price,
        quantity,
        title
      }));
    })
  }
}, []);

useEffect(() => {
  deleteFromStorage();
  window.sessionStorage.setItem('my_app_user', JSON.stringify(user));
  console.log("updated state", user);
}, [user]);

useEffect(() => {
  window.sessionStorage.setItem('myCart', JSON.stringify(cartItems));
  console.log("updated cart state", cartItems);
}, [cartItems]);

function deleteFromStorage(){
  window.sessionStorage.removeItem('my_app_user')
}
function setJwtToken(token) {
  sessionStorage.setItem("jwt", token)
}
function getJwtToken() {
  return sessionStorage.getItem("jwt")
}
const jwtToken = getJwtToken();
if (!jwtToken) {
  console.log("/login")
}
  return (
    <div className="App">
 
      <div className="App-content">
      <div className="nav">
        <NavBar/>
      </div>
        <Router> 

          <Routes>                                                                                            

            <Route exact path="/" element={<Home loggedIn = {loggedIn}/>}/>

            <Route path="/menu" element={<Menu getToken={getJwtToken}/>}/>

            <Route path="/contact" element={<Contact/>}/>

            <Route path="/signup" element={<Signup setToken = {setJwtToken} setNewUser = {setNewUser} />}/>

            <Route path="/login" element={<Login setToken = {setJwtToken} setNewUser = {setNewUser} />}/>

            <Route path="/about" element={<About />}/>

            <Route path="/account" element={<Account getToken={getJwtToken} setNewUser = {setNewUser} clearStorage = {deleteFromStorage} user={user} loggedIn = {loggedIn}/>}/>

            <Route path="/cart" element={<Cart cart={cartItems}/>} />

          </Routes>

        </Router>
      </div>

    </div>
  );
}

export default App;
