import React from "react";
import styled from "@emotion/styled";
import { colours, fonts, fontSizes } from "../styles/theme";
import {
  LinkStyles,
  getBodyFontStyles,
} from "../components/styles/sharedStyles";

interface Props {
  headlineText: string;
  introText: string;
}

const HeroSectionStyles = styled.section`
  background: ${colours.navy};
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
`;

const HeroSectionTextStyles = styled.article`
  margin-left: 10vw;
  max-width: 700px;
  p {
    ${getBodyFontStyles}
    color: #fff;
    line-height: 1.5;
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
      <p>{introText}</p>
      <p>
        <LinkStyles href="mailto:mail@jamestbyrne.com" withUnderline>
          Get in touch
        </LinkStyles>
      </p>
    </HeroSectionTextStyles>
  </HeroSectionStyles>
);

export default HeroSection;
