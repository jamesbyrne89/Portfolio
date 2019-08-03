import React from "react";
import styled from "@emotion/styled";
import { colours, fonts, fontSizes } from "../styles/theme";

interface Props {
  //   headlineText: string;
  //   introText: string;
}

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
  grid-gap: 8em;
  /* grid-template-columns: 1fr 1fr; */
`;

const DetailsSectionStyles = styled.div`
  font-family: ${fonts.bodyFont};
  display: grid;
  grid-template-columns: minmax(750px, 1fr) 2fr;
  h2 {
    font-family: ${fonts.headingFont};
    font-size: ${fontSizes.headingSm};
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    max-height: 250px;
    max-width: 750px;
    font-size: ${fontSizes.body};
  }

  li {
    margin-right: 1.5em;
    line-height: 2.25;
    &::after {
      content: "\u2022";
      position: relative;
      font-size: 1rem;
      top: 0;
      right: -1em;
    }
    &:nth-child(5)::after,
    &:last-of-type::after {
      display: none;
    }
  }
`;

const AboutSection = () => (
  <AboutSectionStyles>
    <Wrapper>
      <DetailsSectionStyles>
        <h2>Technologies I've used</h2>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>VueJS</li>
          <li>Storybook</li>
          <li>Typescript</li>
          <li>Styled Components</li>
          <li>Express</li>
          <li>Jest</li>
          <li>Knockout</li>
          <li>NextJS</li>
        </ul>
      </DetailsSectionStyles>
      <DetailsSectionStyles>
        <h2>Currently Learning</h2>
        <ul>
          <li>NodeJS</li>
          <li>VueJS</li>
          <li>Emotion</li>
        </ul>
      </DetailsSectionStyles>
    </Wrapper>
  </AboutSectionStyles>
);

export default AboutSection;
