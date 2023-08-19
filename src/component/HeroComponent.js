import React from "react";
import { Button } from "react-bootstrap";

import "../HeroComponent.css";
const HeroComponent = () => {
  return (
    <div>
      <div className="hero-container">
        <h1>
          EXPLORE YOUR DREAM DESTINATIONS
          <br />
          WITH FLI
        </h1>
      </div>
      <Button variant="secondary" size="lg">
        Get Started
      </Button>
    </div>
  );
};

export default HeroComponent;
