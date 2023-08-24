import React from "react";
import Lottie from "lottie-react";
import Globe from "../globe.json";

const Banner = () => {
  return (
    <div className="Banner">
      <div className="list-1">
        <div className="Banner-content">
          {" "}
          <i class="fa-solid fa-quote-left fa-beat icon-1" /> The world is a
          BOOK and those who don't travel read only ONE page{" "}
          <i class="fa-solid fa-quote-right fa-beat icon-2" />
        </div>
        <div className="Writer">-Augustine of Hippo</div>
      </div>
      <div className="list-2">
        <Lottie loop={true} animationData={Globe} />
      </div>
    </div>
  );
};

export default Banner;
