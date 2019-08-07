import React from "react";
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

const AboutSectionStyles = styled.section`
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

const AboutSection = () => {
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
  return (
    <AboutSectionStyles>
      <Wrapper>
        <DetailsSectionStyles>
          <AnimationWrapper>
            <h2>Technologies I've used.</h2>
          </AnimationWrapper>
          <List>
            {technologiesUsed.map((tech, i) => (
              <li key={tech + i}>{tech}</li>
            ))}
          </List>
        </DetailsSectionStyles>
        <DetailsSectionStyles>
          <AnimationWrapper>
            <h2>What I'm currently learning.</h2>
          </AnimationWrapper>
          <List>
            {currentlyLearning.map((tech, i) => (
              <li key={tech + i}>{tech}</li>
            ))}
          </List>
        </DetailsSectionStyles>
      </Wrapper>
    </AboutSectionStyles>
  );
};

export default AboutSection;
