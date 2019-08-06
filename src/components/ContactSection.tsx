import React from "react";
import styled from "@emotion/styled";
import { colours, fonts, fontSizes } from "../styles/theme";
import { LinkStyles, getBodyFontStyles } from "./styles/sharedStyles";

const ContactSectionStyles = styled.div`
  background: ${colours.grey};
  padding: 2em 10vw 12em;
  font-family: ${fonts.headingFont};
  h2 {
    font-size: ${fontSizes.headingMd};
    padding-bottom: 1em;
  }
  h3 {
    padding-bottom: 0.75em;
    font-size: ${fontSizes.body};
  }
  a {
    ${getBodyFontStyles}
  }
`;

const ContactSection = () => {
  return (
    <ContactSectionStyles>
      <h2>Let's work together!</h2>
      <h3>Email address</h3>
      <LinkStyles href="mailto: mail@jamestbyrne.com" withUnderline>
        mail@jamestbyrne.com
      </LinkStyles>
    </ContactSectionStyles>
  );
};

export default ContactSection;
