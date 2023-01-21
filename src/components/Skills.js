// import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import ChangingProgressProvider from "./ChangingProgressProvider";
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
// import colorSharp from "../assets/img/color-sharp.png"

const percentage = 50;

export const Skills = () => {
//   const [percentage, setPercentage] = useState(0);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const circleDiv = {
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    flexDirection:"column",
    justifyContent: "center",
  }


  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel skill-slider">
                            <div className="item" style={circleDiv}>
                                {/* <img src={meter2} alt="Image" /> */}
                                <div style={{textAlign:"center",}}>
                                  <div style={{ width: 150}}>
                                  <ChangingProgressProvider values={[0, 80]}>
                                    {percentage => (
                                      <CircularProgressbar value={percentage} text={`${percentage}%`} />
                                    )}
                                  </ChangingProgressProvider>
                                  </div>
                                <h5>Brand Identity</h5>
                                </div>
                            </div>
                            <div className="item" style={circleDiv}>
                                {/* <img src={meter3} alt="Image" /> */}
                                  <div style={{ width: 150}}>
                                  <ChangingProgressProvider values={[0, 80]}>
                                    {percentage => (
                                      <CircularProgressbar value={percentage} text={`${percentage}%`} />
                                    )}
                                  </ChangingProgressProvider>
                                  </div>
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item" style={circleDiv}>
                                {/* <img src={meter1} alt="Image" /> */}
                                <div style={{textAlign:"center",}}>
                                  <div style={{ width: 150}}>
                                  <ChangingProgressProvider values={[0, 80]}>
                                    {percentage => (
                                      <CircularProgressbar value={percentage} text={`${percentage}%`} />
                                    )}
                                  </ChangingProgressProvider>
                                  </div>
                                <h5>Web Development</h5>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={colorSharp} alt="ImageBG" /> */}
    </section>
  )
}
