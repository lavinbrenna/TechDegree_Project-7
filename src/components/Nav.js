import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';

const Nav =()=>  {

    return(
  <BrowserRouter>
      <nav className = "main-nav">
       <ul>
           <li><Link exact to ='/' >Home</Link></li>
           <li><Link to="/keithsonnier" >Keith Sonnier</Link></li>
           <li><Link to="/jamesturrell" >James Turrell</Link></li>
           <li><Link to="/olafureliasson" >Olafur Eliasson</Link></li>
           <li><Link to ="/teamlab">teamLab</Link></li>
       </ul>   
      </nav>
  </BrowserRouter>
    
    )

}
   
export default Nav;


