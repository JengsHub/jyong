import "../../App.css";
import React, { FC } from "react";
import { CardContent } from "@mui/material";
import CardTemplate from "../CardTemplate";
import { RootState } from "../../ic-redux/store";
import { select } from "../../ic-redux/useRedux";

export const GitMonitorCard: FC = () => {
  const { colors } = select((state: RootState) => ({
    colors: state.colors,
  }));

  const textColor = colors.primaryTextColor;
  const bgColor = colors.secondaryWebBackgroundColor;
  return (
    <CardTemplate
      cardColor={"pink"}
      imgAltNAme={"GitHub Logo"}
      imgsrc={"/images/git.png"}
      cardContTitle={"Git Monitoring System"}
      children={
        <CardContent
          className="card-content"
          style={{ backgroundColor: bgColor, transition: "0.3s" }}
        >
          <h2 className="card-heading" style={{ color: textColor }}>
            Git Monitoring System
          </h2>
          <p className="text" style={{ color: textColor }}>
            {" "}
            A system that enables users to view detailed analysis of
            contributions to a git repository.
            <br></br>
            <i className="click-clue" style={{ color: textColor }}> Click to find out more.</i>
          </p>
        </CardContent>
      }
      navPath={"/portfolio/projects/GitMonitoringSystem"}
    />
  );
}
