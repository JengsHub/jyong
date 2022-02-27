import "../../App.css";
import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import { select } from "../../ic-redux/useRedux";
import { RootState } from "../../ic-redux/store";

function DataVisPage() {
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
        <h1 className="intro" style={textStyle}>📊 Data Visualisation 📈</h1>

        <div className="info-container">
          <p className="info" style={textStyle}>
            Last updated : March, 2021
          </p>
          <p className="info" style={textStyle}>
            {/* eslint-disable react/jsx-no-target-blank */}
            Available at{" "}
            <a
              href="https://github.com/JengsHub/LifeExpectancyVisualisation"
              target="_blank"
            >
              https://github.com/JengsHub/LifeExpectancyVisualisation
            </a>
          </p>
        </div>
        {/* eslint-disable react/jsx-no-target-blank */}
        <a
          href="https://towardsdatascience.com/how-data-visualization-works-12c6a4543d52"
          target="_blank"
        >
          <img
            className="DataVis"
            src={process.env.PUBLIC_URL +"/images/datavis.jpeg"}
            alt="Data Visualisation charts"
          ></img>
        </a>
        <i className="caption" style={textStyle}>
          Different Types of Visualisations
        </i>
        <p className="indent profile-text" style={textStyle}>
          Now more than ever, it is harder for us humans to interpret data. This
          is due to the fact that the volume and variety of data are growing
          exponentially, making data hard to process even for conventional
          database management tools. That is why Data Visualisation is crucial.
          Because of the way the human brain processes information, using charts
          or graphs to visualize large amounts of complex data is easier than
          poring over spreadsheets or reports. Data visualization is a quick and
          easy way to convey concepts in a universal manner.
        </p>
        <div className="usability-sketch-container">
          <div className="sketch-item">
            {/* eslint-disable react/jsx-no-target-blank */}
            <a
              href="https://public.tableau.com/views/Assignment1_15986936718370/Dashboard1?:language=en&:display_count=y&:origin=viz_share_link"
              target="_blank"
            >
              <img
                className="Japan"
                src={process.env.PUBLIC_URL +"/images/Picture1.jpg"}
                alt="Japan Visualisation"
              ></img>
            </a>
            <i className="caption" style={textStyle}>
              Japan as a tourism destination.
            </i>
          </div>
          <div className="sketch-item">
            <p className="indent center profile-text" style={textStyle}>
              By utilizing{" "}
              <a href="https://www.tableau.com/" target="_blank">
                Tableau
              </a>{" "}
              software along with data obtained from{" "}
              <a
                href="https://data.worldbank.org/indicator/ST.INT.ARVL"
                target="_blank"
              >
                {" "}
                World Bank Data
              </a>{" "}
              and{" "}
              <a href="https://statistics.jnto.go.jp/en/" target="_blank">
                Statistics Japan
              </a>
              , I seek to visualise{" "}
              <b className="bold" style={textStyle}>
                Japan as a tourism destination
              </b>
              . My visualisation can be viewed by clicking on the image on the
              left.
            </p>
          </div>
        </div>
        <div className="usability-sketch-container">
          <div className="sketch-item">
            <p className="indent center profile-text" style={textStyle}>
              With data obtained from{" "}
              <a href="https://data.worldbank.org" target="_blank">
                {" "}
                World Bank Data
              </a>{" "}
              and{" "}
              <a
                href="https://population.un.org/wpp2019/Download/Standard/Interpolated/"
                target="_blank"
              >
                United Nations Population Prospect 2019{" "}
              </a>
              , I had visualised the{" "}
              <b className="bold" style={textStyle}>
                Life Expectancy of Humans
              </b>
              . My visualisation can be read by clicking on the image on the
              right.
            </p>
          </div>
          <div className="sketch-item">
            {/* eslint-disable react/jsx-no-target-blank */}
            <a
              href="https://jengshub.github.io/LifeExpectancyVisualisation/"
              target="_blank"
            >
              <img
                className="Bubble"
                src={process.env.PUBLIC_URL +"/images/Picture2.png"}
                alt="Life Expectancy Bubble Graph"
              ></img>
            </a>
            <i className="caption" style={textStyle}>Bubble Graph of Life Expectancy.</i>
          </div>
        </div>
        <div className="bottom"></div>
      </Container>
    </Box>
  );
}

export default DataVisPage;
