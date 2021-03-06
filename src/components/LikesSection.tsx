import React, { useRef } from "react";
import styled from "@emotion/styled";
import { colours, fonts, fontSizes } from "../styles/theme";
import { LinkStyles, getBodyFontStyles } from "./styles/sharedStyles";
import AnimationWrapper from "./AnimationWrapper";


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
  ${getBodyFontStyles}
  margin-top: 2em;
  li {
    display: flex;
    align-items: center;
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
    height: 26px;
    margin: 0 1em;
  }
`;

interface Like {
  name: string;
  img: string;
}

interface Props {
  title: string;
  likes: Like[];
}

const LikesSection = ({ title, likes }: Props) => {
  const titleRef = useRef(null);

  return (
    <LikesSectionStyles>
      <AnimationWrapper ref={titleRef} delay={0.45}>
        <h2>{title}</h2>
      </AnimationWrapper>
      <List>
        {likes.map(like => (
          <AnimationWrapper key={like.name} ref={titleRef} delay={0.6}>
            <li>
              {like.name}
              <img src={like.img} alt=""></img>
            </li>
          </AnimationWrapper>
        ))}
        {/* <AnimationWrapper ref={titleRef} delay={1.05}>
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
        </AnimationWrapper> */}
      </List>
    </LikesSectionStyles>
  );
};

export default LikesSection;
