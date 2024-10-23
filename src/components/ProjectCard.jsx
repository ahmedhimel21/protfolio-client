import { Col } from "react-bootstrap";
import { FaEdge, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export const ProjectCard = ({
  _id,
  title,
  description,
  imgUrl,
  liveLink,
  github,
}) => {
  return (
    <>
      <Col size={12} sm={6} md={4} style={{ marginTop: "40px" }}>
        <div className="proj-imgbx">
          <img src={imgUrl} id="projx-img" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex gap-3">
            <a href={github}>
              <FaGithub></FaGithub>
            </a>
            <a href={liveLink}>
              <FaEdge></FaEdge>
            </a>
          </div>
          <Link to={`/project/${_id}`}>
            <button className="text-light">See Details</button>
          </Link>
        </div>
      </Col>
    </>
  );
};
