import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
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
    </div>
  );
}

export default Contact;