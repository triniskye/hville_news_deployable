import React, {useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../stylesheets/index.css';
import '../stylesheets/bigScreen.css';
import '../stylesheets/smallScreen.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from '../components/Home';
import Menu from '../components/Menu';
import Contact from '../components/Contact';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Account from '../components/Account';
import About from '../components/About';
import NavBar from '../components/NavBar';
import { authActions } from './store/auth-slice';
import { useDispatch } from 'react-redux';



function App(){
const [loggedIn, setLoggedIn] = useState(false);
const dispatch = useDispatch();

function setNewUser(data){

  const id = data.id
  const name = data.name;
  const email = data.email;
  dispatch(authActions.LoginUser({
    id,
    name,
    email
  }));
  setLoggedIn(true);
  sessionStorage.setItem("my_hville_app_usery_user", JSON.stringify(data))
}
function setToken(token){
  dispatch(authActions.setJWT(token));
  sessionStorage.setItem("jwt", token)
}

useEffect(() => {
  const userData = JSON.parse(window.sessionStorage.getItem('my_hville_app_usery_user'));
  const jwt = sessionStorage.getItem("jwt");

  if((userData !== null) && (jwt !== null)){
    setNewUser(userData); 
  }

}, []);

function getJwtToken() {
  return sessionStorage.getItem("jwt")
}


function deleteFromStorage(){
  window.sessionStorage.removeItem('my_hville_app_usery_user')
  window.sessionStorage.removeItem("jwt")
  
}



  return (
    <div className="App">
 
      <div className="App-content">
      <div className="nav">
        <NavBar/>
      </div>
        <Router> 
        <ToastContainer />
          <Routes>                                                                                            

            <Route exact path="/" element={<Home loggedIn = {loggedIn}/>}/>

            <Route path="/menu" element={<Menu getToken={getJwtToken}/>}/>

            <Route path="/contact" element={<Contact/>}/>

            <Route path="/signup" element={<Signup setToken = {setToken} setNewUser = {setNewUser} />}/>

            <Route path="/login" element={<Login setNewUser = {setNewUser} setToken={setToken} />}/>

            <Route path="/about" element={<About />}/>

            <Route path="/account" element={<Account getToken={getJwtToken} setNewUser = {setNewUser} clearStorage = {deleteFromStorage} />}/>

            

          </Routes>

        </Router>
      </div>

    </div>
  );
}

export default App;
