import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import Nav from "./Nav";
import { colours, fonts, fontSizes } from "../styles/theme";

const HeaderStyles = styled.header`
  padding: 0 10vw;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background: ${colours.navy};
`;

const LogoStyles = styled.span`
  font-family: ${fonts.headingFont};
  font-weight: bold;
  color: ${colours.yellow};
  font-size: ${fontSizes.body};
`;

const Header = () => (
  <HeaderStyles>
    <LogoStyles>
      <Link to="/">JB.</Link>
    </LogoStyles>
    <Nav />
  </HeaderStyles>
);

export default Header;
