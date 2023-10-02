import React from "react";
import "./skills.css";
import pb from "../../assets/images.jpeg";
import rs from "../../assets/R.jpeg";
import ex from "../../assets/excel.png";
import py from "../../assets/download.jpeg";

function Skills() {
  return (
    <section id="skills">
      <span className="skillTitle">My skills</span>
      <span className="skillDesc">
        I am a meticulous data analyst skilled in extracting meaningful insights
        from complex datasets. My expertise lies in utilizing advanced
        statistical methods and visualization tools to inform strategic
        decision-making. With a keen eye for patterns and trends, I translate
        raw data into actionable recommendations, driving business success.
      </span>
      <div className="skillsSections">
        <div className="skillsection">
          <img src={ex} alt="" className="skillImage" />
          <div className="skillBartext">
            <h2>Excel</h2>
            <p>
              {" "}
              I have proficiency in using Microsoft Excel for various
              data-related tasks. My Excel skills include data entry and
              formatting, creating and managing spreadsheets, performing
              calculations and data manipulation, using functions and formulas,
              conducting basic and advanced data analysis, generating charts and
              graphs for data visualization, and creating pivot tables for
              summarizing and organizing data
            </p>
          </div>
        </div>

        <div className="skillsection">
          <img src={pb} alt="" className="skillImage" />
          <div className="skillBartext">
            <h2>Power Bi</h2>
            <p>
              I have experience in Power BI for data visualization, dashboard
              creation, and report generation. My skills include data modeling,
              transforming and connecting data from various sources, and
              designing interactive visualizations to convey insights
              effectively. Additionally, I can create dynamic and user-friendly
              Power BI reports for informed decision-making.{" "}
            </p>
          </div>
        </div>

        <div className="skillsection">
          <img src={rs} alt="" className="skillImage" />
          <div className="skillBartext">
            <h2>R studio</h2>
            <p>
              I have expertise in using R for data analysis and statistical
              modeling. My skills encompass data manipulation, visualization,
              and advanced statistical techniques in R. I can leverage R to
              derive valuable insights and build predictive models for complex
              data-driven projects.
            </p>
          </div>
        </div>
        <div className="skillsection">
          <img src={py} alt="" className="skillImage" />
          <div className="skillBartext">
            <h2>R studio</h2>
            <p>
              I have expertise in using R for data analysis and statistical
              modeling. My skills encompass data manipulation, visualization,
              and advanced statistical techniques in R. I can leverage R to
              derive valuable insights and build predictive models for complex
              data-driven projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
