import logoImage from '../assets/logo1.png';  

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-logo">
          <img src={logoImage} alt="Logo AESOP ROCK" />
        </div>
        <div>
          <h3>TOURNÉE</h3>
          <ul>
            <li>Tracklist complète</li>
            <li>Dates</li>
            <li>Histoire</li>
          </ul>
        </div>
        <div>
          <h3>SHOP</h3>
          <ul>
            <li>T-Shirt</li>
            <li>Sweat</li>
            <li>Vinyle</li>
          </ul>
        </div>
        <div>
          <h3>CONTACT</h3>
          <ul>
            <li>Forem ipsum dolor</li>
            <li>Forem ipsum dolor</li>
            <li>Forem ipsum dolor</li>
          </ul>
        </div>
      </div>
      

      <style>{`
      .footer {
  background-color: #111;
  color: #fff;
  padding: 40px 20px;
  text-align: center;
}
.footer-logo {
  margin-bottom: 20px;
}
.footer-logo img {
  width: 160px;
  height: auto;
}
.footer-columns {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
.footer h3 {
  margin-bottom: 10px;
}
.footer ul {
  list-style: none;
  padding: 0;
}
.footer p {
  text-align: center;
  margin: 0;
}@media (max-width: 600px) {
  .footer-columns {
    flex-direction: column;
    align-items: center;
  }
}


      `}</style>
    </footer>
  );
}

export default Footer;

