import { CardContent } from "@mui/material";
import { FC } from "react";
import { RootState } from "../../ic-redux/store";
import { select } from "../../ic-redux/useRedux";
import CardTemplate from "../CardTemplate";

export const FlatlandCard: FC = () => {
  const { colors } = select((state: RootState) => ({
    colors: state.colors,
  }));

  const textColor = colors.primaryTextColor;
  const bgColor = colors.secondaryWebBackgroundColor
  return (
    <CardTemplate
      cardColor={"yellow"}
      imgAltNAme={"Flatland Logo"}
      imgsrc={process.env.PUBLIC_URL + "/images/flatland-logo.svg"}
      cardContTitle={"Flatland Challenge"}
      children={
        <CardContent className="card-content" style={{ backgroundColor: bgColor, transition: "0.3s" }} >
          <h2 className="card-heading" style={{ color: textColor }}>Flatland Challenge</h2>
          <p className="text" style={{ color: textColor }}>
            {" "}
            The {/* eslint-disable react/jsx-no-target-blank */}
            <a href="https://flatland.aicrowd.com/intro.html" target="_blank">
              {" "}
              Flatland Challenge
            </a>{" "}
            is a multi-train path-planning and scheduling problem on a grid
            world. With the use of A* algorithm, the goal is to schedule the
            trains without conflicts. <br></br>
            <i className="click-clue"  style={{ color: textColor }}> Click to find out more.</i>
          </p>
        </CardContent>
      }
      navPath={"/projects/FlatlandChallenge"}
    />
  );
};
