import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="border-top mt-5">
      <div className="container">
        <div className=" row p-3 p-md-5">
          <div className="col-md-4 mb-3">
            <img src="/logo.png" alt="logo" className="mb-3 logo" />
            <p className="mb-3 visibility">
              Our aim is to create an environment that nurtures every child’s
              unique talents and helps them reach their fullest potential.
            </p>
            <div className="d-flex">
              <a
                href="https://www.instagram.com/balmitraschoolofficial/"
                target="_blank"
                className="mb-4 me-3"
              >
                <i class="fa-brands fa-instagram profile"></i>
              </a>
              <a
                href="https://www.facebook.com/Balmitraschool/"
                target="_blank"
                className="me-3"
              >
                <i class="fa-brands fa-facebook profile"></i>
              </a>
              <a
                href="https://wa.me/8400399265"
                target="_blank"
                className="me-3"
              >
                <i class="fa-brands fa-whatsapp profile "></i>
              </a>
              <a
                href="https://www.linkedin.com/company/balmitraschool/"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin profile"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <p className="fs-4">Quick Links</p>
            <Link to="/about" className="visibility">
              About
            </Link>
            <br />
            <Link to="/preschool" className="visibility">
              Preschool
            </Link>
            <br />
            <Link to="/schooling" className="visibility">
              Schooling
            </Link>
            <br />
            <Link to="/contact" className="visibility">
              Contact Us
            </Link>
          </div>
          <div className="col-md-4">
            {" "}
            <p className="fs-4">Get in touch</p>
            <div className="row align-items-center g-2">
              <div className="col-2 mb-3">
                <i className="fa-solid fa-location-dot profile"></i>
              </div>
              <div className="col-10 visibility">
                <div>Our Location</div>
                <p>
                  Near Water Tank, Preetam Nagar, MIG Preetam Nagar Colony,
                  Dhoomanganj, Prayagraj, Uttar Pradesh 211011
                </p>
              </div>
              <div className="col-2 mb-3">
                <i class="fa-solid fa-phone profile"></i>
              </div>
              <div className="col-10 visibility">
                <div>Phone Number</div>
                <p>+91 840-039-9265</p>
              </div>
              <div className="col-2 mb-3">
                <i class="fa-solid fa-envelope profile"></i>
              </div>
              <div className="col-10 visibility">
                <div>Email Address</div>
                <p>balmitraschool@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="p-md-5 bottom-links visibility">
            <div> &copy; 1986-2025, Bal Mitra School</div>
            <div> All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
