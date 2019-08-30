import React, { useRef } from "react";
import styled from "@emotion/styled";
import { colours, fonts, fontSizes } from "../styles/theme";
import {
  LinkStyles,
  getBodyFontStyles,
  getHeadingFontStyles,
  sectionPadding,
} from "./styles/sharedStyles";
import AnimationWrapper from "./AnimationWrapper";

const ContactSectionStyles = styled.div`
  background: ${colours.grey};
  ${sectionPadding};
  padding-top: 2em;
  padding-bottom: 12em !important;
  font-family: ${fonts.headingFont};
  h2 {
    ${getHeadingFontStyles}
  }
  h3 {
    padding-bottom: 0.75em;
    font-size: ${fontSizes.body};
    margin-top: 1.65em;
  }
  a {
    display: inline-block;
    ${getBodyFontStyles}
  }
`;

const ContactSection = () => {
  const titleRef = useRef(null);
  const emailRef = useRef(null);
  return (
    <ContactSectionStyles>
      <AnimationWrapper ref={titleRef} offset={0.8}>
        <h2 ref={titleRef}>Let's work together!</h2>
      </AnimationWrapper>
      <AnimationWrapper ref={titleRef} offset={0.8} delay={0.15}>
        <h3>Email address</h3>
      </AnimationWrapper>
      <AnimationWrapper ref={titleRef} offset={0.8} delay={0.3}>
        <LinkStyles
          ref={emailRef}
          href="mailto: mail@jamestbyrne.com"
          withUnderline
        >
          mail@jamestbyrne.com
        </LinkStyles>
      </AnimationWrapper>
    </ContactSectionStyles>
  );
};

export default ContactSection;
