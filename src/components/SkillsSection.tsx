import React, { useCallback, useRef, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import { colours, fonts, fontSizes } from "../styles/theme";
import AnimationWrapper from "./AnimationWrapper";

interface Props {
  technologies: {
    used: string[];
    learning: string[];
  };
}

const SkillsSectionStyles = styled.section`
  background: ${colours.grey};
  padding: 8em 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 80vw;
  margin: auto;
  display: grid;
  grid-gap: 4em;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 475px) {
    font-size: 2.5rem;
    grid-template-columns: 1fr;
    grid-gap: 2em;
  }
`;

const DetailsSectionStyles = styled.div`
  font-family: ${fonts.bodyFont};
  h2 {
    font-family: ${fonts.headingFont};
    font-size: ${fontSizes.headingSm};
  }
`;

const List = styled.ul`
  max-width: 750px;
  font-size: ${fontSizes.body};
  margin-top: 1.75em;

  li {
    margin-right: 1.5em;
    line-height: 1.5;
  }
`;

const SkillsSection = ({ technologies }: Props) => {
  const { used, learning } = technologies;

  const techListRefs = technologies.used.map(item => useRef(null));
  const learningListRefs = technologies.learning.map(item => useRef(null));

  const titleOne = useRef(null);
  const titleTwo = useRef(null);

  return (
    <SkillsSectionStyles>
      <Wrapper>
        <DetailsSectionStyles>
          <AnimationWrapper ref={titleOne} offset={0.8}>
            <h2 ref={titleOne}>Technologies I've used.</h2>
          </AnimationWrapper>
          <List>
            {technologies.used.map((tech, i) => (
              <AnimationWrapper
                key={tech + i}
                ref={techListRefs[0]}
                delay={0.3 + i / 10}
              >
                <li key={tech + i} ref={techListRefs[i]}>
                  {tech}
                </li>
              </AnimationWrapper>
            ))}
          </List>
        </DetailsSectionStyles>
        <DetailsSectionStyles>
          <AnimationWrapper ref={titleTwo} offset={0.8} delay={2}>
            <h2 ref={titleTwo}>What I'm currently learning.</h2>
          </AnimationWrapper>
          <List>
            {technologies.learning.map((tech, i) => (
              <AnimationWrapper
                key={tech + i}
                ref={learningListRefs[0]}
                delay={2.5 + i / 10}
              >
                <li key={tech + i} ref={learningListRefs[i]}>
                  {tech}
                </li>
              </AnimationWrapper>
            ))}
          </List>
        </DetailsSectionStyles>
      </Wrapper>
    </SkillsSectionStyles>
  );
};

export default SkillsSection;
