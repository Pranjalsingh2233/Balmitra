import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function () {
  const location = useLocation();

  const handleClose = () => {
    const offcanvas = document.querySelector(".offcanvas.show");
    if (offcanvas) {
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
      bsOffcanvas.hide();
    }
  };

  return (
    <header>
      <nav class="navbar navbar-expand-md fixed-top border-bottom">
        <div class="container">
          <Link class="navbar-brand" to="/">
            <img src="/logo.png" alt="logo" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Bal Mitra
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <Link
                    className={
                      location.pathname === "/" ? "nav-link text" : "nav-link"
                    }
                    to="/"
                    onClick={handleClose}
                  >
                    Home
                  </Link>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <Link class="dropdown-item" to="/about/about-school">
                        About Our School
                      </Link>
                    </li>
                    <li>
                      <Link
                        class="dropdown-item"
                        to="/about/word-from-principal"
                      >
                        A Word from Our Principal
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/about/balmitra-way">
                        About Our School
                      </Link>
                    </li>
                  </ul>
                </li>

                <li class="nav-item">
                  <Link
                    className={
                      location.pathname === "/preschool"
                        ? "nav-link text"
                        : "nav-link"
                    }
                    to="/admission"
                    onClick={handleClose}
                  >
                    Admission
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    className={
                      location.pathname === "/preschool"
                        ? "nav-link text"
                        : "nav-link"
                    }
                    to="/preschool"
                    onClick={handleClose}
                  >
                    Pre School
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    className={
                      location.pathname === "/team"
                        ? "nav-link text"
                        : "nav-link"
                    }
                    to="/schooling"
                    onClick={handleClose}
                  >
                    Schooling
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    className={
                      location.pathname === "/contact"
                        ? "nav-link text"
                        : "nav-link"
                    }
                    to="/contact"
                    onClick={handleClose}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
