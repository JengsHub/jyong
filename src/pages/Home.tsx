import "../App.css";
import Profile from "../sections/Profile";
import React from "react";
import RecentWorks from "./RecentProjects";
import { Box } from "@mui/material";
import Contact from "../components/Contact/Contact";

function Home() {
  return (
    <Box>
      <Profile />
      <RecentWorks />
      <Contact />
    </Box>
  );
}

export default Home;
