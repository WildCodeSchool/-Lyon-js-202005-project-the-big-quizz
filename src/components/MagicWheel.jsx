import React from "react";
import { Link } from "react-router-dom";
import Wheel from "../images/wheel.png";
import Selector from "../images/selector.png";
import WheelRotation from "./WheelRotation";
import "../App.css";

function MagicWheel() {
  return (
    <>
      <h1>This is a Magic Wheel !</h1>
      <div className="WheelContainer">
        <img
          className="Selector"
          src={Selector}
          alt="wheel selector"
          height={600}
          width={600}
        ></img>
        <img
          className="Wheel"
          src={Wheel}
          alt="wheel of questions"
          heigth={500}
          width={500}
        ></img>
      </div>
      <div>
        <button className="MagicButton">Spin The Wheel !</button>
        <script src={WheelRotation}></script>
      </div>
    </>
  );
}

export default MagicWheel;
