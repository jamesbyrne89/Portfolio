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
    @media (max-width: 768px) {
      font-size: 1.125rem;
    }
    @media (max-width: 400px) {
      font-size: 1rem;
    }
    `;
}

export function getHeadingFontStyles(): string {
  return `
    font-family: ${fonts.headingFont};
    font-size: ${fontSizes.headingMd};
    @media (max-width: 768px) {
      font-size: 2rem;
    }
    @media (max-width: 400px) {
      font-size: 1rem;
    }
    `;
}

export const Line = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Wrapper = styled.div`
  width: 80vw;
  margin: auto;
`;

export const sectionPadding = () => {
  return `
    padding: 0 10vw;
    @media (max-width: 475px) {
      padding: 0 1.25rem;
    }
  `;
};

export const GatsbyLinkStyles = LinkStyles.withComponent(Link);
