/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from "@mui/material";
import "../App.css";
import "../pagesCss/Profile.css";
import me from "../images/Me.gif";
import { useDispatch } from "react-redux";
import { setColorScheme } from "../ic-redux/reducers/settingsReducer";
import { darkColorScheme } from "../models/darkColorScheme";
import { lightColorScheme } from "../models/lightColorScheme";
import { select } from "../ic-redux/useRedux";
import { RootState } from "../ic-redux/store";

function Profile() {
  const dispatch = useDispatch();
  const { colorScheme } = select((state: RootState) => ({
    colorScheme: state.colors,
  }));

  // Boolean for dark mode and language selected
  const darkMode =
    JSON.stringify(colorScheme) === JSON.stringify(darkColorScheme);

  const toggleDarkMode = () => {
    console.log("Dark mode");
    console.log(darkMode);
    dispatch(setColorScheme(darkMode ? lightColorScheme : darkColorScheme));
  };

  const textColor = colorScheme.primaryTextColor;
  const barStyle = { color: textColor };

  return (
    <Container style={{ marginTop: "-2vw" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "15%",
            flex: "1 0 0",
            justifyContent: "right",
          }}
        >
          <p
            className="line-1 anim-typewriter"
            style={{
              textAlign: "right",
              color: textColor,
              fontFamily: "Courier New",
            }}
          >
            Click on the image
          </p>
        </div>
        <div style={{ flex: "1 0 0" }}>
          <img
            className="me-icon"
            src={me}
            alt="Profile"
            onClick={() => toggleDarkMode()}
            style={{ position: "relative" }}
          />
        </div>
        <div
          style={{
            textAlign: "center",
            flex: "1 0 0",
            width: "15%",
            justifyContent: "center",
          }}
        >
          <p
            className="line-1 anim-typewriter-2"
            style={{
              animationDelay: "4s",
              color: textColor,
              fontFamily: "Courier New",
              justifyContent: "center",
            }}
          >
            to toggle dark theme.
          </p>
        </div>
      </div>
      <div>
        <h1 className="intro" style={barStyle}>
          Hi, I'm <a className="name-link">Jeng Yue</a>
        </h1>
      </div>
      <div>
        <p className="profile-text" style={barStyle}>
          I'm an aspiring software engineer who is currently pursuing a degree
          in Software Engineering at Monash University Malaysia. My biggest
          advantage is probably my outgoing personality which has provided me
          with the ability to adapt and establish a stable environment for me to
          perform. Additionally, I am no stranger to software development
          processes such as {/* eslint-disable react/jsx-no-target-blank */}
          {/* TO-DO: Different Color Schem for links */}
          <a
            href="https://www.scrum.org/resources/what-is-scrum"
            target="_blank"
          >
            Scrum
          </a>{" "}
          and {/* eslint-disable react/jsx-no-target-blank */}
          <a href="https://www.scaledagileframework.com/" target="_blank">
            SAFe
          </a>
          .
        </p>
      </div>
    </Container>
  );
}

export default Profile;
