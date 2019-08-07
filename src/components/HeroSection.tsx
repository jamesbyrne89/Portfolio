import React from "react";
import styled from "@emotion/styled";
import { colours, fonts, fontSizes } from "../styles/theme";
import {
  LinkStyles,
  getBodyFontStyles,
} from "../components/styles/sharedStyles";
import AnimationWrapper from "../components/AnimationWrapper";

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
    margin-top: 2rem;
  }
  a {
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
    }
    &:hover::after {
      opacity: 0;
      transform: translateY(4px);
    }
  }
`;

const HeadlineStyles = styled.h1`
  color: ${colours.yellow};
  font-family: ${fonts.headingFont};
  font-size: ${fontSizes.headingLg};
  line-height: 1.1;
  margin: 0;
`;

const HeroSection = ({ headlineText, introText }: Props) => (
  <HeroSectionStyles>
    <HeroSectionTextStyles>
      <AnimationWrapper>
        <HeadlineStyles>{headlineText}</HeadlineStyles>
      </AnimationWrapper>
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
