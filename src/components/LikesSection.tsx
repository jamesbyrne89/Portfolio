import React from "react";
import styled from "@emotion/styled";
import { colours, fonts, fontSizes } from "../styles/theme";

const LikesSectionStyles = styled.section`
  background: ${colours.navy};
  padding: 8em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-family: ${fonts.headingFont};
    font-size: ${fontSizes.headingSm};
    padding-bottom: 1.75em;
  }
`;

const Wrapper = styled.div`
  width: 80vw;
  margin: auto;
  display: grid;
  grid-gap: 4em;
  grid-template-columns: 1fr 1fr;
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
        <h2>Likes</h2>
      </Wrapper>
    </LikesSectionStyles>
  );
};

export default LikesSection;
