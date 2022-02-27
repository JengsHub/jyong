import "../../App.css";
import React from "react";
import { CardContent } from "@mui/material";
import CardTemplate from "../CardTemplate";
import { RootState } from "../../ic-redux/store";
import { select } from "../../ic-redux/useRedux";

function UsabilityCard() {
  const { colors } = select((state: RootState) => ({
    colors: state.colors,
  }));

  const textColor = colors.primaryTextColor;
  const bgColor = colors.secondaryWebBackgroundColor;
  return (
    <CardTemplate
      cardColor={"orange"}
      imgAltNAme={"Usability Logo"}
      imgsrc={"/images/Usability.webp"}
      cardContTitle={"LocalCooks Application Design"}
      children={
        <CardContent
          className="card-content"
          style={{ backgroundColor: bgColor, transition: "0.3s" }}
        >
          <h2 className="card-heading" style={{ color: textColor }}>
            LocalCooks Application Design
          </h2>
          <p className="text" style={{ color: textColor }}>
            {" "}
            With the goal of understanding usability, my team and I went through
            the process of a regular UX project to better understand the users
            needs.
            <br></br>
            <i className="click-clue" style={{ color: textColor }}> Click to find out more.</i>
          </p>
        </CardContent>
      }
      navPath={"/portfolio/projects/Usability"}
    />
  );
}

export default UsabilityCard;
