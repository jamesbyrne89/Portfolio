import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import AnimationWrapper from "./AnimationWrapper";
import { colours, fonts, fontSizes } from "../styles/theme";
import { getBodyFontStyles } from "./styles/sharedStyles";

const ProfileSectionStyles = styled.section`
  background: ${colours.navy};
  ${getBodyFontStyles()}
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
        <motion.p
          animate={{
            transform: "0%",
          }}
          transition={{ ease: [0.6, 0, 0.2, 1], duration: 0.1 }}
        >
          I'm a self-taught frontend developer with four years of experience. I
          originally wanted
        </motion.p>
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
