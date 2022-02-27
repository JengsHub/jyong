import "../../App.css";
import "../../pagesCss/Contact.css";
import ContactRow from "./ContactRow";
import React from "react";
import Container from "@mui/material/Container";
import { select } from "../../ic-redux/useRedux";
import { RootState } from "../../ic-redux/store";

function Contact() {
    const { colors } = select((state: RootState) => ({
    colors: state.colors
  }));

  return (
    <Container maxWidth="md" className="contact-dt">
      <hr></hr>
      <ContactRow />
      <p className="in-touch" style={{ color: colors.primaryTextColor}}>
        Get in touch with me ✌️! Always down for a collaboration.{" "}
      </p>
    </Container>
  );
}

export default Contact;
