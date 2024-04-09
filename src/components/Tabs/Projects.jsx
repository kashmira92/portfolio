import React from "react";
import "../../styles/projects.css";
import { projects } from "../../assets/index";
import gitHub from "../../assets/github.png";
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    // <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="tiltStyle">
    <div style={{ border: "2px", borderStyle: "-moz-initial" }}>
      <div className="projectImageDiv">
        <img src={image} alt="project_image" className="projectImage" />
        <div className="projectGitIconDiv">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="projectGitClickable"
          >
            <img
              src={gitHub}
              alt="source_code/demo"
              className="projectGitIconImg"
            />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "1.25rem" }}>
        <h3 className="projectNameH3">{name}</h3>
        <p className="projectDescription">{description}</p>
      </div>
      <div className="projectTags">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} style={{ accentColor: tag.color }}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
    // </Tilt>
  );
};

const Projects = () => {
  return (
    <div className="projectParent">
      {projects.map((project, index) => (
        <ProjectCard key={`project-${index}`} index={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
