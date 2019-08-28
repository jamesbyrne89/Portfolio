import React from "react";
import styled from "@emotion/styled";
import { colours, fonts, fontSizes } from "../styles/theme";
import { LinkStyles, sectionPadding } from "./styles/sharedStyles";

const FooterStyles = styled.footer`
  font-family: ${fonts.bodyFont};
  ${sectionPadding}
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #fff;
  color: ${colours.black};

  small {
    display: block;
    padding: 1em 0;
  }

  ul {
    display: flex;
    margin-top: 0.375em;
    a {
      &::after {
        display: none;
      }
    }
  }

  li {
    width: auto;
    margin-right: 1em;
    font-size: ${fontSizes.body};
    &:last-of-type {
      margin-right: 0;
    }
  }

  span {
    visibility: hidden;
    position: absolute;
  }
`;

const SocialIconStyles = styled.svg`
  height: 1.25em;
  width: 1.25em;
  fill: ${colours.black};
`;

const CURRENT_YEAR = new Date().getFullYear();

interface SocialLinks {
  twitter: string;
  linkedin: string;
  github: string;
  medium: string;
}
interface Props {
  author: string;
  links: SocialLinks;
}

const Footer = ({ author, links }: Props) => (
  <FooterStyles>
    <small>
      Built with <LinkStyles href="https://www.gatsbyjs.org">Gatsby</LinkStyles>
      . {author} &#169; {CURRENT_YEAR}
    </small>
    <ul>
      <li>
        <a href={links.twitter}>
          <SocialIconStyles
            viewBox="0 0 16 16"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="1.414"
          >
            <title>Twitter icon</title>
            <path
              d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812
            0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143
            1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42
            1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04
            0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z"
              fillRule="nonzero"
            />
          </SocialIconStyles>
          <span>Twitter Icon</span>
        </a>
      </li>
      <li>
        <a href={links.linkedin}>
          <SocialIconStyles
            viewBox="0 0 16 16"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="1.414"
          >
            <title>LinkedIn icon</title>
            <path
              d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424
            1.96v3.778h-2.37V6H8.51v1.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762
            0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188
            8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516
            1.185-1.153V1.153C16 .516 15.467 0 14.815 0z"
              fillRule="nonzero"
            />
          </SocialIconStyles>
          <span>LinkedIn Icon</span>
        </a>
      </li>
      <li>
        <a href={links.github}>
          <SocialIconStyles
            aria-labelledby="title"
            viewBox="0 0 24 24"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="1.414"
          >
            <title>GitHub icon</title>
            <path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
            0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729
            1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93
            0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006
            2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805
            5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592
            24 12.297c0-6.627-5.373-12-12-12"
            />
          </SocialIconStyles>
          <span>Github Icon</span>
        </a>
      </li>
      <li>
        <a href={links.medium}>
          <SocialIconStyles viewBox="0 0 24 24" version="1.1">
            <title>Medium icon</title>
            <g id="Templates" stroke="none" strokeWidth="1">
              <g
                id="Home-Copy"
                transform="translate(-455.000000, -4247.000000)"
              >
                <g id="footer" transform="translate(30.000000, 3965.000000)">
                  <g id="icons" transform="translate(210.000000, 282.000000)">
                    <path
                      d="M217.987323,4.07995296 C218.018623,3.77070331 217.900692,3.46504442
            217.669773,3.25690769 L215.31755,0.423280423 L215.31755,0 L222.621202,0 L228.266537,12.3809523 L233.229728,0 L240.192308,0
            L240.192308,0.423280423 L238.181157,2.3515579 C238.007774,2.48372071 237.921767,2.70093965 237.957696,2.91593181
            L237.957696,17.0840683 C237.921767,17.2990604 238.007774,17.5162792 238.181157,17.6484421 L240.145263,19.5767196
            L240.145263,20 L230.265927,20 L230.265927,19.5767196 L232.3006,17.601411 C232.500539,17.4015285 232.500539,17.3427396
            232.500539,17.0370371 L232.500539,5.58495004 L226.843443,19.9529688 L226.07897,19.9529688 L219.492746,5.58495004
            L219.492746,15.2145796 C219.437832,15.6194363 219.572292,16.0270385 219.85734,16.3198119 L222.503591,19.5296885 L222.503591,19.9529688
            L215,19.9529688 L215,19.5296885 L217.646251,16.3198119 C217.929223,16.0265531 218.055843,15.6162471 217.987323,15.2145796
            L217.987323,4.07995296 Z"
                      id="Shape"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </SocialIconStyles>
          <span>Medium Icon</span>
        </a>
      </li>
    </ul>
  </FooterStyles>
);

export default Footer;
