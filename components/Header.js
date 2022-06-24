import React, { useState } from "react";
import Link from "next/link";
import { GrProjects } from "react-icons/gr";

const Header = () => {
  const [activeLink, updateActiveLink] = useState("Home");

  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid container">
          <Link href="/">
            <a className="navbar-brand fw-bold d-flex align-items-center">
              <span>
                <GrProjects className="mb-1" />
              </span>
              &nbsp;&nbsp;DHRecord
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <p className="me-auto"></p>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/">
                  <a
                    onClick={() => updateActiveLink("Home")}
                    aria-current="page"
                    className={`nav-link ${
                      activeLink === "Home" ? "active" : ""
                    }`}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a
                    onClick={() => updateActiveLink("About")}
                    aria-current="page"
                    className={`nav-link ${
                      activeLink === "About" ? "active" : ""
                    }`}
                  >
                    About
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/teamprofile">
                  <a
                    onClick={() => updateActiveLink("TeamProfile")}
                    aria-current="page"
                    className={`nav-link ${
                      activeLink === "TeamProfile" ? "active" : ""
                    }`}
                  >
                    Team Profile
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/blog">
                  <a
                    onClick={() => updateActiveLink("Blog")}
                    aria-current="page"
                    className={`nav-link ${
                      activeLink === "Blog" ? "active" : ""
                    }`}
                  >
                    Blog
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
