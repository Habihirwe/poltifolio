import React from "react";
import "./introduction.css";
import bg from "../../assets/habihirweolivier.png";
import { Link } from "react-scroll";

function Introduction() {
  return (
    <section id="intro">
      <div className="introcontent">
        <span className="hello">Hello</span>
        <span className="introText">
          I'am <span className="introName">Delphin</span> <br />
          Data analyist
        </span>
        <p className="intropara">
          I'am a skilled data analyst with experience <br /> in analysing datas
          like time seires data
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
