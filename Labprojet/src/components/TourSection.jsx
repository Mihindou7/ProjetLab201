import React from "react";

export default function TourSection() {
  return (
    <>
      <section className="tour">
        <h2 className="tour-title">TOURNÉE 2025</h2>
        <div className="tour-cards">
          {[...Array(4)].map((_, i) => (
            <div className="card" key={i}>
              <h3>TITRE</h3>
              <p>Forem ipsum dolor sit ame</p>
            </div>
          ))}
        </div>
        <button className="btn-ticket">Achat du billet</button>
      </section>

      <style>
        {`
          .tour {
            background: #ddd;
            padding: 40px;
            text-align: center;
          }
          .tour-title {
            font-size: 2.5rem;
            margin-bottom: 20px;
          }
          .tour-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
            
          }
          .card {
            padding: 20px;
            font-weight: bold;
          }
          .btn-ticket {
            padding: 10px 20px;
            font-size: 1rem;
            cursor: pointer;
          }
          .card h3 {
            font-size: 1rem;
          }
        `}
      </style>
    </>
  );
}
