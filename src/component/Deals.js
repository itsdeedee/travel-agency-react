import React from "react";
import Family from "../images/Family1.jpg";
import Couple from "../images/Couple1.jpg";
import Friends from "../images/Friend1.jpg";
import { Link } from "react-router-dom";
import "../Deals.css";
const Deals = () => {
  return (
    <div>
      <h5>Best Deals & offers</h5>
      <div className="Deals-1">
        <div className="">
          <img
            src={Family}
            alt="family on a trip"
            className="Deals-list1 imgi"
          />
        </div>
        <div className="Deals-list2 ">
          Family Trip Discount
          <p className="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <Link to="/" className="Book">
            Book Now{" "}
            <i
              class="fa-solid fa-arrow-right fa-beat"
              style={{ color: "#ffffff" }}
            />
          </Link>
        </div>
      </div>
      <div className="Deals-2">
        <div className="Deals-list2 ">
          Couple's Date{" "}
          <p className="pi">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <Link to="/" className="Book-1">
            <i
              class="fa-solid fa-arrow-left fa-beat"
              style={{ color: "#ffffff" }}
            />{" "}
            Book Now
          </Link>
        </div>
        <div className="Deals-list1">
          <img
            src={Couple}
            alt="Couple on a trip"
            className="Deals-list1 imgii"
          />
        </div>
      </div>
      <div className="Deals-3">
        <div className="Deals-list1">
          <img
            src={Friends}
            alt="Group of friends on a trip"
            className="Deals-list1 imgiii"
          />
        </div>
        <div className="Deals-list2">
          Friend group Offers{" "}
          <p className="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>{" "}
          <Link to="/" className="Book">
            Book Now{" "}
            <i
              class="fa-solid fa-arrow-right fa-beat"
              style={{ color: "#ffffff" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Deals;
