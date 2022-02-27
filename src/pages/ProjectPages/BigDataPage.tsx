import "../../App.css";
import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import { select } from "../../ic-redux/useRedux";
import { RootState } from "../../ic-redux/store";

function BigDataPage() {
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
        <h1 className="intro" style={textStyle}>
          📊 Big Data Processing 📈
        </h1>

        <div className="info-container">
          <p className="info" style={textStyle}>
            Last updated : May, 2021
          </p>
          {/* eslint-disable react/jsx-no-target-blank */}
          <p className="info" style={textStyle}>
            Available at{" "}
            <a
              href="https://github.com/JengsHub/BigDataProcessing"
              target="_blank"
            >
              https://github.com/JengsHub/BigDataProcessing
            </a>
          </p>
        </div>
        <img
        //   style={{ backgroundColor: "#F5F5F5", padding: '0.5vw', borderRadius: "1vw", opacity: 0.5 }}
          className="apache"
          src={"/images/apache_spark.png"}
          alt="Apache Spark logo"
        ></img>
        <p className="indent profile-text" style={textStyle}>
          To familiarize myself with Apache Spark, I started by investigating
          and understanding the various operation that can be carried out on
          Apache Spark, I employed various methods on both Resilient Distributed
          Datasets (RDD) and Dataframes over a large dataset of Pedestrian Count
          in Melbourne Australia. I have also gauged the performance difference
          between RDD and dataframes.
        </p>
        <img
          className="rdd"
          src={"/images/rdd_operation.png"}
          alt="Basic RDD operations"
        ></img>
        <i className="caption" style={textStyle}>
          Basic RDD operations.
        </i>

        {/* <img className="dataframe" src={df} alt="Apache Spark dataframe structure."></img>
          <i className="caption">Apache Spark dataframe structure.</i> */}

        <p className="indent profile-text" style={textStyle}>
          With the conclusion drawn from the comparisons between performance of
          RDD and dataframes, I then proceeded to build various machine learning
          models to predict pedestrian traffic. These models include, Logistic
          Regression, Decision tree and Random Forest. To transform, evaluate
          and fit the steps into an object, a Pipeline is used.
        </p>
        <img
          className="pipeline"
          src={"/images/pipeline.png"}
          alt="Overall Architecture."
        ></img>
        <i className="caption" style={textStyle}>
          Overall Architecture.
        </i>

        <p className="indent profile-text" style={textStyle}>
          As I've gained more experience with Apache Spark, I attempted perform
          predictions using the machine learning model created along with a
          stream of "real-time" data using Spark Streaming and Apache Kafka.
        </p>

        <img
          className="pipeline"
          src={"/images/apache_stream.png"}
          alt="Overall Architecture for streamed data."
        ></img>
        <i className="caption" style={textStyle}>
          Overall Architecture for prediction of stream.
        </i>
        <div className="bottom"></div>
      </Container>
    </Box>
  );
}

export default BigDataPage;
