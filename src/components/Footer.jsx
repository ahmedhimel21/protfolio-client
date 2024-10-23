import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1 className="text-light">Sahabuddin Ahmed</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/sahabuddin-ahmed-4b243b245/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.facebook.com/ahmedhimel021/">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://x.com/ahmed_himel21">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2023. Sahabuddin Ahmed All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
