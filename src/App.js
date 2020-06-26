import React, { Component } from "react";
import "./App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "./components/About";
import Features from "./components/Features";
import Contact from "./components/Contact";

function ArrowButton(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "#00c8f8",
        borderRadius: "10px",
        margin: "5px",
      }}
      onClick={onClick}
    />
  );
}

// const photos = [
//   {
//     name: "Photo 1",
//     url: "https://www.dogzone.com/images/breeds/beagle.jpg"
//   },

//   {
//     name: "Photo 2",
//     url: "https://www.purina.com.au/-/media/Project/Purina/Main/Breeds/Dog/Mobile/Dog_Beagle_Mobile.jpg?h=300&la=en&w=375&hash=1788E511DBC3FA47182CB96D95B4F538"
//   },

//   {
//     name: "Photo 3",
//     url: "https://vetstreet.brightspotcdn.com/dims4/default/acfa4c4/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F7b%2F0526609e8c11e0a2380050568d634f%2Ffile%2FBeagle-3-645mk062311.jpg"
//   },

//   {
//     name: "Photo 4",
//     url: "https://www.rover.com/blog/wp-content/uploads/2018/11/beagle-1024x731.jpg"
//   },
// ]

class App extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1,
      className: "slides",
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      cssEase: "linear",
      nextArrow: <ArrowButton />,
      prevArrow: <ArrowButton />,
      appendDots: (dots) => (
        <div
          style={{
            // backgroundColor: "#00c8f8",
            borderRadius: "10px",
            
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
    };
    return (
      <div className="App" style={{ padding: 100 }}>
        <Slider {...settings}>
          {/* {photos.map((photo) => {
            return(
              <div className="slider-container">
                <img className="img-slide" src={photo.url} alt={`${photo.name} of dog`}></img>
              </div>
            )
          } )} */}

          <div>
            <Features />
          </div>
          <div>
            <About />
          </div>
          <div>
            <Contact />
          </div>
        </Slider>
      </div>
    );
  }
}

export default App;
