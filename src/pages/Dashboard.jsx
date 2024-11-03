import { Layout, Menu } from "antd";
const { Content, Sider } = Layout;
import { Outlet } from "react-router-dom";
import {
  JavaScriptOutlined,
  ProfileOutlined,
  SignatureOutlined,
  DashboardFilled,
} from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const secret = import.meta.env.VITE_SECRET;

const items = [
  {
    key: "Dashboard",
    icon: React.createElement(DashboardFilled),
    label: (
      <NavLink to={`/${secret}`} style={{ textDecoration: "none" }}>
        Dashboard
      </NavLink>
    ),
  },
  {
    key: "Skill Management",
    icon: React.createElement(JavaScriptOutlined),
    label: (
      <NavLink
        to={`/${secret}/skill-management`}
        style={{ textDecoration: "none" }}
      >
        Skill Management
      </NavLink>
    ),
  },
  {
    key: "Project Management",
    icon: React.createElement(ProfileOutlined),
    label: (
      <NavLink
        to={`/${secret}/project-management`}
        style={{ textDecoration: "none" }}
      >
        Project Management
      </NavLink>
    ),
  },
  {
    key: "Blog Management",
    icon: React.createElement(SignatureOutlined),
    label: (
      <NavLink
        to={`/${secret}/blog-management`}
        style={{ textDecoration: "none" }}
      >
        Blog Management
      </NavLink>
    ),
  },
];

const Dashboard = () => {
  return (
    <Layout style={{ height: "100%" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
      >
        <div
          style={{
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h>
            <Link
              to="/#home"
              style={{
                textDecoration: "none",
                fontSize: "20px",
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
              }}
            >
              🏠Home
            </Link>
          </h>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
