import React from "react";
import styled from "@emotion/styled";
import { colours, fonts, fontSizes } from "../styles/theme";

const ExperienceSectionStyles = styled.section`
  color: #fff;
  h2 {
    font-family: ${fonts.headingFont};
    font-size: ${fontSizes.headingSm};
    color: ${colours.yellow};
    padding-bottom: 1.75em;
    margin-top: 4em;
  }

  ul {
    font-family: ${fonts.bodyFont};
    font-size: ${fontSizes.body};
    list-style-type: none;
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
  return (
    <ExperienceSectionStyles>
      <Wrapper>
        <h2>{title}</h2>
        <ul>
          <li>
            <div>Huddle</div>
            <div>2018 — Present</div>
          </li>
          <li>
            <div>Warehouse</div>
            <div>2017 — 2018</div>
          </li>
          <li>
            <div>Sky</div>
            <div>2017</div>
          </li>
        </ul>
      </Wrapper>
    </ExperienceSectionStyles>
  );
};

export default ExperienceSection;
