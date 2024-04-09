import React from "react";
import { IconButton, Tooltip, Typography } from "@mui/material";
import { LinkedIn, Mail, GitHub } from "@mui/icons-material";
import "../styles/common.css";

const SocialButtons = () => {
  return (
    <>
      <h1>
        Socials<br></br>
      </h1>
      <div className="socialButton">
        <div className="individualButton">
          <Tooltip title="Gmail">
            <IconButton
              style={{ fontSize: "2.5rem" }} // Adjust the size as needed
              color="primary"
              aria-label="gmail"
              component="a"
              href="mailto:kgolatka@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail />
              <Typography variant="body2">Gmail</Typography>
            </IconButton>
          </Tooltip>
        </div>
        <div className="individualButton">
          <Tooltip title="LinkedIn">
            <IconButton
              style={{ fontSize: "2.5rem" }} // Adjust the size as needed
              color="primary"
              aria-label="linkedin"
              component="a"
              href="https://www.linkedin.com/in/kashmira-golatkar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
              <Typography variant="body2">LinkedIn</Typography>
            </IconButton>
          </Tooltip>
        </div>

        <div className="individualButton">
          <Tooltip title="GitHub">
            <IconButton
              style={{ fontSize: "2.5rem" }} // Adjust the size as needed
              color="primary"
              aria-label="github"
              component="a"
              href="https://github.com/kashmira92"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
              <Typography variant="body2">GitHub</Typography>
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default SocialButtons;
