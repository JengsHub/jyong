import { Container } from "@mui/material";
import { BigDataCard } from "../components/Cards/BigDataCard";
import { FlatlandCard } from "../components/Cards/FlatlandCard";
import { TASCard } from "../components/Cards/TASCard";
import ViewAll from "../components/ViewAll";
import { RootState } from "../ic-redux/store";
import { select } from "../ic-redux/useRedux";
import "../pagesCss/RecentProjects.css";
// import TASCard from "./ProjectCards/TASCard";
// import FlatlandCard from "./ProjectCards/FlatlandCard";
// import ViewAll from "./components/ViewAll";
// import { Helmet } from "react-helmet";
// import BigDataCard from "./ProjectCards/BigDataCard";

function RecentWorks() {
  const { colors } = select((state: RootState) => ({
    colors: state.colors,
  }));

  const textColor = colors.primaryTextColor;
  console.log(colors);
  return (
    <Container style={{ marginTop: "-3vw" }}>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems:"center", marginBottom: "-2vw"}}>
        <hr style={{ width: "3%", paddingTop: "0.3%", marginRight:"1%", color: textColor, flexGrow: 1, backgroundColor: textColor, borderColor: textColor  }} />
        <p className="recent-works" style={{ color: textColor, flexGrow:1000 }}>
          MY RECENT PROJECTS
        </p>
      </div>
      <TASCard />
      <BigDataCard />
      <FlatlandCard />
      <ViewAll />
      {/* <TASCard></TASCard>
      <FlatlandCard></FlatlandCard>
      <BigDataCard></BigDataCard>
      <ViewAll></ViewAll> */}
    </Container>
  );
}

export default RecentWorks;
