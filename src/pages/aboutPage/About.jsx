import React from "react";
import Card from "../../components/Card";

export default function About() {
  return (
    <div className="container p-3 text-center mt-3">
      <h1>About Us</h1>
      <div className="row p-5">
        <div className="col-md-4">
          <Card heading="About our school" image="/students.jpg" />
        </div>
        <div className="col-md-4">
          <Card heading="About our school" image="/students.jpg" />
        </div>
        <div className="col-md-4">
          <Card heading="About our school" image="/students.jpg" />
        </div>
      </div>
    </div>
  );
}
