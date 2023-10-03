import React from "react";
import "./introduction.css";
import bg from "../../assets/higanirosinior.png";
import { Link } from "react-scroll";

function Introduction() {
  return (
    <section id="intro">
      <div className="introcontent">
        <span className="hello">Hello</span>
        <span className="introText">
          I'am <span className="introName">Delphin</span> <br />
          Data analyst
        </span>
        <p className="intropara">
          I'm a Data Analyst Dedicated to Driving
          <br /> Business Success Through Insights
        </p>
        <Link>
          <button className="btn">Hire Me</button>
        </Link>
      </div>
      <img src={bg} alt="" className="bg" />
    </section>
  );
}

export default Introduction;
