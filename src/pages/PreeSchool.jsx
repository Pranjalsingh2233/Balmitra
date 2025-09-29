import React from "react";
import { Link } from "react-router-dom";
import "./PreSchool.css";
import Seo from "../components/Seo";

export default function PreeSchool() {
  return (
    <>
      <Seo
        title="Preschool – Bal Mitra School, Prayagraj"
        description="Enroll your child in Bal Mitra Preschool in Prayagraj for a nurturing start to their educational journey. We focus on early learning, holistic development, and creating a joyful, safe environment for little learners."
      />

      <div className="custom-wrapper mb-5">
        <img src="/wave.svg" alt="wave" />
      </div>
      <div className="container p-lg-5">
        <div className="row p-md-5">
          <h1 className="mb-5">
            Unlock your child’s full potential at Bal Mitra School Pre-School –
            where early learning begins with care, creativity, and confidence.
          </h1>
          <div className="col-lg-4 text-start">
            <p>
              These early years are the most formative in a child’s development,
              as they begin to explore and make sense of the world around them.
              The right environment at this stage lays the foundation for
              confidence, curiosity, and a lifelong love of learning—shaping the
              thinkers, creators, and dreamers of tomorrow.
            </p>
            <p>
              Looking for a Pre-School that will nurture your child’s potential?
              Choose Bal Mitra School.
            </p>
          </div>
          <div className="col-lg-8">
            <div className="float-box">
              <img
                src="/photo_8_2025-09-20_00-42-26.jpg"
                alt="students"
                className="floating-img"
              />
              <img
                src="/photo_7_2025-09-20_00-42-21.jpg"
                alt="students"
                className="floating-img2"
              />
            </div>
          </div>
        </div>
      </div>
      <img src="/wave-greendown.svg" alt="wave" className="margin" />
      <div
        className="container-fluid p-5"
        style={{ backgroundColor: "#47c242", color: "white" }}
      >
        <div className="row p-md-5 text-center">
          <h2 className="mb-5">Every child is one-of-a-kind</h2>
          <div className="col-md-8 offset-md-2">
            <p>
              At Bal Mitra School Pre-School, we celebrate every child’s
              individuality and nurture their unique personality from the very
              beginning. Through engaging and playful learning experiences, we
              spark curiosity, encourage creativity, and design a development
              plan tailored to each child’s interests and abilities. By
              providing a safe, supportive, and stimulating environment, we help
              children feel confident and secure—so they can explore freely,
              develop new skills, and build a lifelong love for learning,
              preparing them to embrace the world with enthusiasm and
              confidence.
            </p>
          </div>
        </div>
      </div>
      <img src="/wave-greenup.svg" alt="wave" />

      <div className="container p-md-3">
        <div className="row p-md-5 text-center">
          <div className="col-md-3 col-6 mb-3">
            <img
              src="/photo_4_2025-09-20_00-42-09.jpg"
              className="img-fluid rounded"
              alt="gallery"
            />
          </div>
          <div className="col-md-3 col-6">
            <img
              src="/photo_6_2025-09-20_00-42-09.jpg"
              className="img-fluid rounded"
              alt="gallery"
            />
          </div>
          <div className="col-md-3 col-6">
            <img
              src="/photo_8_2025-09-20_00-42-21.jpg"
              className="img-fluid rounded"
              alt="gallery"
            />
          </div>
          <div className="col-md-3 mb-5 col-6">
            <img
              src="/photo_7_2025-09-20_00-42-21.jpg"
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
          <Link className="custom-btn" to="/contact">
            Contact Us &nbsp;
            <i class="fa-solid fa-angles-right btn-icon"></i>
          </Link>
        </div>
      </div>

      <img src="/wave-blueup.svg" alt="wave" />
      <div
        className="container-fluid"
        style={{ backgroundColor: "#00a8e6", color: "white" }}
      >
        <div className="row align-items-center ps-md-5 pe-md-5 fix-sm">
          <div className="col-md-6 fit-img"></div>
          <div className="col-md-6">
            <h2 className="mb-5">The Bal Mitra School Difference</h2>
            <p>
              At Bal Mitra School Pre-School, we celebrate every child’s
              individuality and nurture their unique personality from the very
              beginning. Through engaging and playful learning experiences, we
              spark curiosity, encourage creativity, and design a development
              plan tailored to each child’s interests and abilities. By
              providing a safe, supportive, and stimulating environment, we help
              children feel confident and secure—so they can explore freely,
              develop new skills, and build a lifelong love for learning,
              preparing them to embrace the world with enthusiasm and
              confidence.
            </p>
          </div>
        </div>
      </div>
      <img src="/wave-bluedown.svg" alt="wave" />
    </>
  );
}
