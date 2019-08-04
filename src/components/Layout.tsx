/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./Header";
import Footer from "./Footer";
import GlobalStyles from "./styles/Global";
import { colours } from "../styles/theme";

interface Props {
  children: React.ReactNode;
}

const MainStyles = styled.main`
  min-height: calc(100vh - 200px);
  background: ${colours.navy};
`;

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyles />
      <Header />
      <MainStyles>{children}</MainStyles>
      <Footer />
    </>
  );
};

export default Layout;
