import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [click, setClick] = useState(false);
  function HandleClick() {
    setClick(!click);
  }
  function closeMenubar() {
    setClick(false);
  }
  return (
    <div>
      <nav className="navbar">
        <div class="navbarContainer">
          <Link to="/" className="navbar-logo">
            FLI <i class="fa-solid fa-paper-plane" />
          </Link>
          <div className="Menubar" onClick={HandleClick}>
            <i className={click ? "fa-solid fa-xmark" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-items">
              <Link to="/" className="nav-links" onClick={closeMenubar}>
                Home
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/" className="nav-links" onClick={closeMenubar}>
                About
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/" className="nav-links" onClick={closeMenubar}>
                Services
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/" className="nav-links" onClick={closeMenubar}>
                Pricing
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/" className="nav-links" onClick={closeMenubar}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
