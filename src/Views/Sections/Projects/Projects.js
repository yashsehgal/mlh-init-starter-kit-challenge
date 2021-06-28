import "./style.css";
import React from "react";

function Projects() {
  return (
    <div className="Projects" 
      style={{
        marginTop: '4em',
        marginBottom: '6em'
      }}>
      <h2>
        Projects
      </h2>
      <div className="content">
        <p>
          - Eccentric Touch is a CSS Library which has various UI Components and Stylesheet Methods which can be used by other developers. This can be used to reduce the amount of work load that we usually spend in writing CSS. This Project is under the initiative of @The DesignSystems. <br />
          - Events.find is a short Javascript Project which has a feature to look for Upcoming Technology related events and bootcamps. I have used Technologies like Javascript, CSS/SCSS, HTML, JSON, Git. <br />
          - I have also designed a simple Discord Bot called The DesignSystems-Bot, This bot program has features like saving portfolio URLs, GitHub Profiles, receiving motivational quotes and much more. I have used Python to implement the entire backend scripts and logics, whereas, DJango to host the bot on the line.
        </p>
      </div>
    </div>
  )
}

export default Projects;