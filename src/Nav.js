import React from 'react';
import {BrowserRouter, NavLink} from 'react-router-dom';

const Nav = () => (
  <BrowserRouter>
      <nav className = "main-nav">
       <ul>
           <li><NavLink to="/robots">Robots</NavLink></li>
           <li><NavLink to="/cats">Cats</NavLink></li>
           <li><NavLink to="/pizza">Pizza</NavLink></li>
       </ul>   
      </nav>
  </BrowserRouter>
)
   
export default Nav;


