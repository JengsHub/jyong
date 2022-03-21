import "../../App.css";
import React, { FC } from "react";
import { CardContent } from "@mui/material";
import CardTemplate from "../CardTemplate";
import { RootState } from "../../ic-redux/store";
import { select } from "../../ic-redux/useRedux";

export const DataAnalyticsCard: FC = () => {
  const { colors } = select((state: RootState) => ({
    colors: state.colors,
  }));

  const textColor = colors.primaryTextColor;
  const bgColor = colors.secondaryWebBackgroundColor;
  return (
    <CardTemplate
      cardColor={"yellow"}
      imgAltNAme={"Data Analytics Logo"}
      imgsrc={process.env.PUBLIC_URL +"/images/data_analytics.png"}
      cardContTitle={"Data Analytics"}
      children={
        <CardContent
          className="card-content"
          style={{ backgroundColor: bgColor, transition: "0.3s" }}
        >
          <h2 className="card-heading" style={{ color: textColor }}>
            Data Analytics
          </h2>
          <p className="text" style={{ color: textColor }}>
            {" "}
            Analysing data sets using a range of statistical, graphical and
            machine-learning techniques with the help of R statisTical
            programming language and RStudio environment.
            <br></br>
            <i className="click-clue" style={{ color: textColor }}> Click to find out more.</i>
          </p>
        </CardContent>
      }
      navPath={"/projects/DataAnalytics"}
    />
  );
}
