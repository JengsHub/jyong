import { CardContent } from "@mui/material";
import { FC } from "react";
import { RootState } from "../../ic-redux/store";
import { select } from "../../ic-redux/useRedux";
import CardTemplate from "../CardTemplate";

export const FingerprintCard: FC = () => {
  const { colors } = select((state: RootState) => ({
    colors: state.colors,
  }));

  const textColor = colors.primaryTextColor;
  const bgColor = colors.secondaryWebBackgroundColor
  return (
    <CardTemplate
      cardColor={"peach"}
      imgAltNAme={"Fingerprint Logo"}
      imgsrc={process.env.PUBLIC_URL +"/images/fingerprint.png"}
      cardContTitle={"Fingerprint Recognition"}
      children={
        <CardContent className="card-content" style={{ backgroundColor: bgColor, transition: "0.3s" }} >
          <h2 className="card-heading"  style={{ color: textColor }}>Fingerprint Recognition</h2>
          <p className="text"  style={{ color: textColor }}>
            {" "}
            With the reference of research papers published online, I developed
            a fingerprint recognition system using distinct fingerprint
            minutiae.
            <br></br>
            <i className="click-clue" style={{ color: textColor }}> Click to find out more.</i>
          </p>
        </CardContent>
      }
      navPath={"/projects/Fingerprint"}
    />
  );
};
