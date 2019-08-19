import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import SEO from "../components/Seo";

const IndexPage = () => {
  const { site } = useStaticQuery(graphql`
    query HomepageDataQuery {
      site {
        siteMetadata {
          introSection {
            headline
            blurb
          }
          skills {
            technologies {
              used
              learning
            }
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="James Byrne" />
      <HeroSection
        headlineText={site.siteMetadata.introSection.headline}
        introText={site.siteMetadata.introSection.blurb}
      />
      <SkillsSection technologies={site.siteMetadata.skills.technologies} />
      <ContactSection />
    </Layout>
  );
};

export default IndexPage;
