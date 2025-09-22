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
              <a href="" target="_blank" className="mb-4 me-3">
                <i class="fa-brands fa-instagram profile"></i>
              </a>
              <a href="https://wa.me/" target="_blank" className="me-3">
                <i class="fa-brands fa-whatsapp profile "></i>
              </a>
              <a href="" target="_blank">
                <i class="fa-brands fa-square-linkedin profile"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <p className="fs-4">Quick Links</p>
            <Link to="/about" className="visibility">
              About
            </Link>
            <br />
            <Link to="/services" className="visibility">
              Services
            </Link>
            <br />
            <Link to="/team" className="visibility">
              Team
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
                <p>Rajrooppur, Prayagraj</p>
              </div>
              <div className="col-2 mb-3">
                <i class="fa-solid fa-phone profile"></i>
              </div>
              <div className="col-10 visibility">
                <div>Phone Number</div>
                <p>+91 945-287-3121</p>
              </div>
              <div className="col-2 mb-3">
                <i class="fa-solid fa-envelope profile"></i>
              </div>
              <div className="col-10 visibility">
                <div>Email Address</div>
                <p>balmitra@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="p-md-5 bottom-links visibility">
            <div> &copy; 2024-2025, Bal Mitra School</div>
            <div> All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
