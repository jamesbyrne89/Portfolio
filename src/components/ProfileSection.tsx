import React from "react";
import styled from "@emotion/styled";
import AnimationWrapper from "./AnimationWrapper";
import { colours, fonts, fontSizes } from "../styles/theme";

const ProfileSectionStyles = styled.section`
  background: ${colours.navy};
  font-family: ${fonts.bodyFont};
  font-size: ${fontSizes.body};
  color: #fff;
  p {
    max-width: 750px;
    line-height: 1.5;
    margin-bottom: 0;
  }
`;

const ProfileSection = () => {
  return (
    <ProfileSectionStyles>
      <AnimationWrapper>
        <p>
          I'm a self-taught frontend developer with two years experience. I
          originally wanted
        </p>
      </AnimationWrapper>
      <AnimationWrapper delay={0.1}>
        <p>
          to be a journalist and studied English and Journalism at university.
          After graduating
        </p>
      </AnimationWrapper>
      <AnimationWrapper delay={0.2}>
        <p>
          I worked in public relations for four years before taking the plunge
          and retraining
        </p>
      </AnimationWrapper>
      <AnimationWrapper delay={0.3}>
        <p>as a software developer.</p>
      </AnimationWrapper>
    </ProfileSectionStyles>
  );
};

export default ProfileSection;
