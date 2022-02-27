import "../App.css";
import React, { useEffect } from "react";
import { Box, Container } from "@mui/material";
import { TASCard } from "../components/Cards/TASCard";
import { BigDataCard } from "../components/Cards/BigDataCard";
import Contact from "../components/Contact/Contact";
import { FlatlandCard } from "../components/Cards/FlatlandCard";
import { select } from "../ic-redux/useRedux";
import { RootState } from "../ic-redux/store";
import HealthcareCard from "../components/Cards/HealthcareCard";
import UsabilityCard from "../components/Cards/UsabilityCard";
import { FingerprintCard } from "../components/Cards/FingerprintCard";
import { GitMonitorCard } from "../components/Cards/GitMonitorCard";
import { DataVisCard } from "../components/Cards/DataVisCard";
import { DataAnalyticsCard } from "../components/Cards/DataAnalyticsCard";

function Projects() {
  const { colorScheme } = select((state: RootState) => ({
    colorScheme: state.colors,
  }));

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Box>
      <Container>
        <h1
          className="intro-projects"
          style={{ color: colorScheme.primaryTextColor }}
        >
          My Projects
        </h1>
        <TASCard />
        <BigDataCard />
        <FlatlandCard />
        <HealthcareCard />
        <UsabilityCard />
        <FingerprintCard />
        <GitMonitorCard />
        <DataVisCard />
        <DataAnalyticsCard />
        <Contact />
      </Container>
    </Box>
  );
}

export default Projects;
