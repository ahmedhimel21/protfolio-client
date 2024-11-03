import BlogManagementTable from "../components/BlogManagementTable";
import ProjectManagementTable from "../components/ProjectManagementTable";
import SkillManagementTable from "../components/SkillManagementTable";

const DashboardPage = () => {
  return (
    <div>
      <SkillManagementTable></SkillManagementTable>
      <ProjectManagementTable></ProjectManagementTable>
      <BlogManagementTable></BlogManagementTable>
    </div>
  );
};

export default DashboardPage;
