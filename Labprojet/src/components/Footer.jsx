import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="col">
          <h3>TOURNÉE</h3>
          <p>Forem ipsum dolor</p>
          <p>Forem ipsum dolor</p>
        </div>
        <div className="col">
          <h3>SHOP</h3>
          <p>Forem ipsum dolor</p>
          <p>Forem ipsum dolor</p>
        </div>
        <div className="col">
          <h3>CONTACT</h3>
          <p>Forem ipsum dolor</p>
          <p>Forem ipsum dolor</p>
        </div>
        <div className="logo-footer">AESOP ROCK</div>
      </footer>

      <style>
        {`
          .footer {
            background: black;
            color: white;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding: 40px 20px;
            text-align: center;
          }
          .col {
            flex: 1;
            margin: 10px;
          }
          .col h3 {
            font-size: 1.2rem;
          }
          .logo-footer {
            font-family: 'Impact';
            font-size: 2rem;
            width: 100%;
            margin-top: 30px;
          }
        `}
      </style>
    </>
  );
}
