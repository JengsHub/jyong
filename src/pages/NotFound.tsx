import { Container } from "@mui/material";
import React from "react";
/*
 * Page: Not Found Page
 * This page displays an error message
 * Users encounter this page when an error has occurred
 */
function NotFound() {
  return (
    <Container>
        {/* TO-DO : Center the text or change it to something else */}
      <h1>404 Not Found: Looks like you've been misallocated.</h1>
    </Container>
  );
};

export default NotFound;