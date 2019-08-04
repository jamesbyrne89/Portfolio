import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { colours, fonts, fontSizes } from "../styles/theme";

const ErrorPageStyles = styled.section`
  display: flex;
  align-items: center;
  height: calc(100vh - 200px);
`;

const ErrorPageTextStyles = styled.div`
  max-width: 750px;
  margin-left: 10vw;
  color: #fff;
  font-family: ${fonts.bodyFont};
  font-size: ${fontSizes.body};
  h1 {
    font-family: ${fonts.headingFont};
    font-size: ${fontSizes.headingLg};
    color: ${colours.yellow};
  }
  a {
    display: inline-block;
    position: relative;
    &::after {
      content: "";
      width: 100%;
      height: 2px;
      background: currentColor;
      position: absolute;
      left: 0;
      bottom: -4px;
      transform: translateY(0);
      transition: all 0.2s ease-out;
    }
    &:hover::after {
      opacity: 0;
      transform: translateY(4px);
    }
  }
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" description="" />
    <ErrorPageStyles>
      <ErrorPageTextStyles>
        <h1>Page Not Found.</h1>
        <p>Oh noes! You stumbled on a route that doesn&#39;t exist.</p>
        <Link to="/">Back to homepage</Link>
      </ErrorPageTextStyles>
    </ErrorPageStyles>
  </Layout>
);

export default NotFoundPage;
