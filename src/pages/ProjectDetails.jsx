import React from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { useGetSingleProjectsQuery } from "../redux/features/project/projectEndpoints";
import { ProjectDetailsCard } from "../components/ProjectDetailsCard";

const ProjectDetails = () => {
  const { id } = useParams();
  const { data } = useGetSingleProjectsQuery(id);
  const project = data?.data;
  return (
    <div>
      <NavBar></NavBar>
      <div style={{ marginTop: "50px" }}>
        <ProjectDetailsCard {...project}></ProjectDetailsCard>
      </div>
    </div>
  );
};

export default ProjectDetails;
