import { CardContent } from "@mui/material";
import { FC } from "react";
import { RootState } from "../../ic-redux/store";
import { select } from "../../ic-redux/useRedux";
import CardTemplate from "../CardTemplate";

export const TASCard: FC = () => {
  const { colors } = select((state: RootState) => ({
    colors: state.colors,
  }));

  const textColor = colors.primaryTextColor;
  const bgColor = colors.secondaryWebBackgroundColor
  return (
    <CardTemplate
      cardColor={"purple"}
      imgAltNAme={"TAS Logo"}
      imgsrc={"/images/logofull.png"}
      cardContTitle={"Tutor Allocation System"}
      children={
        <CardContent className="card-content" style={{ backgroundColor: bgColor, transition: "0.3s" }} >
          <h2 className="card-heading"  style={{ color: textColor }}>Tutor Allocation System</h2>
          <p className="text"  style={{ color: textColor }}>
            {" "}
            In collaboration with Monash University Australia, my team and I
            developed a system for Monash University to help automate and ease
            the process of scheduling of staff.
            <br></br>
            <i className="click-clue"  style={{ color: textColor }}> Click to find out more.</i>
          </p>
        </CardContent>
      }
      navPath={"/portfolio/projects/TutorAllocationSystem"}
    />
  );
};
