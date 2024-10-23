import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneVolume } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <Row>
                    <Col size={12} lg={12} sm={6} className="px-1">
                      <div className="d-flex align-items-center gap-4">
                        <AiOutlineMail
                          style={{ height: "60px", width: "60px" }}
                        ></AiOutlineMail>
                        <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                          Email <br /> sahabuddinahmed2125@gmail.com
                        </p>
                      </div>
                      <div className="d-flex align-items-center gap-4 mt-3">
                        <FaPhoneVolume
                          style={{ height: "60px", width: "60px" }}
                        ></FaPhoneVolume>
                        <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                          Phone <br /> +8801643152394
                        </p>
                      </div>
                      <div className="d-flex align-items-center gap-4 mt-3">
                        <SlLocationPin
                          style={{ height: "60px", width: "60px" }}
                        ></SlLocationPin>
                        <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                          Location <br /> Jashore, Bangladesh
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
