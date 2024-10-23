import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import Dashboard from "./pages/Dashboard";
import SkillManagement from "./components/Dashboard/SkillManagement";
import ProjectManagement from "./components/Dashboard/ProjectManagement";
import BlogManagement from "./components/Dashboard/BlogManagement";
import Login from "./pages/Login";

function App() {
  const secret = import.meta.env.VITE_SECRET;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/project/:id"
        element={<ProjectDetails></ProjectDetails>}
      ></Route>
      <Route path="/dashboard" element={<Login></Login>}></Route>
      <Route path={`/${secret}`} element={<Dashboard></Dashboard>}>
        <Route path="skill-management" element={<SkillManagement />} />
        <Route path="project-management" element={<ProjectManagement />} />
        <Route path="blog-management" element={<BlogManagement />} />
      </Route>
    </Routes>
  );
}

export default App;
