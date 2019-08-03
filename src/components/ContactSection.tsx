import React from "react";
import styled from "@emotion/styled";
import { colours, fonts, fontSizes } from "../styles/theme";

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
    font-family: ${fonts.bodyFont};
    font-size: ${fontSizes.body};
    text-decoration: none;
    position: relative;
    &::after {
      content: "";
      width: 100%;
      height: 2px;
      background: currentColor;
      position: absolute;
      left: 0;
      bottom: -4px;
      transform: translateY(0);
      transition: all 0.2s ease-out;
      opacity: 1;
    }
    &:hover::after {
      transform: translateY(4px);
      opacity: 0;
    }
  }
`;

const ContactSection = () => {
  return (
    <ContactSectionStyles>
      <h2>Let's work together!</h2>
      <h3>Email address</h3>
      <a href="mailto: mail@jamestbyrne.com">mail@jamestbyrne.com</a>
    </ContactSectionStyles>
  );
};

export default ContactSection;
