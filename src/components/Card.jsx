import React from "react";
import "./Card.css";

export default function Card({ image, heading }) {
  return (
    <div className="card">
      <img src={image} alt="card" />
      <h2>{heading}</h2>
    </div>
  );
}
