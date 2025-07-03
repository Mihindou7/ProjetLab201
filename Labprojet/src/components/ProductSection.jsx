import React from "react";
import Carousel from "./Carousels";

export default function ProductSection({ title }) {
  return (
    <>
      <section className="product">
        <h2>{title}</h2>
        <Carousel />
      </section>

      <style>
        {`
          .product {
            padding: 20px 20px;
          }
          .product h2 {
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 20px;
          }
        `}
      </style>
    </>
  );
}
