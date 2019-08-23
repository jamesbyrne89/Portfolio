import React, { useRef } from "react";
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
  const titleRef = useRef(null);

  return (
    <LikesSectionStyles>
      <AnimationWrapper ref={titleRef} delay={0.45}>
        <h2>{title}</h2>
      </AnimationWrapper>
      <List>
        <AnimationWrapper ref={titleRef} delay={0.6}>
          <li>
            Cycling
            <img src={cyclistImg} />
          </li>
        </AnimationWrapper>
        <AnimationWrapper ref={titleRef} delay={0.75}>
          <li>
            Running
            <img src={runnerImg} />
          </li>
        </AnimationWrapper>
        <AnimationWrapper ref={titleRef} delay={0.9}>
          <li>
            Photography
            <img src={cameraImg} />
          </li>
        </AnimationWrapper>
        <AnimationWrapper ref={titleRef} delay={1.05}>
          <li>
            <span>
              Hacking on side projects*
              <AnimationWrapper ref={titleRef} delay={1.2}>
                <LinkStyles
                  href="https://github.com/jamesbyrne89"
                  withUnderline
                >
                  See them on Github
                </LinkStyles>
              </AnimationWrapper>
            </span>

            <img src={coderImg} />
          </li>
        </AnimationWrapper>
      </List>
    </LikesSectionStyles>
  );
};

export default LikesSection;
