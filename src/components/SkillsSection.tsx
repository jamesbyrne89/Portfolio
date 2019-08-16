import React, { useCallback, useRef, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import { colours, fonts, fontSizes } from "../styles/theme";
import AnimationWrapper from "./AnimationWrapper";

const technologiesUsed = [
  `React`,
  `Redux`,
  `Vue.js`,
  `Storybook`,
  `Typescript`,
  `Styled Components`,
  `Express`,
  `MongoDB`,
  `Jest`,
  `Puppeteer`,
  `Knockout`,
  `Next.js`,
  `Webpack`,
  `and more!`,
];

const currentlyLearning = [`NodeJS`, `VueJS`, `GraphQL`];

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

const SkillsSection = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const techListRefs = technologiesUsed.map(item => useRef(null));
  const learningListRefs = currentlyLearning.map(item => useRef(null));

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
            {technologiesUsed.map((tech, i) => (
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
            {currentlyLearning.map((tech, i) => (
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
