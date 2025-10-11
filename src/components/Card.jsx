import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ image, heading, link }) {
  return (
    <Link className="card" to={link} style={{ height: "100%" }}>
      <img src={image} alt="card" style={{ width: "100%", height: "300px" }} />
      <h2>{heading}</h2>
    </Link>
  );
}
