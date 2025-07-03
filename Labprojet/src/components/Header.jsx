import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


function Header() {
  return (
    <>
      <header className="header">
        <nav className="header-nav">
          <ul className="nav-left">
            <li><a href="histoire">Histoire</a></li>
            <li><a href="tour">Tour</a></li>
            
          </ul>

          <div className="logo">
            <h1>AESOP<br />ROCK</h1>
          </div>

          <ul className="nav-right">
            <li><a href="shop">Shop</a></li>
            <li><a href="contact">Contact</a></li>
            <li><a href="panier"><FontAwesomeIcon icon={faShoppingCart} /></a></li>
          </ul>
        </nav>
      </header>

      <style>
        {`
          .header {
            width: 700px;
            padding: 0px 40px;
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 3px solid black;
          }

          .header-nav {
            width: 100%;
            max-width: 1200px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-family: 'Arial', sans-serif;
          }

          .nav-left, .nav-right {
            display: flex;
            gap: 20px;
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .nav-left li a,
          .nav-right li a {
            text-decoration: none;
            font-weight: bold;
            color: black;
            font-size: 1rem;
          }

          .logo {
            font-family: 'Impact', sans-serif;
            font-size: 1.5rem;
            text-align: center;
            color: black;
            letter-spacing: 2px;
            line-height: 1.2;
          }

          .cart {
            font-size: 1.2rem;
          }

        `}
      </style>
    </>
  );
}

export default Header;
