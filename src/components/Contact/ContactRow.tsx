import "../../pagesCss/Contact.css";
import React from "react";
import IconButton from "@mui/material/IconButton";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import { select } from "../../ic-redux/useRedux";
import { RootState } from "../../ic-redux/store";

function Contact() {
  const { colors } = select((state: RootState) => ({
    colors: state.colors,
  }));

  function openLinked() {
    window.open(
      "https://www.linkedin.com/in/jeng-yue-ong-a29a39216/",
      "_blank"
    );
  }

  function openGitHub() {
    window.open("https://github.com/JengsHub", "_blank");
  }

  function openMail() {
    window.open("mailto:jengyue96@gmail.com", "_blank");
  }

  const fontSize = "calc(20px + 0.7vw)";
  const textColor = colors.primaryTextColor;
  return (
    <div className="contact-row">
      <IconButton onClick={openMail}>
        <Mail style={{ color: textColor , fontSize: `${fontSize}` }}></Mail>
      </IconButton>
      <IconButton onClick={openLinked}>
        <LinkedIn
          style={{ color: textColor , fontSize: `${fontSize}` }}
        ></LinkedIn>
      </IconButton>
      <IconButton onClick={openGitHub}>
        <GitHub style={{ color: textColor , fontSize: `${fontSize}` }}></GitHub>
      </IconButton>
    </div>
  );
}

export default Contact;
