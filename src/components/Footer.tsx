import React from "react";
import styled from "@emotion/styled";
import { colours, fonts, fontSizes } from "../styles/theme";

const FooterStyles = styled.footer`
  font-family: ${fonts.bodyFont};
  padding: 1em 10vw;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: #fff;
  a {
    position: relative;
    text-decoration: none;
    &::after {
      content: "";
      width: 100%;
      height: 2px;
      background: currentColor;
      position: absolute;
      left: 0;
      bottom: -8px;
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

const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => (
  <FooterStyles>
    <small>
      Built with <a href="https://www.gatsbyjs.org">Gatsby</a>. &#169; James
      Byrne {CURRENT_YEAR}
    </small>
  </FooterStyles>
);

export default Footer;
