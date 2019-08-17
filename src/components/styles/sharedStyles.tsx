import styled from "@emotion/styled";
import { Link } from "gatsby";
import { colours, fonts, fontSizes } from "../../styles/theme";

export const LinkStyles = styled.a`
  position: relative;
  text-decoration: none;
  display: inline-block;
  &::after {
    content: "";
    width: 100%;
    height: 2px;
    background: currentColor;
    position: absolute;
    left: 0;
    bottom: ${({ withUnderline }) => (withUnderline ? `-0.1em` : `-0.2em`)};
    transform: translateY(0);
    transition: all 0.2s ease-out;
    opacity: ${({ withUnderline }) => (withUnderline ? 1 : 0)};
  }
  &:hover::after {
    transform: translateY(
      ${({ withUnderline }) => (withUnderline ? `0.1em` : `-0.1em`)}
    );
    opacity: ${({ withUnderline }) => (withUnderline ? 0 : 1)};
  }
`;

export function getBodyFontStyles(): string {
  return `
    font-family: ${fonts.bodyFont};
    font-size: ${fontSizes.body};
    `;
}

export const GatsbyLinkStyles = LinkStyles.withComponent(Link);
