import "./App.css";
import "./";
import React from "react";
import Navbar from "./component/navbar/Navbar";
import Introduction from "./component/intro/Introduction";
import Skills from "./component/skills/Skills";
import Project from "./component/projects/Project";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
