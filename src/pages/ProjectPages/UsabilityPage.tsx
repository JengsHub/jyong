/* eslint-disable react-hooks/exhaustive-deps */
import "../../App.css";
import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import { select } from "../../ic-redux/useRedux";
import { RootState } from "../../ic-redux/store";

function UsabilityPage() {
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
          📱 LocalCooks Usability Project 🖥️
        </h1>
        <div className="info-container">
          <p className="info" style={textStyle}>
            Last updated : March, 2021
          </p>
        </div>

        <p className="indent profile-text" style={textStyle}>
          Everyone needs a hobby, especially during Covid-19 lockdowns. To
          better the community, we had the idea to create an application known
          as LocalCooks. The goal of the application was to inspire the local
          community to pick up cooking as a hobby and try out recipes for trendy
          food while keeping traditional recipes alive. However, designing an
          application with the spark of an idea alone is insufficient and it is
          bound to fail. Thus, we set out to understand our users needs and
          preferences.
        </p>
        <h3 className="recent-works" style={textStyle}>How it happened</h3>
        <p className="indent profile-text" style={textStyle}>
          I would say the most crucial step in designing a UI is to know the
          target users of the application first. My team and I then set out to
          gather information regarding users with the use of questionnaires.
          This could be done in various number of ways, but due to Covid-19, we
          chose to use google forms for our questionnaires.
        </p>

        {/* eslint-disable react/jsx-no-target-blank */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdVaORxnwQBx_AsfWmqV7uRZuzjpCuElpaDXxJQIiyNU3YjwA/viewform"
          target="_blank"
        >
          <img
            className="Question"
            src={"/images/Screenshot (534).png"}
            alt="Google Form Questionnaire"
          ></img>
        </a>
        <i className="caption" style={textStyle}>Google Form Questionnaire</i>
        <p className="indent profile-text" style={textStyle}>
          With the information gathered, we then review information gathered by
          colleagues and conclude similarities and differences. We then
          individually came up with user stories and personas from the
          information that we have concluded. These are a few examples of them.
        </p>
        <div className="container">
          <div className="item">
            <img
              className="Persona"
              src={"/images/Persona.png"}
              alt="Persona"
            ></img>
            <i className="caption" style={textStyle}> Persona</i>
          </div>
          <div className="item">
            <p className="profile-text" style={textStyle}>
              "As a user of the application, I want to be able to switch the
              language of the application as I like so that I can understand the
              user interface." <br></br>
              <i className="caption" style={textStyle}>- User Story 1</i>
            </p>
            <p className="profile-text" style={textStyle}>
              "As a owner of smart cooker, I want to be able to see recipes for
              smart cookers instead of normal recipes so that I can cook new
              things with my smart cooker." <br></br>
              <i className="caption" style={textStyle}>- User Story 2</i>
            </p>
          </div>
        </div>
        <div className="usability-sketch-container ">
          <div className="sketch-item">
            <p className=" profile-text" style={textStyle}>
              Now that we know our user, we individually produced some sketches
              of the application. These sketches were produced by applying some
              theories in UI design.
              <br />
              <br />
              Why sketches? They allow us to express our ideas quickly at super
              low costs. We can also decide on things with sketches before we
              move further into the project, which would save some time
            </p>
          </div>
          <div className="sketch-item">
            <img
              className="sketch"
              src={"/images/sketch.jpg"}
              alt="Sketch"
            ></img>
            <i className="caption" style={textStyle}> Example sketch</i>
          </div>
        </div>
        <div className="usability-sketch-container">
          <div className="sketch-item">
            <img
              className="sketch"
              src={"/images/Screenshot (534).png"}
              alt="Example of Mock up"
            ></img>
          </div>
          <div className="sketch-item">
            <p className="profile-text" style={textStyle}>
              With our sketches, my team and I got together and decided on pros
              and cons of each idea. We then decided on a final sketch idea and
              proceeded to produce a high-fidelity prototype with Moqups. This
              is an example of the UI we came up with <i>(left)</i>.
            </p>
          </div>
        </div>
        <p className="indent profile-text" style={textStyle}>
          With an interactive prototype, we set out again to interview users
          with the prototype. In this evaluation, we extract crucial information
          such as how long user take to carry out tasks and how many mistakes
          were made on the prototype. <b>Receiving feedback</b> from users is a
          very crucial part of the process in UX designing. With the feedback
          received, we finished up the project after making minor modifications
          to our prototype
        </p>
        <div className="bottom"></div>
      </Container>
    </Box>
  );
}

export default UsabilityPage;
