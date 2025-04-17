import projects from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./HorizontalScroll.scss";

export default function HorizontalScroll() {
  return (
    <div className="carousel">
      <div className="carousel__wrapper">
        <ul className="carousel__scroll">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </ul>
      </div>
    </div>
  )
}