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
            image="/photo_9_2025-09-20_00-42-26.jpg"
            link="/about/about-school"
          />
        </div>
        <div className="col-md-4">
          <Card
            heading="A word from our director"
            image="/photo_8_2025-09-20_00-42-09.jpg"
            link="/about/word-from-principal"
          />
        </div>
        <div className="col-md-4">
          <Card
            heading="Balmitra way"
            image="/photo_4_2025-09-20_00-42-34.jpg"
            link="/about/balmitra-way"
          />
        </div>
      </div>
    </div>
  );
}
