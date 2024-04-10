import { useState } from "react";
import kashImg from "./assets/kashmira.jpeg";
import "./App.css";
import { Tabs, Tab } from "@mui/material";
import CustomTab from "./components/CustomTab";
import SocialButtons from "./components/Socials";

function App() {
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <>
      <div className="header">
        <div className="imgProfile">
          <img src={kashImg} alt="Kashmira Golatkar" />
        </div>
        <h1>
          Hi!! I'm Kashmira, <br></br>
          Welcome to my portfolio
        </h1>
        <SocialButtons />
      </div>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        textColor="white"
        indicatorColor="primary"
        variant="fullWidth"
      >
        <Tab label="About Me" />
        <Tab label="Experience" />
        <Tab label="Academia" />
        <Tab label="Projects" />
        <Tab label="Skills & Expertise" />
      </Tabs>
      <CustomTab value={tabValue}></CustomTab>
    </>
  );
}

export default App;
