import React from 'react'
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useSelector } from 'react-redux';
import { useState } from 'react';
function Navbar() {
  const name=useSelector((state) => state.user.user);
  const nav=useNavigate();
  const [isEnabled,setIsEnabled]=useState(true);
  const toggleDrop=()=>{
    setIsEnabled(!isEnabled);
  }
  const myInlineStyle = {
    display: 'block',
  };
  const handlelogin=()=>{
    nav("/")
  }
  
  return (
    <div class="navbar">
    <body>
  <nav>
  <div class="logo-div">
  <Link to="/"><img class ="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9hg7-zcRhhTCaa9QppL_6b4aYJm0CL-oU4hem187kCA&s"/></Link>
  </div>
  <div class="logo-div">
  <Link to="/"><h3 id='myk'>EduTech</h3></Link>
  </div>
    
    <ul>
    <li class='ser'><SearchIcon/></li>
      <li class='search-list'>
      <input class='search' type="text" placeholder='   Search...'></input></li>
      <li class='noti'><NotificationsIcon /></li>
      {name? (<>
      <img class="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNfjvE8D92qUggDYNEihhQ03guf0vMCnW72Zt02E3Ddf3lynIvSKBMudchruyH6K4zoZA&usqp=CAU"/>
      <li class='user'>{name}</li>
      <li class='drop'>{name!=="Admin" ? (<ArrowDropDownIcon id="droop" />):(<></>)}</li></>):(<h3 class="mine"> 
      <div class="dropdown">
      <button class="dropbtn">
     <h4 class="log" onClick={toggleDrop}>LOGIN</h4>
      </button>
      <div style={isEnabled?{myInlineStyle}:{}} class="dropdown-content">
      <Link to="/login">ADMIN </Link>
      <Link to="/inslogin">INSTRUCTOR </Link>
      <Link to="/stulogin">STUDENT </Link>
        
      </div></div></h3>)}
      </ul>
    
  </nav>

</body>
    </div>
  )
}

export default Navbar
