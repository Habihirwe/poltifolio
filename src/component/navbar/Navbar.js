import React from "react";
// import logo from "../../assets/logo192.png";
import "./navbar.css";
import { Link } from "react-scroll";
import menu from "../../assets/menu.png";

function Navbar() {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <nav className="navbar">
      <div>
        <h1>H.</h1>
      </div>
      {/* <img src={logo} alt="" /> */}
      {/* <h1>H.</h1> */}
      <div className="desktopMenu">
        <Link
          actveClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          actveClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          actveClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Project
        </Link>
        <Link
          actveClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Contact
        </Link>
      </div>
      <button
        className="desktopBtn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        Contact Me
      </button>
      <img src="" alt="" className="desketopMenuImg" />
      <img
        src={menu}
        alt=""
        className="Mobmenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          actveClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          onClick={() => setShowMenu(false)}
          className="listItem"
        >
          Home
        </Link>
        <Link
          actveClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={() => setShowMenu(false)}
          className="listItem"
        >
          About
        </Link>
        <Link
          actveClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={() => setShowMenu(false)}
          className="listItem"
        >
          Project
        </Link>
        <Link
          actveClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={() => setShowMenu(false)}
          className="listItem"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
