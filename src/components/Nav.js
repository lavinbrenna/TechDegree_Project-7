import React from 'react';
import {BrowserRouter, NavLink} from 'react-router-dom';

const Nav =(z)=>  {

    return(
  <BrowserRouter>
      <nav className = "main-nav">
       <ul>
           <li><NavLink exact to ='/' >Home</NavLink></li>
           <li><NavLink to="/keith" >Keith Sonnier</NavLink></li>
           <li><NavLink to="/james" >James Turrell</NavLink></li>
           <li><NavLink to="/olafur" >Olafur Eliasson</NavLink></li>
           <li><NavLink to ="/teamlab">teamLab</NavLink></li>
       </ul>   
      </nav>
  </BrowserRouter>
    
    )

}
   
export default Nav;


