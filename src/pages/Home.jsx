import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import "./Home.css";

export default function Home() {
  const reviews = [
    "Bal Mitra has an amazing environment. My child loves going to school every day!",
    "The teachers at Bal Mitra are very caring and supportive. Highly recommend this school.",
    "Our child has grown so much socially and academically. Thank you, Bal Mitra!",
    "Bal Mitra makes learning fun and engaging. We see our child excited every morning.",
    "The staff is friendly and approachable. Our child feels safe and happy here.",
    "Bal Mitra truly focuses on each child's development. We are very pleased with the progress.",
    "From day one, our child felt welcomed. Bal Mitra is more than just a school!",
    "The activities and learning methods are excellent. Our child enjoys every class.",
    "Bal Mitra offers a nurturing environment. Our child’s confidence has improved a lot.",
    "We love the dedication of the teachers. Our child looks forward to school every day!",
  ];

  const [index, setIndex] = useState(0);
  const currReview = reviews[index];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev >= 9 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <>
      <Seo
        title="Bal Mitra School, Prayagraj – Nurturing Education & Holistic Development"
        description="Bal Mitra School in Prayagraj provides a caring, high-quality education for children from preschool to primary levels. Enroll your child for a strong academic foundation and holistic growth."
      />
      <div className="wrapper mb-5 bg-home ">
        <div className="p-5 text-center fw-bold">
          <h1 className="fw-bold">Welcome to Bal Mitra</h1>
          <h2 className="fs-5 mt-3">
            The Perfect School for Every Child in Prayagraj
          </h2>
        </div>
        <img src="/logo.webp" alt="student" className="fix-logo" />
      </div>

      <div className="container p-md-3 mb-5 down">
        <div className="row p-md-5 text-center">
          <h2 className="fs-1 mb-5 text-col">
            Extraordinary journeys begin here.
          </h2>
          <div className="col-md-8 offset-md-2">
            <p className="fs-5 text-muted">
              Choosing the right school for your child in Prayagraj can feel
              overwhelming, but the moment you find the right fit, you’ll
              know—it’s when your child feels both comfortable and inspired.
            </p>
            <p className="fs-5 text-muted mb-5">
              At Bal Mitra School, Prayagraj, parents trust us with their
              children’s growth and development because of our balanced approach
              to learning and our warm, nurturing environment. We strive to
              create a joyful space where every child can learn, play, and
              thrive with confidence.
            </p>
            <Link className="custom-btn" to="/contact">
              Begin Your Journey &nbsp;
              <i class="fa-solid fa-angles-right btn-icon"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="container p-md-3 mb-5">
        <div className="row p-md-5 text-center justify-content-center align-items-center">
          <h2 className="fs-1 text-col">
            A Very Warm Welcome From Our Director
          </h2>
          <div className="col-lg-6 mt-5">
            <img
              src="/director.webp"
              alt="director"
              className="img-fluid"
              style={{
                height: "400px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </div>
          <div className="col-lg-6 mt-5">
            <p className="fs-5 text-col">
              At our school, we believe education should inspire, engage, and
              empower every child. We strive to provide learning that is
              purposeful, diverse, and truly enjoyable — helping students grow
              not only in knowledge but also in confidence and character. Our
              goal is to create an environment where curiosity thrives,
              creativity is encouraged, and every child feels supported to
              achieve their best.
            </p>
          </div>
        </div>
        <hr />
      </div>

      <div className="container p-md-3 mb-5">
        <div className="row p-md-5">
          <div className="col-lg-6 mt-5">
            <Link className="box" to="/preschool">
              <div>
                <img src="/img2.webp" className="img-fluid" alt="preschool" />
              </div>
              <div className="inner-box">
                <h3>Preschool</h3>
                <p>Welcoming little learners from 1 year onwards</p>
                <i class="fa-solid fa-angles-right icon"></i>
              </div>
            </Link>
          </div>
          <div className="col-lg-6 mt-5">
            <Link className="box" to="/schooling">
              <div>
                <img src="/img3.webp" className="img-fluid" alt="preschool" />
              </div>
              <div className="inner-box">
                <h3>Primary to Senior Secondary School</h3>
                <p>Guiding young minds from Nursery through Grade 12</p>
                <i class="fa-solid fa-angles-right icon"></i>
              </div>
            </Link>{" "}
          </div>
        </div>
      </div>

      <div className="container p-md-3 mb-5">
        <hr />
        <div className="row p-md-5 text-center">
          <h3 className="mb-5 fs-1">"{currReview}"</h3>
          <p className="mb-4">Parents</p>
          <div className="outer">
            {reviews.map((rev, key) => (
              <div
                className={key === index ? "inner bg-color" : "inner"}
                onClick={() => setIndex(key)}
              ></div>
            ))}
          </div>
        </div>
        <hr />
      </div>

      <div className="container p-md-3 mb-5">
        <div className="row p-md-5 text-center">
          <div className="col-md-3 col-6">
            <img
              src="/img4.webp"
              className="img-fluid mb-3 rounded"
              alt="gallery"
            />
          </div>
          <div className="col-md-3 col-6">
            <img src="/img5.webp" className="img-fluid rounded" alt="gallery" />
          </div>
          <div className="col-md-3 col-6">
            <img src="/img6.webp" className="img-fluid rounded" alt="gallery" />
          </div>
          <div className="col-md-3 col-6 mb-5">
            <img src="/img7.jpg" className="img-fluid rounded" alt="gallery" />
          </div>
          <h2 className="fs-1 mb-3 text-col">
            Ready to start the journey of a lifetime?
          </h2>
          <p className="text-muted mb-5">
            Discover what makes our school special — join us for an Open Day,
            request a prospectus, schedule a private visit, or simply request a
            call back.
          </p>
          <Link className="custom-btn" to="/contact">
            Contact Us &nbsp;
            <i class="fa-solid fa-angles-right btn-icon"></i>
          </Link>
        </div>
      </div>
    </>
  );
}
