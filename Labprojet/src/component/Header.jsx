import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <nav className="main-nav">
        <ul>
          <li>Histoire</li>
          <li>Tour</li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="logo">AESOP <br /> ROCK</div>
    </header>
  );
}
