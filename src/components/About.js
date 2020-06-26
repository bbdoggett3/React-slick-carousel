import React from "react";
// import Nav from "../Nav/Nav";
import "./About.css";
// import Footer from "../Footer/Footer";

function About() {
  return (
    <div className="about-container">
      {/* <Nav /> */}
      <div className="about-content">
        <p className="about-title">About</p>
        <p className="about-paragraph-content">
          {" "}
          With the rise of social media dating applications, and new ways for
          people to find that perfect someone to date, life seemed complete.
          However, relationships take work. While these apps help you find that
          someone, how can they help keep that someone? That's where HeartTaken
          comes into play <br /> <br/>
        Learn more by clicking the button below
        </p>
        <button className="learn-more-btn">Learn More</button>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default About;