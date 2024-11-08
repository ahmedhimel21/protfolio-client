import React from "react";
import { FaGithub, FaEdge } from "react-icons/fa";
import { Card, Button, Badge } from "react-bootstrap";
import "../styles/ProjectDetailsCard.css"; // Custom CSS for animation

export const ProjectDetailsCard = ({
  title,
  description,
  imgUrl,
  github,
  liveLink,
  category,
  createdAt,
  skills,
}) => {
  return (
    <div className="project-details-card" style={{ marginTop: "100px" }}>
      <Card className="animated-card">
        <div className="img-container">
          <Card.Img variant="top" src={imgUrl} className="project-img" />
        </div>
        <Card.Body>
          <Card.Title className="title">{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted category">
            Category: {category}
          </Card.Subtitle>
          <div className="skills-section mb-3">
            {skills?.length &&
              skills?.map((skill) => (
                <Badge key={skill} className="skill-badge">
                  {skill}
                </Badge>
              ))}
          </div>
          <Card.Text className="description">{description}</Card.Text>
          <div className="links d-flex justify-content-between align-items-center">
            <Button variant="outline-primary" href={liveLink} target="_blank">
              <FaEdge /> Live Demo
            </Button>
            <Button variant="outline-dark" href={github} target="_blank">
              <FaGithub /> GitHub
            </Button>
          </div>
          <div className="created-at">
            <span>Created At: {new Date(createdAt).toLocaleDateString()}</span>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
