/* eslint-disable react-hooks/exhaustive-deps */
import "../../App.css";
import React, { useEffect } from "react";
import { Box, Container } from "@mui/material";
import { select } from "../../ic-redux/useRedux";
import { RootState } from "../../ic-redux/store";

function TASProjectPage() {
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
          👨‍🏫 Tutor Allocation Project 👩‍🏫
        </h1>
        <div className="info-container">
          <p className="info" style={textStyle}>
            Last updated : March, 2021
          </p>
          {/* eslint-disable react/jsx-no-target-blank */}
          <p className="info" style={textStyle}>
            {" "}
            Available at{" "}
            <a
              href="https://github.com/JengsHub/TutorAllocationSystem"
              target="_blank"
            >
              https://github.com/JengsHub/TutorAllocationSystem
            </a>
          </p>
        </div>
        <img
          className="TAS-logo"
          src={"/images/TAS-logofull.png"}
          alt="TAS logo"
        ></img>
        <p className="indent profile-text" style={textStyle}>
          This project was a collaborative effort from two teams, one based in
          Malaysia and the other in Australia. The goal here was to create a
          system to assist with assigning tutors to classes for Monash
          University Australia. The project idea was pitched to us due to the
          fact that the existing process of allocating tutors were "troublesome"
          per se.
          <br></br>
          <br></br>
        </p>
        <img
          className="safe-logo"
          src={"/images/Safe.png"}
          alt="SAFe logo"
        ></img>
        <p className="indent profile-text" style={textStyle}>
          My role in this project was that of a Product Manager as part of the{" "}
          {/* eslint-disable react/jsx-no-target-blank */}
          <a
            href="https://www.scaledagileframework.com/product-and-solution-management/"
            target="_blank"
          >
            Product Management Team
          </a>{" "}
          in a Scaled Agile Framework. Responsibility of my role included{" "}
          <strong className="bold">
            {" "}
            scheduling and holding meetings with stakeholders, develop Product
            Increment Roadmaps, manage and prioritize application features,
            ensuring product completeness
          </strong>{" "}
          and much more.
          <br></br>
          <br></br>
        </p>
        <p className="indent profile-text" style={textStyle}>
          This project was started from scratch. Therefore the first meeting
          with our stakeholders were crucial for the Product Management Team to
          nail the product vision statement by understanding the needs and
          requirements for the application. We had also come up with a
          conceptual class diagram that consists of important domain concepts.
          Below is an example of the conceptual class diagram we came up with.
        </p>
        <img
          className="conceptual-diagram"
          src={"/images/Conceptual_Model.png"}
          alt="UML diagram"
        ></img>
        <i className="caption" style={textStyle}>
          Conceptual UML Class Diagram
        </i>
        <p className="indent profile-text" style={textStyle}>
          With the Class Diagram done, we then had to decide the framework and
          tools we will be using for the project. We decided its best to utilize
          a{" "}
          <a href="https://www.geeksforgeeks.org/what-is-pern-stack/">
            {" "}
            PERN stack
          </a>{" "}
          after some discussions. With that, we started our next phase of the
          project which is Database Modelling. Below is an example of the
          Database Model.
        </p>

        <img
          className="database-diagram"
          src={"/images/DatabaseDraft.png"}
          alt="Database Modal"
        ></img>
        <i className="caption" style={textStyle}>
          Initial Database Modal
        </i>
        <b></b>
        <b></b>
        <p className="indent profile-text" style={textStyle}>
          {/* eslint-disable react/jsx-no-target-blank */}
          Through iterative{" "}
          <a
            href="https://www.scaledagileframework.com/program-increment/"
            target="_blank"
          >
            Product Increments
          </a>
          , my team and I had designed, coded and tested the application
          consistently. The application frontend was deployed using{" "}
          {/* eslint-disable react/jsx-no-target-blank */}
          <a href="https://www.heroku.com/" target="_blank">
            {" "}
            heroku
          </a>{" "}
          while the backend was hosted using{" "}
          {/* eslint-disable react/jsx-no-target-blank */}
          <a href="https://aws.amazon.com/lambda/" target="blank">
            AWS Lambda
          </a>
          . The project can be viewed{" "}
          {/* eslint-disable react/jsx-no-target-blank */}
          <a
            href="https://github.com/JengsHub/TutorAllocationSystem/tree/master"
            target="_blank"
          >
            here
          </a>
          . Below are some of the screenshots of the Tutor Allocation System we
          had crafted.
        </p>
        <img
          className="database-diagram"
          src={"/images/Screenshot (527).png"}
          alt="Screenshot 1"
        ></img>
        <i className="caption" style={textStyle}>
          Unit Offering Screenshot
        </i>
        <img
          className="database-diagram"
          src={"/images/Screenshot (528).png"}
          alt="Screenshot 2"
        ></img>
        <i className="caption" style={textStyle}>
          File Uploader Screenshot
        </i>
        <img
          className="database-diagram"
          src={"/images/Screenshot (529).png"}
          alt="Screenshot 3"
        ></img>
        <i className="caption" style={textStyle}>
          Role Modification Screenshot
        </i>

        <div className="bottom"></div>
      </Container>
    </Box>
  );
}

export default TASProjectPage;
