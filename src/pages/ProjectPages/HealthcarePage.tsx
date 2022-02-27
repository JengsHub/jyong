/* eslint-disable react-hooks/exhaustive-deps */
import "../../App.css";
import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import { select } from "../../ic-redux/useRedux";
import { RootState } from "../../ic-redux/store";

function HealthcarePage() {
  const { colors } = select((state: RootState) => ({
    colors: state.colors,
  }));
  const textColor = colors.primaryTextColor;
  const textStyle = { color: textColor };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <Container>
        <div className="header" />
        <h1 className="intro" style={textStyle}>
          👨‍⚕️ Healthcare Monitoring System 👩‍⚕️
        </h1>
        <div className="info-container">
          <p className="info" style={textStyle}>
            Last updated : March, 2021
          </p>
          <p className="info" style={textStyle}>
            {/* eslint-disable react/jsx-no-target-blank */}
            Available at{" "}
            <a
              href="https://github.com/JengsHub/HealthcareMobileApplication"
              target="_blank"
            >
              https://github.com/JengsHub/HealthcareMobileApplication
            </a>
          </p>
        </div>
        <img
          className="git-logo"
          src={process.env.PUBLIC_URL +"/images/FHIR.png"}
          alt="FHIR logo"
        ></img>
        <p className="indent profile-text" style={textStyle}>
          {/* eslint-disable react/jsx-no-target-blank */}
          By utilizing
          <a href="https://www.hl7.org/fhir/overview.html" target="_blank">
            Fast Healthcare Interoperability Resources 1 (FHIR)
          </a>
          , the goal was to develop an application that helps health
          practitioners monitor the total cholesterol level of their patient.
        </p>
        <div className="row logos">
          <div className="column-3">
            <img
              className="logo-flutter"
              src={process.env.PUBLIC_URL +"/images/flutter.png"}
              alt="Flutter logo"
            ></img>
          </div>
          <div className="column-3">
            <img
              className="logo-flutter"
              src={process.env.PUBLIC_URL +"/images/android studio.svg"}
              alt="Android Studio logo"
            ></img>
          </div>
          <div className="column-3">
            <img
              className="logo-flutter"
              src={process.env.PUBLIC_URL +"/images/dart.svg"}
              alt="Dart logo"
            ></img>
          </div>
        </div>
        <p className="indent profile-text" style={textStyle}>
          {/* eslint-disable react/jsx-no-target-blank */}
          The application was built using{" "}
          <a
            href="https://flutter.dev/?gclid=Cj0KCQiAhP2BBhDdARIsAJEzXlFyNuxtKNZBRwVGncFd8JUTUJ8SE7HnWVXbhcJx7FrTAlSEdudSY8oaApW2EALw_wcB&gclsrc=aw.ds"
            target="_blank"
          >
            Flutter SDK
          </a>{" "}
          along with{" "}
          <a href="https://developer.android.com/studio" target="_blank">
            {" "}
            Android Studio
          </a>{" "}
          and the Programming Language{" "}
          {/* eslint-disable react/jsx-no-target-blank */}
          <a href="https://dart.dev/">Dart</a> that are usually used to code
          Flutter apps. The project was started from scratch. Thus the first
          step is to make use of the UML to design conceptual class diagrams.
        </p>
        <img
          className="conceptual-diagram"
          src={process.env.PUBLIC_URL +"/images/HealthUML.png"}
          alt="UML"
        ></img>
        <i className="caption"> Conceptual Class Diagram</i>
        <p className="indent profile-text" style={textStyle}>
          Subsequently, development of an interactive and informative interface
          began. This allows health practitioners clearly view and identify
          health aspects of monitored patients. Health practitioners were also
          able to specify how frequently they want the records to be updated.
          Because this application is built as a mobile application, persistent
          storage of a mobile phone is utilized to store retrieved medical
          records to minimize the server load and improve app performance. With
          the use of machine learning technique known as{" "}
          {/* eslint-disable react/jsx-no-target-blank */}
          <a
            href="https://en.wikipedia.org/wiki/Random_forest#:~:text=Random%20forests%20or%20random%20decision,average%20prediction%20(regression)%20of%20the"
            target="blank"
          >
            {" "}
            Random Forest Classification
          </a>
          , the application also managed to predict the potential factors
          contributing to high cholesterol.
        </p>
        <div className="row logos">
          <div className="column-3">
            <img
              className="app-ss"
              src={process.env.PUBLIC_URL +"/images/mainApp.jpg"}
              alt="Application frontpage"
            ></img>
            <i className="caption" style={textStyle}> Main Page</i>
          </div>
          <div className="column-3">
            <img
              className="app-ss"
              src={process.env.PUBLIC_URL +"/images/cholesterol.jpg"}
              alt="Cholestrol Page"
            ></img>
            <i className="caption" style={textStyle}> Cholesterol Detail Page</i>
          </div>
          <div className="column-3">
            <img
              className="app-ss"
              src={process.env.PUBLIC_URL +"/images/BloodPressure.jpg"}
              alt="Blood Pressure Page"
            ></img>
            <i className="caption" style={textStyle}> Blood Pressure Detail Page</i>
          </div>
        </div>

        <div className="bottom"></div>
      </Container>
    </Box>
  );
}

export default HealthcarePage;
