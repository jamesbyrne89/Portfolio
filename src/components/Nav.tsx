import React from "react";
import styled from "@emotion/styled";
import { colours, fonts, fontSizes } from "../styles/theme";

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
  a {
    display: block;
    color: inherit;
    text-decoration: none;
    padding-bottom: 0.5em;
    position: relative;
    transition: all 0.3s ease-out;
    &::after {
      content: "";
      width: 100%;
      height: 2px;
      background: currentColor;
      position: absolute;
      left: 0;
      bottom: 2px;
      transform: translateY(0);
      transition: all 0.2s ease-out;
      opacity: 0;
    }
    &:hover::after {
      transform: translateY(-4px);
      opacity: 1;
    }
  }
`;

const Nav = () => (
  <NavStyles>
    <ul>
      <li>about</li>
      <li>
        <a href="mailto:mail@jamestbyrne.com">contact</a>
      </li>
    </ul>
  </NavStyles>
);

export default Nav;
