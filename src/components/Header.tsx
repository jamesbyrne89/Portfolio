import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";
import Nav from "./Nav";
import { colours, fontSizes } from "../styles/theme";

interface Props {
  siteTitle: string;
}

const HeaderStyles = styled.header`
  padding: 0 10vw;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background: ${colours.navy};
`;

const LogoStyles = styled.span`
  font-weight: bold;
  color: ${colours.yellow};
  font-size: ${fontSizes.body};
`;

const Header = ({ siteTitle }: Props) => (
  <HeaderStyles>
    <LogoStyles>JB.</LogoStyles>
    <Nav />
  </HeaderStyles>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
