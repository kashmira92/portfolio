import React from "react";
import { Tilt } from "react-tilt";
import "../../styles/skill.css";
import { expertise, technologies } from "../../assets/index.js";
import git from "../../assets/git.png";
const SkillCard = ({ index, name, icon }) => {
  return (
    <Tilt options={{ max: 45, scale: 1, speed: 250 }} className="tiltStyle">
      <div className="tiltImageDiv">
        <img src={icon} alt={name} className="tiltImage" />
        <h3 className="tiltNameH3">{name}</h3>
      </div>
    </Tilt>
  );
};
const Expertise = ({ name, description, icon }) => {
  return (
    <div className="expertise-card">
      <img src={icon} alt={name} className="expertise-icon" />
      <h3 className="expertise-title">{name}</h3>
      <p className="expertise-description">{description}</p>
    </div>
  );
};

const Skills = () => {
  return (
    <>
      <h1>Skills</h1>
      <div className="tiltParent">
        {technologies.map((tech, index) => (
          <SkillCard key={`tech-${index}`} index={index} {...tech} />
        ))}
      </div>
      <br />
      <h1>Expertise</h1>
      <div className="expertise-parent">
        {expertise.map((expertise, index) => (
          <Expertise key={`expertise-${index}`} {...expertise} />
        ))}
      </div>
    </>
  );
};

export default Skills;
