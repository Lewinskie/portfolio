import React from "react";
import "./about.css";
import Hands from "../../img/hands.jpg";
import Award from "../../img/award.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="aLeft">
        <div className="aCard bg"></div>
        <div className="aCard">
          <img src={Hands} alt="" className="aImg" />
        </div>
      </div>
      <div className="aRight">
        <h1 className="Title">About Me</h1>
        <p className="aSub">
          its a long established fact that a reader will be ditracted by the
          readable content
        </p>
        <p className="aDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          explicabo accusantium ea voluptatibus molestiae beatae voluptatem hic
          architecto dolore omnis odit voluptates, illum officia quidem sint
          pariatur! Fugiat, totam. Quis.
        </p>
        <div className="award">
          <img src={Award} alt="" className="awardImg" />
          <div className="awardTexts">
            <h4 className="awardTitle">International Design</h4>
            <p className="awardDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              numquam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
