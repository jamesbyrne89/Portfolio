import React from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
import ProfileSection from "../components/ProfileSection";
import LikesSection from "../components/LikesSection";
import ExperienceSection from "../components/ExperienceSection";
import SEO from "../components/Seo";
import { likes } from "../data/content";

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
          description
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="About" description={site.siteMetadata.description} />
      <Wrapper>
        <ProfileSection />
        <LikesSection title="Likes." likes={likes} />
        <ExperienceSection title="Experience." />
      </Wrapper>
    </Layout>
  );
};

export default AboutPage;
