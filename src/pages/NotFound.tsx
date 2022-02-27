import { Box, Container } from "@mui/material";
import React from "react";
import { RootState } from "../ic-redux/store";
import { select } from "../ic-redux/useRedux";
import Contact from "../components/Contact/Contact";
/*
 * Page: Not Found Page
 * This page displays an error message
 * Users encounter this page when an error has occurred
 */
function NotFound() {
    const { colors } = select((state: RootState) => ({
    colors: state.colors,
  }));

  return (
    <Box>
      <Container style={{ height: "100vh" }}>
        {/* TO-DO : Center the text or change it to something else */}
        <h1 style={{ color: colors.primaryTextColor, textAlign: "center" }}>404 Not Found: Looks like you've been misallocated.</h1>
        <Contact/>
      </Container>
    </Box>
  );
}

export default NotFound;
