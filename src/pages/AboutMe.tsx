import "../App.css";
import "../pagesCss/AboutMe.css";
import React from "react";
import Contact from "../components/Contact/Contact";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { select } from "../ic-redux/useRedux";
import { RootState } from "../ic-redux/store";
// import gif from "../images/sparkle.gif";

function AboutMe() {
  const { colorScheme } = select((state: RootState) => ({
    colorScheme: state.colors,
  }));
  const prog_lang = [
    "Python",
    "Java",
    "Javascript",
    "TypeScript",
    "C",
    "Matlab",
    "HTML/CSS",
    "Dart",
    "SQL",
    "R",
  ];
  const tool_n_frame = [
    "GitHub",
    "Express",
    "React, React Native",
    "Flutter",
    "Android Studio",
    "Postman",
    "PostgreSQL",
    "Apache Spark",
    "Lucid Charts",
    "Amazon Web Services",
    "Tableau",
  ];
  const general = [
    "Web Development",
    "Mobile App Development",
    "Product Design",
    "Software Modelling",
    "Database Modelling",
    "Artificial Intelligence",
  ];
  const languages = ["English", "Mandarin", "Malay"];

  const textColor = colorScheme.primaryTextColor;

  return (
    <Box>
      <Container>
        <img
          className="mas-flag"
          src="/images/Malaysia.jpg"
          alt="Malaysian Flag"
        ></img>
        <h2 className="intro" style={{ color: textColor }}>
          👋🏼 I'm an undergraduate who is currently based in Selangor, Malaysia.
        </h2>
        <p className="profile-text" style={{ color: textColor }}>
          My Passion is currently in full-stack web/app development, but I do
          not shy away from adversity. I enjoy collaborative work as I am at a
          point in my life where I still have much to learn from others. Outside
          of coding, music 🎶 and sports ⚽ are my go-tos, they impart a sense
          of comfort onto me. Listed below are more information about me. Feel
          free to get in contact with me and let's chat!!
        </p>
        <Box className="container">
          <div className="item">
            <h2 className="item-list-header" style={{ color: textColor }}>
              {" "}
              👨‍💻 Programming Languages
            </h2>
            {prog_lang.sort().map((items, i) => (
              <p className="list-1" style={{ color: textColor }} key={i}>
                • {items}
              </p>
            ))}
          </div>
          <div className="item">
            <h2 className="item-list-header" style={{ color: textColor }}>
              {" "}
              🛠️ Tools and Frameworks
            </h2>
            {tool_n_frame.sort().map((items, i) => (
              <p className="list-1" style={{ color: textColor }} key={i}>
                • {items}
              </p>
            ))}
          </div>
        </Box>
        <Box className="container">
          <div className="item">
            <h2 className="item-list-header" style={{ color: textColor }}>
              {" "}
              📖 General
            </h2>
            {general.sort().map((items, i) => (
              <p className="list-1" style={{ color: textColor }} key={i}>
                • {items}
              </p>
            ))}
          </div>
          <div className="item">
            <h2 className="item-list-header" style={{ color: textColor }}>
              {" "}
              🌐 Language
            </h2>
            {languages.sort().map((items, i) => (
              <p className="list-1" style={{ color: textColor }} key={i}>
                • {items}
              </p>
            ))}
          </div>
        </Box>
      </Container>
      <Contact />
    </Box>
  );
}
export default AboutMe;
