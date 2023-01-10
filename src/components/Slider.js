import { useEffect, useState, useRef } from "react";
import Icon1 from "../assets/img/icons/html-logo.svg";
import Icon2 from "../assets/img/icons/css-logo.svg";
import Icon3 from "../assets/img/icons/bootstrap-framework-logo.svg";
import Icon4 from "../assets/img/icons/github-2.svg";
import Icon5 from "../assets/img/icons/java-script.svg";
import Icon6 from "../assets/img/icons/react.svg";
import Icon7 from "../assets/img/icons/javascript-logo.svg";
import "./Slider.css";

const Icons = [
  // "red",
  // "green",
  // "blue",
  // "yellow",
  // "pink"
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Icon7
];

const iconsStyle = {
  width: "100px",
  height: "100px",
  // alignItems: "center",
  // justifyContent: "center",
//   position: "relative",
//   left: "33%"
};

const delay = 3500;

function Slider() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  //   after 2.5 sec the slide will change
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex(
          (prevIndex) => (prevIndex === 0 ? Icons.length - 1 : prevIndex - 1)

          // if(prevIndex===0){
          //   prevIndex = Icons.length -1;
          // }else{
          //   --prevIndex
          // }

          //0, 1, 2, 3
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {/* {Icons.map((backgroundColor, index) => ( */}
        {Icons.map((i, index) => (
          <div className="slide" key={index}>
            <img src={i} alt="icons" style={iconsStyle} />
          </div>
        ))}
      </div>

      {/* <div className="slideshowDots">
        {Icons.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div> */}
    </div>
  );
}

export default Slider;
