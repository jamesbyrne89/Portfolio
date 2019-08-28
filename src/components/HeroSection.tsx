import React from "react";
import styled from "@emotion/styled";
import { colours, fonts, fontSizes } from "../styles/theme";
import {
  LinkStyles,
  getBodyFontStyles,
  Line,
  sectionPadding,
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
  ${sectionPadding}
  @media (max-width: 475px) {
    height: calc(100vh - 70px);
  }
`;

const HeroSectionTextStyles = styled.article`
  margin-left: 10vw;
  max-width: 700px;
  @media (max-width: 475px) {
    margin-left: 0;
  }
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
  @media (max-width: 768px) {
    font-size: 2.75rem;
  }
  @media (max-width: 550px) {
    font-size: 2.25rem;
  }
  @media (max-width: 400px) {
    font-size: 2rem;
  }
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
        <Line>
          <AnimationWrapper>
            <p>
              {introText
                .split(" ")
                .slice(0, 4)
                .join(" ")
                .concat(String.fromCharCode(160))}
            </p>
          </AnimationWrapper>
          <AnimationWrapper>
            <p>
              {introText
                .split(" ")
                .slice(4, 9)
                .join(" ")}
            </p>
          </AnimationWrapper>
        </Line>
        <Line>
          <AnimationWrapper>
            <p>
              {introText
                .split(" ")
                .slice(9, 14)
                .join(" ")
                .concat(String.fromCharCode(160))}
            </p>
          </AnimationWrapper>
          <AnimationWrapper>
            <p>
              {introText
                .split(" ")
                .slice(14, 18)
                .join(" ")}
            </p>
          </AnimationWrapper>
        </Line>
        <Line>
          <AnimationWrapper>
            <p>
              {introText
                .split(" ")
                .slice(18, 24)
                .join(" ")
                .concat(String.fromCharCode(160))}
            </p>
          </AnimationWrapper>
          <AnimationWrapper>
            <p>
              {introText
                .split(" ")
                .slice(24, 29)
                .join(" ")}
            </p>
          </AnimationWrapper>
        </Line>
        <Line>
          <AnimationWrapper>
            <p>
              {introText
                .split(" ")
                .slice(29, 35)
                .join(" ")
                .concat(String.fromCharCode(160))}
            </p>
          </AnimationWrapper>
          <AnimationWrapper>
            <p>
              {introText
                .split(" ")
                .slice(35)
                .join(" ")}
            </p>
          </AnimationWrapper>
        </Line>
      </IntroTextWrapper>
      <p>
        <AnimationWrapper>
          <LinkStyles href="mailto:mail@jamestbyrne.com" withUnderline>
            Get in touch
          </LinkStyles>
        </AnimationWrapper>
      </p>
    </HeroSectionTextStyles>
  </HeroSectionStyles>
);

export default HeroSection;
