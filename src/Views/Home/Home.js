
import "./style.css";
import React from "react";
import AboutMe from "../Sections/AboutMe/AboutMe";
import Education from "../Sections/Education/Education";
import Experience from "../Sections/Experience/Experience";
import Skills from "../Sections/Skills/Skills";
import Projects from "../Sections/Projects/Projects";

function Home() {
  return (
    <div className="Home">
      <div className="landing-section" 
        style={{
          marginTop: '4em',
          marginBottom: '6em'
        }}>
        <h1>
          Hey Peeps :D This is Yash Sehgal    {/** Change with your name */}
        </h1>
      </div>
      <AboutMe />
      <Education />
      <Experience />
      <Skills />
      <Projects />
    </div>
  )
}

export default Home;