import "./appRoutes.css";
import { Route, NavLink, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { select } from "./ic-redux/useRedux";
import { RootState } from "./ic-redux/store";
import Container from "@mui/material/Container";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import TASProjectPage from "./pages/ProjectPages/TASProjectPage";
import FlatlandPage from "./pages/ProjectPages/FlatlandPage";
import BigDataPage from "./pages/ProjectPages/BigDataPage";
import HealthcarePage from "./pages/ProjectPages/HealthcarePage";
import UsabilityPage from "./pages/ProjectPages/UsabilityPage";
import FingerprintPage from "./pages/ProjectPages/FingerprintPage";
import GitMonitorPage from "./pages/ProjectPages/GitMonitorPage";
import DataVisPage from "./pages/ProjectPages/DataVisPage";
import DataAnalyticsPage from "./pages/ProjectPages/DataAnalyticsPage";

function AppRoutes() {
  const { colors } = select((state: RootState) => ({
    colors: state.colors,
  }));
  const bgColor = colors.primaryWebBackgroundColor;
  const textColor = colors.primaryTextColor;

  const barStyle = { backgroundColor: bgColor, color: textColor };

  return (
    // Create resposive width based on device size
    <div style={{ backgroundColor: bgColor, transition: "0.3s" }}>
      <Container>
        <div className="nav-bar">
          <div className="nav-bar-left">
            <NavLink
              className="nav-bar-fade"
              style={barStyle}
              to="/portfolio/about"
            >
              ABOUT ME
            </NavLink>
          </div>
          <div className="nav-bar-right">
            <NavLink
              className="nav-bar-fade"
              style={barStyle}
              to="/portfolio/projects"
            >
              PROJECTS
            </NavLink>
            <NavLink className="nav-bar-fade" style={barStyle} to="/portfolio">
              HOME
            </NavLink>
          </div>
        </div>
      </Container>

      <Routes>
        <Route path="/portfolio" element={<Home />}></Route>
        <Route path="/portfolio/about" element={<AboutMe />}></Route>
        <Route path="/portfolio/projects" element={<Projects />}></Route>
        <Route
          path="/portfolio/projects/TutorAllocationSystem"
          element={<TASProjectPage />}
        ></Route>
        <Route
          path="/portfolio/projects/FlatlandChallenge"
          element={<FlatlandPage />}
        ></Route>
        <Route
          path="/portfolio/projects/BigDataProcessing"
          element={<BigDataPage />}
        ></Route>
        <Route
          path="/portfolio/projects/HealthcareMonitoringSystem"
          element={<HealthcarePage />}
        ></Route>
        <Route
          path="/portfolio/projects/Usability"
          element={<UsabilityPage />}
        ></Route>
        <Route
          path="/portfolio/projects/Fingerprint"
          element={<FingerprintPage />}
        ></Route>
        <Route
          path="/portfolio/projects/GitMonitoringSystem"
          element={<GitMonitorPage />}
        ></Route>
        <Route
          path="/portfolio/projects/DataVisualisation"
          element={<DataVisPage />}
        ></Route>
        <Route
          path="/portfolio/projects/DataAnalytics"
          element={<DataAnalyticsPage />}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default AppRoutes;
