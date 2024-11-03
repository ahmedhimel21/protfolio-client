import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import resume from "../assets/img/MERN stack developer resume of Sahabuddin Ahmed .pdf";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { FaFileDownload } from "react-icons/fa";
import Lottie from "lottie-react";
import devAnimation from "../assets/img/web-development.json";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "MERN Developer",
    "Cyber security specialist",
    "Web penetration testing",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Sahabuddin Ahmed`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ 
                    "MERN Developer", "Cyber security specialist", "Web pentester"
                      ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    I am MERN stack Developer with passion for creating
                    beautiful and functional website. I have extensive
                    experience working with a wide range of technology including
                    HTML5, CSS3, JavaScript, React, React-router, NodeJs,
                    ExpressJs, firebase Authentication and MongoDB. As a MERN
                    stack Developer my primary focus on creating amazing user
                    interfaces that delivered a seamless user experience. I am
                    currently studying in chemistry department at Narail Govt.
                    victoria college. I don't get bored while working in this
                    profession. The new technology and the passion to do
                    something creative and unique made me interested in this
                    profession.I constantly try to create interactive projects
                    by acquiring new technologies and skills.I have completed
                    cyber security course from arena web security to acquire
                    skills on how to secure websites along with creating
                    websites.
                  </p>
                  <button>
                    <a
                      href={resume}
                      download
                      className="text-decoration-none text-light"
                    >
                      Download Resume <FaFileDownload></FaFileDownload>
                    </a>
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <Lottie
                    className=""
                    animationData={devAnimation}
                    loop={true}
                  />
                  {/* <img src="./cover2.png" alt="Header Img" /> */}
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
