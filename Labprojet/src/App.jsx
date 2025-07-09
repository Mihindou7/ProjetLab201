import React from "react";
import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import TourSection from "./components/TourSection";
import ProductSection from "./components/ProductSection";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Header />
      <NavMenu />
      <TourSection />
      <ProductSection title="T-SHIRT" />
      <ProductSection title="SWEAT" />
      <ProductSection title="VINYLE" />
      <Footer />
    </div>
  );
}

export default App;

