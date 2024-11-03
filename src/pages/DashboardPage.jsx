import ProjectManagementTable from "../components/ProjectManagementTable";
import SkillManagementTable from "../components/SkillManagementTable";

const DashboardPage = () => {
  return (
    <div>
      <SkillManagementTable></SkillManagementTable>
      <ProjectManagementTable></ProjectManagementTable>
    </div>
  );
};

export default DashboardPage;
