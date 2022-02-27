import "./appRoutes.css";
import { Route, NavLink, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { select } from "./ic-redux/useRedux";
import { RootState } from "./ic-redux/store";
import Container from "@mui/material/Container";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";

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
        <Route path="*" element={<NotFound />}></Route>
        {/* <Route exact path="/portfolio" component={Home}></Route>
        <Route exact path="/portfolio/about" component={About}></Route>
        <Route exact path="/portfolio/projects" component={Projects}></Route>
        <Route
          exact
          path="/portfolio/projects/TutorAllocationSystem"
          component={TASProjectPage}
        ></Route>
        <Route
          exact
          path="/portfolio/projects/DataVisualisation"
          component={DataVisPage}
        ></Route>
        <Route
          exact
          path="/portfolio/projects/Fingerprint"
          component={FingerprintPage}
        ></Route>
        <Route
          exact
          path="/portfolio/projects/Usability"
          component={UsabilityPage}
        ></Route>
        <Route
          exact
          path="/portfolio/projects/HealthcareMonitoringSystem"
          component={HealthcarePage}
        ></Route>
        <Route
          exact
          path="/portfolio/projects/FlatlandChallenge"
          component={FlatlandPage}
        ></Route>
        <Route
          exact
          path="/portfolio/projects/GitMonitoringSystem"
          component={GitMonitorPage}
        ></Route>
        <Route
          exact
          path="/portfolio/projects/BigDataProcessing"
          component={BigDataPage}
        ></Route>
        <Route
          exact
          path="/portfolio/projects/DataAnalytics"
          component={DataAnalyticsPage}
        ></Route> */}
      </Routes>
    </div>
  );
}

export default AppRoutes;
