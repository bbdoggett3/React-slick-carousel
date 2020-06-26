import React from "react";
import "./Features.css";


function Features() {
  return (
    <div className="features-container">
      <div className="features-content">
        <p className="features-title">Main Features/Benefits</p>
        <p className="features-paragraph-content">
          Finally, a site that focuses on the tender relationships you care
          about most. With our ability to help individuals set strategic goals,
          specifically designed to foget ones self and we promise you will see
          magnificent results. You will be able to say with confidence my "Heart
          is Taken."
        </p>
        <div className="features-main-box">
          <div className="features-indivdual-row">
            <img className="features-heart-img" src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fheart.svg?v=1592943440103" alt="heart" />
            <div className="features-individual-text">
              <h3>Daily Love Goals</h3>
            </div>
          </div>
          <div className="features-indivdual-row">
            <img className="features-heart-img" src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fheart.svg?v=1592943440103" alt="heart" />
            <div className="features-individual-text">
              <h3>Profile Tracking</h3>
             <button className="learn-more-btn">Learn More</button>
            </div>
          </div>
          <div className="features-indivdual-row">
            <img className="features-heart-img" src="https://cdn.glitch.com/875fcc3a-ee91-4d48-806c-d5b121d9c21c%2Fheart.svg?v=1592943440103" alt="heart" />
            <div className="features-individual-text">
              <h3>Feedback Options</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;