import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";
import "../styles/BlogDetailsCard.css";

const BlogDetailsCard = ({ title, content, image, createdAt }) => {
  return (
    <div className="blog-details-card">
      <Card className="blog-card">
        <div className="blog-img-container">
          <Card.Img variant="top" src={image} className="blog-img" />
        </div>
        <Card.Body>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Card.Title className="blog-title">{title}</Card.Title>
            <Card.Subtitle className="text-muted blog-date">
              <FaCalendarAlt /> {new Date(createdAt).toLocaleDateString()}
            </Card.Subtitle>
          </div>
          <Card.Text className="blog-content">{content}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BlogDetailsCard;
