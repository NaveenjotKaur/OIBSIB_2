import React from 'react';
import logo from '../asset/plogo.jpg';

const Header = () => {
  return (
    <div class="nav">
          <img class="image" src={logo} alt="logo"/>
          <main>
            <li>Home</li>
            <li>My Intro</li>
            <li>Contact</li>
          </main>
          
    </div>
  )
}

export default Header;