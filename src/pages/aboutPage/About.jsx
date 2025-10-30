import React from "react";
import Card from "../../components/Card";

export default function About() {
  return (
    <div className="container p-3 text-center mt-3">
      <h1>About Us</h1>
      <div className="row p-5">
        <div className="col-md-4">
          <Card
            heading="About our school"
            image="/img2.webp"
            link="/about/about-school"
          />
        </div>
        <div className="col-md-4">
          <Card
            heading="A word from our director"
            image="/img3.webp"
            link="/about/word-from-principal"
          />
        </div>
        <div className="col-md-4">
          <Card
            heading="Balmitra way"
            image="/img16.webp"
            link="/about/balmitra-way"
          />
        </div>
      </div>
    </div>
  );
}
