import tourImage from '../assets/tour.jpg';  

function TourSection() {
  return (
    <section className="tour-section">
      <img src={tourImage} alt="Tour Banner" />
      <button>Achat du billet</button>
      <style>{`
        .tour-section {
          text-align: center;
          margin-bottom: 40px;
        }
        .tour-section img {
          width: 100%;
          max-height: 500px;
          object-fit: cover;
        }
        .tour-section button {
          padding: 10px 20px;
          background-color: black;
          color: white;
          border: none;
          cursor: pointer;
          margin-top: 20px;
        }
      `}</style>
    </section>
  );
}

export default TourSection;
