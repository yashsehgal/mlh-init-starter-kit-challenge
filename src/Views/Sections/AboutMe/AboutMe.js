import "./style.css";
import React from "react";

function AboutMe() {
  return (
    <div className="AboutMe"
      style={{
        marginTop: '4em',
        marginBottom: '6em'
      }}>
      <h2>
        About Me
      </h2>
      <div className="content">
        <p>
          - I am a Computer Science Student who's pursuing a Computer Science Degree in Specialization with Artificial Intelligence (AI), Hell Yeah! 🔥 <br />
          - I love to try building projects ⛏️ which can be converted to products and can help other developers or people, in general. I also like to guide people as per the basis of my knowledge, also whether it's about Coding, Software Development, Designing or Blockchain, Crypto-Currency, Neural Networks or Machine Learning, I will be there in the discussion. <br />
          - Languages 💻 which I like to work with are as follows: C/C++, Python, JavaScript, HTML, CSS/SCSS. <br />
          - Tools/Technologies 💻 I use on my Daily Basis: Adobe XD, Figma, Git, GitHub/BitBucket, NodeJS. <br />
          - Also, When I am lazy/not working, I love to spend time on FL Studio and make music. Also, I have some decent sketching skills.
        </p>
      </div>
    </div>
  )
}

export default AboutMe;