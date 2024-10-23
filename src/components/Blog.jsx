import React from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import "../styles/BlogSection.css";
import { useGetBlogsQuery } from "../redux/features/blog/blogEndpoints";

export const Blog = () => {
  const { data } = useGetBlogsQuery(undefined);
  return (
    <section id="blog" className="blog-section py-5">
      <div className="container">
        <h2 className="section-title">Latest Blogs</h2>
        <Row>
          {data?.data?.map((post) => (
            <Col key={post.id} sm={12} md={6} lg={4} className="mb-3">
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
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};
