import { CardContent } from "@mui/material";
import { FC } from "react";
import { RootState } from "../../ic-redux/store";
import { select } from "../../ic-redux/useRedux";
import CardTemplate from "../CardTemplate";

export const BigDataCard: FC = () => {
  const { colors } = select((state: RootState) => ({
    colors: state.colors,
  }));

  const textColor = colors.primaryTextColor;
  const bgColor = colors.secondaryWebBackgroundColor;
  return (
    <CardTemplate
      cardColor={"blue"}
      imgAltNAme={"Big Data Logo"}
      imgsrc={"/images/big_data.png"}
      cardContTitle={"Big Data Processing"}
      children={
        <CardContent
          className="card-content"
          style={{ backgroundColor: bgColor, transition: "0.3s" }}
        >
          <h2 className="card-heading" style={{ color: textColor }}>
            Big Data Processing
          </h2>
          <p className="text" style={{ color: textColor }}>
            {" "}
            By manoeuvering the latest big data technologies such as Apache
            Spark, Spark Streaming and Apache Kafka, I set out to explore
            parallel and distributed algorithm concepts along with machine
            learning for big data.
            <br></br>
            <i className="click-clue" style={{ color: textColor }}>
              {" "}
              Click to find out more.
            </i>
          </p>
        </CardContent>
      }
      navPath={"/portfolio/projects/FlatlandChallenge"}
    />
  );
};
