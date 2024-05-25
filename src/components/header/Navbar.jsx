import React, { useRef } from "react";
import Logo from "../../assets/backerylogo.png";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { Collapse } from "bootstrap";

function Navbar() {
  const navigate = useNavigate();
  const collapseRef = useRef(null);

  const handleNavLinkClick = (path) => {
    navigate(path);
    if (collapseRef.current) {
      const bsCollapse = new Collapse(collapseRef.current, {
        toggle: false,
      });
      bsCollapse.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
       
          <img src={Logo} alt="logo" id="logo"/>
       
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" ref={collapseRef}>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li
              className="nav-item"
              id="navList"
              onClick={() => handleNavLinkClick("/")}
            >
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                id="navLink"
              >
                Home
              </a>
            </li>
            <li
              className="nav-item"
              id="navList"
              onClick={() => handleNavLinkClick("/about")}
            >
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                id="navLink"
              >
                About
              </a>
            </li>
            <li
              className="nav-item"
              id="navList"
              onClick={() => handleNavLinkClick("/fashion")}
            >
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                id="navLink"
              >
                Fashion
              </a>
            </li>
            <li
              className="nav-item"
              id="navList"
              onClick={() => handleNavLinkClick("/reupholstery")}
            >
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                id="navLink"
              >
                Reupholstery
              </a>
            </li>
            <li
              className="nav-item"
              id="navList"
              onClick={() => handleNavLinkClick("/contact")}
            >
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                id="navLink"
              >
                Contact
              </a>
            </li>
          </ul>
          <div id="navBtn">
            <a href="https://wa.me/+27659872956" target="_blank">
              Order Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;