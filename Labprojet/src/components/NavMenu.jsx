import React from 'react';

function NavMenu() {
  return (
    <>
      <nav className="nav-menu">
        <ul>
          <li><a href="#tournee">Tournée</a></li>
          <li><a href="#tshirt">T-Shirt</a></li>
          <li><a href="#sweat">Sweat</a></li>
          <li><a href="#vinyle">Vinyle</a></li>
        
        </ul>
      </nav>

      <style>
        {`
        .nav-menu {
            width: 100%;
            border-top: 1px solid black;
            border-bottom: 2px solid black;
            padding: 15px 0;
            background-color: white;
            margin: 0;
          }

      .nav-menu ul {
        list-style: none;
        display: flex;
        justify-content: flex-start;
        gap: 40px;
        margin: 0;
        padding-left: 20px;
      }

      .nav-menu a {
        text-decoration: none;
        color: #360000;
        font-weight: bold;
        font-family: 'Impact', sans-serif;
        font-size: 1.2rem;
      }
        nav{
         
          padding: 50px 0;
        }
        `}
      </style>
    </>
  );
}

export default NavMenu;
