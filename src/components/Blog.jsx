import React from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import "../styles/BlogSection.css";
import { useGetBlogsQuery } from "../redux/features/blog/blogEndpoints";
import { Link } from "react-router-dom";

export const Blog = () => {
  const { data } = useGetBlogsQuery([
    { name: "limit", value: 0 },
    { name: "sort", value: "-createdAt" },
  ]);
  return (
    <section id="blog" className="blog-section py-5">
      <div className="container">
        <h2 className="section-title">Latest Blogs</h2>
        <Row>
          {data?.data?.data?.map((post) => (
            <Col key={post?._id} sm={12} md={6} lg={4} className="mb-3">
              <Card className="blog-card h-100 border border-primary">
                <div className="img-container">
                  <Card.Img
                    variant="top"
                    src={post.image}
                    className="blog-img"
                  />
                </div>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.content.slice(0, 115)}...</Card.Text>
                  <Link to={`/blog/${post?._id}`}>
                    <Button variant="primary">Read More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};
