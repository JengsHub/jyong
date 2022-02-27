import "../App.css";
import "../pagesCss/CardTemplate.css";
import React, { ReactElement } from "react";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import { select } from "../ic-redux/useRedux";
import { RootState } from "../ic-redux/store";

export interface CardTemplateProps {
  navPath: string;
  cardColor: string;
  imgAltNAme: string;
  imgsrc: string;
  cardContTitle: string;
  children: ReactElement<any, any>;
}

function CardTemplate(CardTemplateProps: CardTemplateProps) {
    const { colors } = select((state: RootState) => ({
    colors: state.colors,
  }));

  const textColor = colors.primaryWebBackgroundColor;
  const history = useNavigate();
  return (
    <div onClick={() => history(CardTemplateProps.navPath)} style={{ backgroundColor: textColor, transition: "0.3s"}}>
      <Card className="card" style={{ borderColor: "red", borderWidth: "20px"  }}>
        <div className={`card-images ${CardTemplateProps.cardColor}`}>
          <img src={`${CardTemplateProps.imgsrc}`} className="logo" alt={`${CardTemplateProps.imgAltNAme}`}></img>
        </div>
        {CardTemplateProps.children}
      </Card>
    </div>
  );
}

export default CardTemplate;
