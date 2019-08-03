import React from "react";
import styled from "@emotion/styled";
import { colours, fonts, fontSizes } from "../styles/theme";

interface Props {
  headlineText: string;
  introText: string;
}

const HeroSectionStyles = styled.section`
  background: ${colours.navy};
  height: 100vh;
  display: flex;
  align-items: center;
`;

const HeroSectionTextStyles = styled.article`
  margin-left: 10vw;
  max-width: 700px;
  p {
    font-family: ${fonts.bodyFont};
    font-size: ${fontSizes.body};
    color: #fff;
    line-height: 1.25;
  }
`;

const HeadlineStyles = styled.h1`
  color: ${colours.yellow};
  font-family: ${fonts.headingFont};
  font-size: ${fontSizes.headingLg};
  line-height: 1.1;
`;

const HeroSection = ({ headlineText, introText }: Props) => (
  <HeroSectionStyles>
    <HeroSectionTextStyles>
      <HeadlineStyles className="intro-text">{headlineText}</HeadlineStyles>
      <div className="mouse">
        <div className="scroll"></div>
      </div>
      <p>{introText}</p>
    </HeroSectionTextStyles>
  </HeroSectionStyles>
);

export default HeroSection;
