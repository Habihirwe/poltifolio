import React from "react";
import "./project.css";
import dp1 from "../../assets/dp 1.jpg";
import dp2 from "../../assets/dp 2.jpg";
import dp3 from "../../assets/dp 3.jpg";
import dp4 from "../../assets/dp 4.jpg";
import dp5 from "../../assets/dp 5.jpg";
import dp7 from "../../assets/dp 7.jpg";

function Project() {
  return (
    <section id="projects">
      <h2 className="Projectlist">My Projects</h2>
      <span className="projectDesc">
        In my previous roles and experiences, I've had the opportunity to work
        on a wide range of impactful projects that have honed my skills as a
        data analyst. These projects have allowed me to apply my expertise in
        ICT chamber, collaborating with multidisciplinary teams to Build
        dashboards. I'd like to share some of these projects to showcase how my
        analytical abilities and problem-solving skills have contributed to
        achieving tangible results. these datas are from kaggle.
      </span>
      <div className="projectimages">
        <img src={dp1} alt="" className="projectimage" />
        <img src={dp2} alt="" className="projectimage" />
        <img src={dp3} alt="" className="projectimage" />
        <img src={dp4} alt="" className="projectimage" />
        <img src={dp5} alt="" className="projectimage" />
        <img src={dp7} alt="" className="projectimage" />
      </div>
    </section>
  );
}

export default Project;
