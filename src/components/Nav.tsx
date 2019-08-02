import React from "react";
import styled from "@emotion/styled";
import { colours, fontSizes } from "../styles/theme";

const NavStyles = styled.nav`
  display: flex;
  color: ${colours.yellow};
`;

const Nav = () => <NavStyles>About</NavStyles>;

export default Nav;
