import React from 'react';
import './App.css';
import logo from './logo.png'

function Header(){
    return(
        <header className="navbar">
      <div className="content">
        <div className="logo-container">
          <img id="logo" src={logo}></img>
        </div>
        <ol className="options">
          <li><a>products</a></li>
          <li><a>Customers</a></li>
          <li><a>Use cases</a></li>
        </ol>
        <div className="searchbar">
          <input placeholder="Search"></input>
        </div>
        <ol className="reg-container">
            <li>Login</li>
            <li>SignUp</li>
        </ol>
      </div>
    </header>
    )
}

export default Header;