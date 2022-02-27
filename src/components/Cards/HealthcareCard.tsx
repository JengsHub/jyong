import "../../App.css";
import React from "react";
import { CardContent } from "@mui/material";
import CardTemplate from "../CardTemplate";
import { RootState } from "../../ic-redux/store";
import { select } from "../../ic-redux/useRedux";

function HealthcareCard() {
  const { colors } = select((state: RootState) => ({
    colors: state.colors,
  }));

  const textColor = colors.primaryTextColor;
  const bgColor = colors.secondaryWebBackgroundColor;
  return (
    <CardTemplate
      cardColor={"green"}
      imgAltNAme={"Healthcare Logo"}
      imgsrc={"/images/healthcare.png"}
      cardContTitle={"Healthcare Monitoring System"}
      children={
        <CardContent
          className="card-content"
          style={{ backgroundColor: bgColor, transition: "0.3s" }}
        >
          <h2 className="card-heading" style={{ color: textColor }}>
            Healthcare Monitoring System
          </h2>
          <p className="text" style={{ color: textColor }}>
            Developed a mobile application which allows for doctors to monitor
            different health related details of patients.
            <br></br>
            <i className="click-clue" style={{ color: textColor }}>
              {" "}
              Click to find out more.
            </i>
          </p>
        </CardContent>
      }
      navPath={"/portfolio/projects/HealthcareMonitoringSystem"}
    />
  );
}

export default HealthcareCard;
