import React from "react";
import "../Services.css";
import explore from "../explore.jpg";

function Services() {
  return (
    <div className="Services">
      <div className="Content">
        <h2>OUR SERVICES</h2>
      </div>
      <div className="table">
        <div className="item1">
          <div className="Service-list">
            <i className="fa-solid fa-plane-up icon"></i>{" "}
            <h4>Flights Reservation</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sediiiii
              do eiusmod temporttyuuu.{" "}
            </p>
          </div>
          <div className="Service-list">
            {" "}
            <i className="fa-solid fa-plane-up icon"></i>{" "}
            <h4>Tours and Activities</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sediiiii
              do eiusmod temporttyuuu.{" "}
            </p>
          </div>
        </div>
        <div className="item2">
          <div className="Service-list">
            {" "}
            <i className="fa-solid fa-house icon"></i> <h4>Accomodation</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sediiiii
              do eiusmod temporttyuuu.{" "}
            </p>
          </div>
          <div className="Service-list">
            {" "}
            <i className="fa-solid fa-car icon"></i> <h4>Car Hire</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sediiiii
              do eiusmod temporttyuuu.{" "}
            </p>
          </div>
        </div>
        <div className="item3">
          <img src={explore} width={450} />
        </div>
      </div>
    </div>
  );
}

export default Services;
