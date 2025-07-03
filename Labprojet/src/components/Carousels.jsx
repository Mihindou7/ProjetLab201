import React from "react";

export default function Carousel() {
  return (
    <>
      <div className="carousel">
        {[...Array(4)].map((_, i) => (
          <div className="item" key={i}></div>
        ))}
        <div className="arrows">
          <span>&lt;</span>
          <span>&gt;</span>
        </div>
      </div>

      <style>
        {`
          .carousel {
            display: flex;
            gap: 15px;
            position: relative;
            overflow-x: auto;
          }
          .item {
            background: #ccc;
            width: 180px;
            height: 180px;
            flex: 0 0 auto;
          }
          .arrows {
            position: absolute;
            right: 10px;
            bottom: 0px;
            padding: 40px;
           
            gap: 10px;
            font-size: 1.5rem;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
}
