import { projects } from "./projectsData";
import ProjectPortfolio from "./ProjectPorfolio";

const Project = () => {
  const projectWorks = projects.map((proj) => (
    <ProjectPortfolio key={proj.id} {...proj} />
  ));
  return <div className="flex flex-wrap">{projectWorks}</div>;
};
export default Project;
