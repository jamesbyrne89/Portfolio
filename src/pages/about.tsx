import React from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
import ProfileSection from "../components/ProfileSection";
import LikesSection from "../components/LikesSection";
import ExperienceSection from "../components/ExperienceSection";
import SEO from "../components/Seo";

const Wrapper = styled.div`
  width: 80vw;
  margin: auto;
  padding: 8em 0;
`;

const AboutPage = () => {
  const { site } = useStaticQuery(graphql`
    query AboutPageDataQuery {
      site {
        siteMetadata {
          likes {
            name
            img
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="About" />
      <Wrapper>
        <ProfileSection />
        <LikesSection title="Likes." likes={site.siteMetadata.likes} />
        <ExperienceSection title="Experience." />
      </Wrapper>
    </Layout>
  );
};

export default AboutPage;
