import { Col } from "react-bootstrap";
import './Profile.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Profile from "./Profile";
import { profileData, responsive } from "./data";


export const ProjectContributor = () => {
  const profile = profileData.map((item) => (
    <Profile
      name={item.name}
      url={item.imageurl}
      linkedin={item.linkedin}
      description={item.description}
    />
  ));


  return (
      <Col lg={12}>
        <div className="profile-container">
          <div className="newsletter-bx wow slideInUp">
            <Carousel showDots={false} responsive={responsive}>
              {profile}
            </Carousel>
          </div>
        </div>
      </Col>
  )
}
