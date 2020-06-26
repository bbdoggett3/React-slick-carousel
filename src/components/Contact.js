import React from "react";
// import Nav from "../Nav/Nav";
import "./Contact.css";
// import Footer from "../Footer/Footer";

function Contact() {
  return (
    <div className="contact-container">
      {/* <Nav /> */}
      <div className="contact-content">
        <p className="contact-title">Get In Touch</p>
        <p className="contact-paragraph">
          We are always looking for ways to improve our user experience. If you
          have any additional feedback or suggestions on how we can make this
          application any better, please feel free to let us know. <br/>
          Click the button below to send feedback of our site.
        </p>
        <button className="feedback-btn">Click Here</button>

      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Contact;