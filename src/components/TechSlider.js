import Icon1 from "../assets/img/icons/bootstrap-framework-logo.png";
import Icon2 from "../assets/img/icons/css-logo.png";
import Icon3 from "../assets/img/icons/github-2.png";
import Icon4 from "../assets/img/icons/html-logo.png";
import Icon5 from "../assets/img/icons/java-script.png";
import Icon6 from "../assets/img/icons/javascript-logo.png";
import Icon7 from "../assets/img/icons/react.png";
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-grid-carousel'
import '../App'



const TechSlider = () => {
  const responsive = {
    superLargeDesktop: {
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

  return(
    <>
        <Carousel responsive={responsive} cols={1} rows={1} gap={10} autoplay={2000} hideArrow loop className="images">
          
          
          <Carousel.Item>
            <img width="50%" src={Icon3} alt="GitHub"/>
          </Carousel.Item>
          <Carousel.Item>
            <img width="50%" src={Icon4} alt="Html5"/>
          </Carousel.Item>
          <Carousel.Item>
            <img width="50%" src={Icon2} alt="Css3"/>
          </Carousel.Item>
          <Carousel.Item>
            <img width="50%" src={Icon1} alt="BootStrap"/>
          </Carousel.Item>
          <Carousel.Item>
            <img width="50%" src={Icon5} alt="NodeJS"/>
          </Carousel.Item>
          <Carousel.Item>
            <img width="50%" src={Icon6} alt="JavaScript"/>
          </Carousel.Item>
          <Carousel.Item>
            <img width="50%" src={Icon7} alt="React"/>
          </Carousel.Item>
        </Carousel>
    </>
  );
};

export default TechSlider;


