import "../App.css";
import "../pagesCss/ViewAll.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import Container from "@mui/material/Container";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import { select } from "../ic-redux/useRedux";
import { RootState } from "../ic-redux/store";

function ViewAll() {
  const { colors } = select((state: RootState) => ({
    colors: state.colors,
  }));

  const history = useNavigate();
  const textColor = colors.primaryTextColor;
  const bgColor = colors.secondaryWebBackgroundColor;

  return (
    <Container>
      <div className="button-wrapper">
        <button
          className="view-all-projects find-out-more"
          onClick={() => history("/projects")}
          style = {{ color: textColor, backgroundColor: bgColor }}
        >
          View All Projects{" "}
          <ViewCarouselIcon
            className="view-all-icon"
            style={{ fontSize: "calc(20px + 0.7vw)" }}
          />
        </button>
      </div>
    </Container>
  );
}

export default ViewAll;
