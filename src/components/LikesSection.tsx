import React from "react";
import styled from "@emotion/styled";
import { colours, fonts, fontSizes } from "../styles/theme";
import { LinkStyles } from "./styles/sharedStyles";
import AnimationWrapper from "./AnimationWrapper";
import cyclistImg from "../images/cyclist.png";
import runnerImg from "../images/runner.png";
import cameraImg from "../images/camera.png";
import coderImg from "../images/coder.png";

const LikesSectionStyles = styled.section`
  background: ${colours.navy};
  font-family: ${fonts.bodyFont};
  font-size: ${fontSizes.body};
  color: #fff;
  margin-top: 4em;
  h2 {
    font-family: ${fonts.headingFont};
    font-size: ${fontSizes.headingSm};
    color: ${colours.yellow};
  }
`;

const List = styled.ul`
  max-width: 750px;
  font-size: ${fontSizes.body};
  margin-top: 2em;
  li {
    display: flex;
    margin-right: 1.5em;
    line-height: 2;
  }

  span {
    display: flex;
    flex-direction: column;
  }

  a {
    position: relative;
    margin: 0 auto 0 0.5em;
    &::before {
      content: "*";
      position: absolute;
      left: -0.55em;
    }
    &::after {
      content: "";
      width: 100%;
      height: 2px;
      background: currentColor;
      position: absolute;
      left: 0;
      bottom: 0;
      transform: translateY(0);
      transition: all 0.2s ease-out;
    }
    &:hover::after {
      opacity: 0;
      transform: translateY(4px);
    }
  }

  img {
    height: 32px;
    margin: 0 1em;
  }
`;

interface Props {
  title: string;
}

const LikesSection = ({ title }: Props) => {
  return (
    <LikesSectionStyles>
      <AnimationWrapper delay={0.3}>
        <h2>{title}</h2>
      </AnimationWrapper>
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
        <li>
          <span>
            Hacking on side projects*
            <LinkStyles href="https://github.com/jamesbyrne89" withUnderline>
              See them on Github
            </LinkStyles>
          </span>
          <img src={coderImg} />
        </li>
      </List>
    </LikesSectionStyles>
  );
};

export default LikesSection;
