import React from "react";
import styled from "@emotion/styled";
import { colours, fonts, fontSizes } from "../styles/theme";
import { LinkStyles, GatsbyLinkStyles } from "./styles/sharedStyles";

const NavStyles = styled.nav`
  display: flex;
  font-family: ${fonts.bodyFont};
  font-size: ${fontSizes.body};

  ul {
    display: flex;
    color: ${colours.yellow};
  }

  li {
    list-style: none;
    margin-left: 2em;
  }
`;

const Nav = () => (
  <NavStyles>
    <ul>
      <li>
        <GatsbyLinkStyles to="/about">about</GatsbyLinkStyles>
      </li>
      <li>
        <LinkStyles href="mailto:mail@jamestbyrne.com">contact</LinkStyles>
      </li>
    </ul>
  </NavStyles>
);

export default Nav;
