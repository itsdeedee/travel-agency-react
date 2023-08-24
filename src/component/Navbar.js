import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Navbar.css";
import HeroComponent from "./HeroComponent";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [touch, setTouch] = useState(false);

  function HandleClick() {
    setClick(!click);
  }
  function showIcon() {
    setTouch(!touch);
  }
  return (
    <div>
      <nav className="navbar">
        <div class="navbarContainer">
          <Link to="/" className="navbar-logo" onMouseEnter={showIcon}>
            FLI{" "}
            <i
              className={
                touch
                  ? "fa-solid fa-paper-plane fa-bounce"
                  : "fa-solid fa-paper-plane"
              }
            />
          </Link>
          <div className="menu-icons" onClick={HandleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link className="nav-links">Home</Link>
            </li>
            <li>
              <Link className="nav-links">Services</Link>
            </li>
            <li>
              <Link className="nav-links">Deals</Link>
            </li>
            <li>
              <Link className="nav-links">Gallery</Link>
            </li>
            <li>
              <Link className="nav-links">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <HeroComponent />
    </div>
  );
}
