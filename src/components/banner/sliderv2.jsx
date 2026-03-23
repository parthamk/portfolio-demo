import React, { useState, useEffect } from "react";
import Icon1 from "../assets/img/icons/html-5.png";
import Icon2 from "../assets/img/icons/css3.png";
import Icon3 from "../assets/img/icons/bootstrap.png";
import Icon4 from "../assets/img/icons/github.png";
import Icon5 from "../assets/img/icons/javascript.png";
import Icon6 from "../assets/img/icons/react.png";
import Icon7 from "../assets/img/icons/javascript.png";
import "./Slider.css";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState([Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(currentIndex => (currentIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slider">
      <img src={slides[currentIndex]} alt="slide" />
    </div>
  );
};

export default Slider;
