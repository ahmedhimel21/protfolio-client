import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ProjImg1 from "../assets/img/Project1.png";
import ProjImg2 from "../assets/img/avengerToys.png";
import ProjImg3 from "../assets/img/The-food-hunter.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useGetProjectsQuery } from "../redux/features/project/projectEndpoints";

export const Projects = () => {
  const { data } = useGetProjectsQuery([
    { name: "limit", value: 0 },
    { name: "sort", value: "-createdAt" },
  ]);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I constantly try to create interactive projects by acquiring
                    new technologies and skills. Below are previews, live-links
                    and Github links of some of my completed projects.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">MERN Stack</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">React Js</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">JavaScript</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {data?.data?.data?.length &&
                            data?.data?.data
                              ?.filter(
                                (project) => project?.category === "MERN"
                              )
                              .map((project, index) => (
                                <ProjectCard key={index} {...project} />
                              ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {data?.data?.data?.length &&
                            data?.data?.data
                              ?.filter(
                                (project) => project?.category === "REACT"
                              )
                              .map((project, index) => (
                                <ProjectCard key={index} {...project} />
                              ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        {data?.data?.data?.length &&
                          data?.data?.data
                            ?.filter(
                              (project) => project?.category === "JAVASCRIPT"
                            )
                            .map((project, index) => (
                              <ProjectCard key={index} {...project} />
                            ))}
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
