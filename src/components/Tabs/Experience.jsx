import React, { useState } from "react";
import {
  VerticalTimelineElement,
  VerticalTimeline,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../assets";
import testLogo from "../../assets/IU-logo.png";
import "../../styles/timeline.css";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#3f79b3",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: "#fffff" }}
      icon={
        <div className="altTimelineComponent">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="imgComponent"
          />
        </div>
      }
    >
      <div>
        <h3 className="h3text">{experience.title}</h3>
        <p className="pText" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="listDisc">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className="listItem">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <VerticalTimeline>
      {experiences.map((experience, index) => (
        <ExperienceCard key={`experience-${index}`} experience={experience} />
      ))}
    </VerticalTimeline>
  );
};

export default Experience;
