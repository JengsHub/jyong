import "../../App.css";
import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import { select } from "../../ic-redux/useRedux";
import { RootState } from "../../ic-redux/store";

function GitMonitorPage() {
  const { colors } = select((state: RootState) => ({
    colors: state.colors,
  }));
  const textColor = colors.primaryTextColor;
  const textStyle = { color: textColor };

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Box>
      <Container>
        <div className="header" />
        <h1 className="intro" style={textStyle}>
          🔎 GitHub Monitoring System 🔍
        </h1>
        <div className="info-container">
          <p className="info" style={textStyle}>
            Last updated : March, 2021
          </p>
          <p className="info" style={textStyle}>
            {/* eslint-disable react/jsx-no-target-blank */}
            Available at{" "}
            <a href="https://github.com/JengsHub/GitMonitoring" target="_blank">
              https://github.com/JengsHub/GitMonitoring
            </a>
          </p>
        </div>
        <img
          style={{ backgroundColor: "#F5F5F5" }}
          className="git-logo"
          src={process.env.PUBLIC_URL +"/images/Github.jpg"}
          alt="github logo"
        ></img>
        <p className=" indent profile-text" style={textStyle}>
          Marking team projects in a university project is always a hassle for
          the teaching team. The markers have to figure out how much work each
          team member contributed, whether it was any good, and whether it was
          done in a timely manner or so late that the team had no chance to test
          it. For a GitHub repository, it would be very useful to present
          statistics of the repository for repository owners, like a timeline
          showing when work was checked in, pie charts showing the proportion of
          lines of code each contributor checked in, and a list showing which
          team members were responsible for which files, average time to fix or
          close issues, average time to response to issue discussion, number of
          issues raised per class/file, and the main developers who resolve
          issues.
        </p>
        {/* eslint-disable react/jsx-no-target-blank */}
        <a
          href="https://itnext.io/monitoring-the-performance-of-software-teams-using-github-jira-and-grafana-42035b18eae6"
          target="_blank"
        >
          <img
            className="git-monitoring"
            src={process.env.PUBLIC_URL +"/images/git monitoring.png"}
            alt="github monitoring"
          ></img>
        </a>
        <i className="caption" style={textStyle}>
          Example of monitoring done on repository
        </i>
        <p className=" indent profile-text" style={textStyle}>
          With the use of GitHub's RESTful interface, we can get push events
          (when code is checked in) of a GitHub repository. More info on the
          commit interface{" "}
          <a
            href=" https://
developer.github.com/v3/activity/events/types/#pushevent"
            target="_blank"
          >
            {" "}
            here
          </a>
          . The project was written with javascript and the use of Corvid's API
          (now known as Velo) on Wix.com. As Wix.com's free hosting has run out
          of its duration, attached screenshots below shows the basic UI of the
          project.
        </p>
        <img
          className="ui"
          src={process.env.PUBLIC_URL +"/images/Login_page.png"}
          alt="Login Page"
        ></img>
        <i className="caption" style={textStyle}>
          Login Page UI
        </i>
        <img
          className="ui"
          src={process.env.PUBLIC_URL +"/images/Screenshot (17).png"}
          alt="GitHub repository contributers"
        ></img>
        <i className="caption" style={textStyle}>
          GitHub repository contributers UI
        </i>
        <div className="bottom"></div>
      </Container>
    </Box>
  );
}

export default GitMonitorPage;
