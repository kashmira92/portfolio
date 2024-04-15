import React from "react";
import {
  VerticalTimelineElement,
  VerticalTimeline,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { academia } from "../../assets";
import "../../styles/timeline.css";
const AcademiaCard = ({ academia }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#3f79b3",
        color: "rgb(63, 121, 179)",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #3f79b3" }}
      date={academia.date}
      iconStyle={{ background: "#fffff" }}
      icon={
        <div className="altTimelineComponent">
          <img
            src={academia.icon}
            alt={academia.company_name}
            className="imgComponent"
          />
        </div>
      }
    >
      <div>
        <h3 className="h3text">{academia.title}</h3>
        <p className="pText" style={{ margin: 0 }}>
          {academia.company_name}
        </p>
      </div>

      <ul className="listDisc">
        {academia.points.map((point, index) => (
          <li key={`academia-point-${index}`} className="listItem">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Academia = () => {
  return (
    <VerticalTimeline>
      {academia.map((academy, index) => (
        <AcademiaCard key={`academy-${index}`} academia={academy} />
      ))}
    </VerticalTimeline>
  );
};

export default Academia;
