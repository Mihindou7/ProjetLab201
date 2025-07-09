 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 

function Header() {
  return (
    <header className="header">
      <nav className="main-nav">
        <ul>
          <li>HISTOIRE</li>
          <li>TOUR</li>
          <li className="logo">AESOP ROCK</li>
          <li>SHOP</li>
          <li>CONTACT</li>
           <li><a href="panier"><FontAwesomeIcon icon={faShoppingCart} /></a></li>
        </ul>
      </nav>
      <style>{`
        .main-nav ul {
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 20px;
          list-style: none;
          font-weight: bold;
        }
        .logo {
          font-size: 24px;
          font-family: monospace;
        }
      `}</style>
    </header>
  );
}

export default Header;
