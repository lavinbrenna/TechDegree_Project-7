import React from 'react';
import {NavLink} from 'react-router-dom';
//creating navigation links
const Nav =()=>  {
    return(
      <nav className = "main-nav">
       <ul>
           <li><NavLink exact to ='/' >Home</NavLink></li>
           <li><NavLink to="/keithsonnier" >Keith Sonnier</NavLink></li>
           <li><NavLink to="/jamesturrell" >James Turrell</NavLink></li>
           <li><NavLink to="/olafureliasson" >Olafur Eliasson</NavLink></li>
           <li><NavLink to ="/teamlab">teamLab</NavLink></li>
       </ul>   
      </nav>
  
    
    )

}
   
export default Nav;


