import React from "react";
import styled from "@emotion/styled";
import { jsx } from "@emotion/core";
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
    margin-bottom: 0;
  }
  a {
    text-decoration: none;
    position: relative;
    display: inline-block;
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

const IntroTextWrapper = styled.div`
  margin: 2.5em 0 1em;
`;

const HeroSection = ({ headlineText, introText }: Props) => (
  <HeroSectionStyles>
    <HeroSectionTextStyles>
      <AnimationWrapper>
        <HeadlineStyles>
          {headlineText
            .split(" ")
            .slice(0, 4)
            .join(" ")}
        </HeadlineStyles>
      </AnimationWrapper>
      <AnimationWrapper>
        <HeadlineStyles>
          {headlineText
            .split(" ")
            .slice(4, 6)
            .join(" ")}
        </HeadlineStyles>
      </AnimationWrapper>
      <AnimationWrapper>
        <HeadlineStyles>
          {headlineText
            .split(" ")
            .slice(6)
            .join(" ")}
        </HeadlineStyles>
      </AnimationWrapper>
      <IntroTextWrapper>
        <AnimationWrapper>
          <p>
            {introText
              .split(" ")
              .slice(0, 9)
              .join(" ")}
          </p>
        </AnimationWrapper>
        <AnimationWrapper>
          <p>
            {introText
              .split(" ")
              .slice(9, 18)
              .join(" ")}
          </p>
        </AnimationWrapper>
        <AnimationWrapper>
          <p>
            {introText
              .split(" ")
              .slice(18, 29)
              .join(" ")}
          </p>
        </AnimationWrapper>
        <AnimationWrapper>
          <p>
            {introText
              .split(" ")
              .slice(29)
              .join(" ")}
          </p>
        </AnimationWrapper>
      </IntroTextWrapper>
      <p>
        <AnimationWrapper delay={1.5}>
          <LinkStyles href="mailto:mail@jamestbyrne.com" withUnderline>
            Get in touch
          </LinkStyles>
        </AnimationWrapper>
      </p>
    </HeroSectionTextStyles>
  </HeroSectionStyles>
);

export default HeroSection;
