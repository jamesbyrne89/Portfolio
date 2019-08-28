import React, { useRef } from "react";
import styled from "@emotion/styled";
import { colours, fonts, fontSizes } from "../styles/theme";
import AnimationWrapper from "./AnimationWrapper";
import { getBodyFontStyles } from "./styles/sharedStyles";

const ExperienceSectionStyles = styled.section`
  color: #fff;
  margin-top: 4em;

  h2 {
    font-family: ${fonts.headingFont};
    font-size: ${fontSizes.headingSm};
    color: ${colours.yellow};
  }

  ul {
    ${getBodyFontStyles}
    list-style-type: none;
    margin-top: 2em;
  }

  li {
    margin-top: 2em;
    line-height: 1.45;
    &:first-of-type {
      margin-top: 0;
    }
  }
`;

const Wrapper = styled.div`
  width: 80vw;
  margin: auto;
`;

interface Props {
  title: string;
}

const ExperienceSection = ({ title }: Props) => {
  const titleRef = useRef(null);
  return (
    <ExperienceSectionStyles>
      <Wrapper>
        <AnimationWrapper ref={titleRef}>
          <h2 ref={titleRef}>{title}</h2>
        </AnimationWrapper>
        <ul>
          <li>
            <AnimationWrapper ref={titleRef} delay={0.15}>
              <div>Huddle</div>
            </AnimationWrapper>
            <AnimationWrapper ref={titleRef} delay={0.3}>
              <div>2018 — Present</div>
            </AnimationWrapper>
          </li>
          <li>
            <AnimationWrapper ref={titleRef} delay={0.45}>
              <div>Warehouse</div>
            </AnimationWrapper>
            <AnimationWrapper ref={titleRef} delay={0.6}>
              <div>2017 — 2018</div>
            </AnimationWrapper>
          </li>
          <li>
            <AnimationWrapper ref={titleRef} delay={0.75}>
              <div>Sky</div>
            </AnimationWrapper>
            <AnimationWrapper ref={titleRef} delay={0.9}>
              <div>2017</div>
            </AnimationWrapper>
          </li>
        </ul>
      </Wrapper>
    </ExperienceSectionStyles>
  );
};

export default ExperienceSection;
