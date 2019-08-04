import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import { colours, fonts, fontSizes } from "../styles/theme";

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
  `and more!`,
];

const currentlyLearning = [`NodeJS`, `VueJS`, `Emotion`];

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
    padding-bottom: 1.75em;
  }
`;

const List = styled.ul`
  max-width: 750px;
  font-size: ${fontSizes.body};

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
          <h2>Technologies I've used.</h2>
          <List>
            {technologiesUsed.map(tech => (
              <li>{tech}</li>
            ))}
          </List>
        </DetailsSectionStyles>
        <DetailsSectionStyles>
          <h2>What I'm currently learning.</h2>
          <List>
            {currentlyLearning.map(tech => (
              <li>{tech}</li>
            ))}
          </List>
        </DetailsSectionStyles>
      </Wrapper>
    </AboutSectionStyles>
  );
};

export default AboutSection;
