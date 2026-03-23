import { Container, Row, Col } from "react-bootstrap";
import ProfileCard from "./contributor/ProfileCard";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";

const logoStyle = {
  color: "white",
};

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <ProfileCard />
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
            <h4 style={logoStyle}>Your Logo</h4>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/">
                <LinkedIn className="icon" />
              </a>
              <a href="https://www.facebook.com/">
                <Facebook className="icon" />
              </a>
              <a href="https://www.instagram.com/">
                <Instagram className="icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
