import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Skills.css'


const percentage1 = 66;
const percentage2 = 88;
const percentage3 = 33;


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
                            <div className="item grid-container" style={circleDiv}>
                                {/* <img src={meter2} alt="Image" /> */}
                                <div style={{textAlign:"center",}} >
                                  <div style={{ width: 120}}>
                                    <CircularProgressbar value={percentage1} text={`${percentage1}%`} />
                                  </div>
                                <h5>DSA</h5>
                                </div>
                            </div>
                            <div className="item grid-container" style={circleDiv}>
                                {/* <img src={meter3} alt="Image" /> */}
                                  <div style={{ width: 120}} className="grid-container">
                                    <CircularProgressbar value={percentage2} text={`${percentage2}%`} />
                                  </div>
                                <h5>Front-End</h5>
                            </div>
                            <div className="item grid-container" style={circleDiv} >
                                {/* <img src={meter1} alt="Image" /> */}
                                <div style={{textAlign:"center",}}>
                                  <div style={{ width: 120}}>
                                  <CircularProgressbar value={percentage3} text={`${percentage3}%`} />
                                  </div>
                                <h5>Back-End</h5>
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
