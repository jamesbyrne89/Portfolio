import React from "react";
import styled from "@emotion/styled";
import { colours, fonts, fontSizes } from "../styles/theme";
import cyclistImg from "../images/cyclist.png";
import runnerImg from "../images/runner.png";
import cameraImg from "../images/camera.png";

const LikesSectionStyles = styled.section`
  background: ${colours.navy};
  font-family: ${fonts.bodyFont};
  font-size: ${fontSizes.body};
  color: #fff;
  h2 {
    font-family: ${fonts.headingFont};
    font-size: ${fontSizes.headingSm};
    color: ${colours.yellow};
    padding-bottom: 1.75em;
    margin-top: 4em;
  }

  p {
  }
`;

const List = styled.ul`
  max-width: 750px;
  font-size: ${fontSizes.body};

  li {
    display: flex;
    margin-right: 1.5em;
    line-height: 2;
  }

  img {
    height: 32px;
    margin: 0 1em;
  }
`;

const LikesSection = () => {
  return (
    <LikesSectionStyles>
      <p>Background about me, how I'm self-taught, used to work in PR, etc.</p>
      <h2>Likes</h2>
      <List>
        <li>
          Cycling
          <img src={cyclistImg} />
        </li>
        <li>
          Running
          <img src={runnerImg} />
        </li>
        <li>
          Photography
          <img src={cameraImg} />
        </li>
      </List>
    </LikesSectionStyles>
  );
};

export default LikesSection;
