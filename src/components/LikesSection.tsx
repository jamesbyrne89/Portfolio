import React from "react";
import styled from "@emotion/styled";
import { colours, fonts, fontSizes } from "../styles/theme";
import cyclistImg from "../images/cyclist.png";
import runnerImg from "../images/runner.png";
import cameraImg from "../images/camera.png";

const LikesSectionStyles = styled.section`
  background: ${colours.navy};
  padding: 8em 0;
  display: flex;
  justify-content: center;
  align-items: center;
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

  img {
    height: 48px;
  }
`;

const Wrapper = styled.div`
  width: 80vw;
  margin: auto;
`;

const List = styled.ul`
  max-width: 750px;
  font-size: ${fontSizes.body};

  li {
    margin-right: 1.5em;
    line-height: 1.5;
  }
`;

const LikesSection = () => {
  return (
    <LikesSectionStyles>
      <Wrapper>
        <p>
          Background about me, how I'm self-taught, used to work in PR, etc.
        </p>
        <h2>Likes</h2>
        <List>
          <li>
            <img src={cyclistImg} />
          </li>
          <li>
            <img src={runnerImg} />
          </li>
          <li>
            <img src={cameraImg} />
          </li>
        </List>
        <h2>Experience</h2>
        <List>
          <li>Huddle</li>
          <li>Warehouse</li>
          <li>Sky</li>
        </List>
      </Wrapper>
    </LikesSectionStyles>
  );
};

export default LikesSection;
