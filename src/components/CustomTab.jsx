import React from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import About from "./Tabs/About";
import Projects from "./Tabs/Projects";
import Skills from "./Tabs/Skills";
import Academia from "./Tabs/Academia";
import Experience from "./Tabs/Experience";
const CustomTab = ({ value }) => {
  let tabToDisplay;
  switch (value) {
    case 0:
      tabToDisplay = <About />;
      break;
    case 1:
      tabToDisplay = <Experience />;
      break;
    case 2:
      tabToDisplay = <Academia />;
      break;
    case 3:
      tabToDisplay = <Projects />;
      break;
    case 4:
      tabToDisplay = <Skills />;
      break;
    default:
      tabToDisplay = <p>Select Tab to get started</p>;
      break;
  }
  return (
    <>
      <div className="custom-tab">{tabToDisplay}</div>
    </>
  );
};

export default CustomTab;
