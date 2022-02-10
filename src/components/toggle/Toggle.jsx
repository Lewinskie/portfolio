import React from "react";
import "./toggle.css";
import Sun from "../../img/sunny.png";
import Moon from "../../img/moon.png";

const Toggle = () => {
  return (
    <div className="t">
      <img src={Sun} alt="" className="tIcon" />
      <img src={Moon} alt="" className="tIcon" />
      <div className="tButton"></div>
    </div>
  );
};

export default Toggle;
