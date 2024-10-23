import { Button, Col, Row } from "antd";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ReuseableForm from "../components/form/ReuseableForm";
import ReuseableInput from "../components/form/ReuseableInput";
import "../styles/Login.css";
import { toast } from "sonner";

const Login = () => {
  const email = import.meta.env.VITE_DEFAULT_EMAIL;
  const password = import.meta.env.VITE_DEFAULT_PASS;
  const secret = import.meta.env.VITE_SECRET;
  const onSubmit = (data) => {
    console.log(data);
    if (data?.email === email && data?.password === password) {
      window.location.href = `/${secret}`;
    } else {
      toast.error("Invalid user");
    }
  };
  return (
    <div className="login-page-container">
      <NavLink
        to="/#home"
        className="logo-container"
        style={{ textDecoration: "none" }}
      >
        🏠 Home
      </NavLink>

      <Row className="login-page" style={{ minHeight: "100vh" }}>
        {/* Left Section - Sign In Form */}
        <Col xs={24} md={12} className="login-col-left">
          <div className="login-form-container">
            <h2 className="login-title">Sign in</h2>
            {/* Login Form */}
            <ReuseableForm onSubmit={onSubmit}>
              <ReuseableInput
                type="email"
                name="email"
                label="Email"
              ></ReuseableInput>
              <ReuseableInput
                type="password"
                name="password"
                label="Password"
              ></ReuseableInput>
              <Button htmlType="submit" color="primary">
                Login
              </Button>
            </ReuseableForm>
          </div>
        </Col>

        {/* Right Section - Signup Info */}
        <Col xs={24} md={12} className="login-col-right">
          <div className="signup-container">
            <h2 className="welcome-text">Hello</h2>
            <p className="welcome-subtext">
              Enter your registered credentials.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
