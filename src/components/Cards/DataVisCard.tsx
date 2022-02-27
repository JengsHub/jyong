import "../../App.css";
import React, { FC } from "react";
import { CardContent } from "@mui/material";
import CardTemplate from "../CardTemplate";
import { RootState } from "../../ic-redux/store";
import { select } from "../../ic-redux/useRedux";

export const DataVisCard: FC = () => {
  const { colors } = select((state: RootState) => ({
    colors: state.colors,
  }));

  const textColor = colors.primaryTextColor;
  const bgColor = colors.secondaryWebBackgroundColor;
  return (
    <CardTemplate
      cardColor={"blue"}
      imgAltNAme={"Data Visualisation Logo"}
      imgsrc={"/images/dataVis.png"}
      cardContTitle={"Data Visualisation"}
      children={
        <CardContent
          className="card-content"
          style={{ backgroundColor: bgColor, transition: "0.3s" }}
        >
          <h2 className="card-heading" style={{ color: textColor }}>
            Data Visualisation
          </h2>
          <p className="text" style={{ color: textColor }}>
            {" "}
            Using Tableau and Vega-Lite Library, I created visualisations for
            two different topics that enables user to easily process
            information.
            <br></br>
            <i className="click-clue" style={{ color: textColor }}> Click to find out more.</i>
          </p>
        </CardContent>
      }
      navPath={"/portfolio/projects/DataVisualisation"}
    />
  );
}
