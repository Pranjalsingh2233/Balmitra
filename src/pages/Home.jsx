import React, { useEffect, useState } from "react";
import "./Home.css";

export default function Home() {
  const reviews = [
    "dummy1",
    "dummy2",
    "dummy3",
    "dummy4",
    "dummy5",
    "dummy6",
    "dummy7",
    "dummy8",
  ];

  const [index, setIndex] = useState(0);
  const currReview = reviews[index];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev >= 7 ? 0 : prev + 1));
    }, 10000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <>
      <div className="wrapper mb-5 bg-home ">
        <div className="p-5 text-center fw-bold">
          <h1 className="fw-bold">Welcome to Bal Mitra</h1>
          <p className="fs-5 mt-3">The Perfect Place for Every Child</p>
        </div>
        <img src="/logo.png" alt="student" className="fix-logo" />
      </div>

      <div className="container p-md-3 mb-5">
        <div className="row p-md-5 text-center">
          <h2 className="fs-1 mb-5">Extraordinary journeys begin here.</h2>
          <div className="col-md-8 offset-md-2">
            <p className="fs-5 text-muted">
              Choosing the right school for your child can feel overwhelming,
              but we believe the moment you find the right fit, you’ll know—it’s
              when your child feels both comfortable and inspired.
            </p>
            <p className="fs-5 text-muted mb-5">
              At West House, parents entrust us with their children’s care and
              development because of our balanced approach to education and the
              supportive, nurturing environment we create.
            </p>
            <button className="custom-btn">Begin Your Journey</button>
          </div>
        </div>
      </div>

      <div className="container p-md-3 mb-5">
        <div className="row p-md-5 text-center justify-content-center align-items-center">
          <h2 className="fs-1">A Very Warm Welcome From Our Principal</h2>
          <div className="col-lg-6 mt-5">
            <video className="video" src="" autoPlay controls></video>
          </div>
          <div className="col-lg-6 mt-5">
            <p className="fs-5 text-col">
              Our school thrives on providing an education that is purposeful,
              diverse, and truly enjoyable.
            </p>
          </div>
        </div>
        <hr />
      </div>

      <div className="container p-md-3 mb-5">
        <div className="row p-md-5">
          <div className="col-lg-6 mt-5">
            <div className="box">
              <div>
                <img
                  src="/photo_9_2025-09-20_00-42-26.jpg"
                  className="img-fluid"
                  alt="preschool"
                />
              </div>
              <div className="inner-box">
                <h3>Preschool</h3>
                <p>Welcoming little learners from 1 year onwards</p>
                <i class="fa-solid fa-angles-right icon"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-5">
            <div className="box">
              <div>
                <img
                  src="/photo_8_2025-09-20_00-42-09.jpg"
                  className="img-fluid"
                  alt="preschool"
                />
              </div>
              <div className="inner-box">
                <h3>Primary to Senior Secondary School</h3>
                <p>Guiding young minds from Nursery through Grade 12</p>
                <i class="fa-solid fa-angles-right icon"></i>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>

      <div className="container p-md-3 mb-5">
        <hr />
        <div className="row p-md-5 text-center">
          <h3 className="mb-5 fs-1">"{currReview}"</h3>
          <p className="mb-4">Parent</p>
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
          <div className="col-md-3">
            <img
              src="/photo_4_2025-09-20_00-42-09.jpg"
              className="img-fluid rounded"
              alt="gallery"
            />
          </div>
          <div className="col-md-3">
            <img
              src="/photo_6_2025-09-20_00-42-09.jpg"
              className="img-fluid rounded"
              alt="gallery"
            />
          </div>
          <div className="col-md-3">
            <img
              src="/photo_8_2025-09-20_00-42-26.jpg"
              className="img-fluid rounded"
              alt="gallery"
            />
          </div>
          <div className="col-md-3 mb-5">
            <img
              src="/photo_5_2025-09-20_00-42-09.jpg"
              className="img-fluid rounded"
              alt="gallery"
            />
          </div>
          <h2 className="fs-1 mb-3">
            Ready to start the journey of a lifetime?
          </h2>
          <p className="text-muted mb-5">
            Discover what makes our school special — join us for an Open Day,
            request a prospectus, schedule a private visit, or simply request a
            call back.
          </p>
          <button className="custom-btn">Contact Us</button>
        </div>
      </div>
    </>
  );
}
