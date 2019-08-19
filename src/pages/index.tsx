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
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO
        title="James Byrne"
        description="A London-based front end web developer with a passion for crafting beautiful experiences on the web."
      />
      <HeroSection
        headlineText={site.siteMetadata.introSection.headline}
        introText={site.siteMetadata.introSection.blurb}
      />
      <SkillsSection />
      <ContactSection />
    </Layout>
  );
};

export default IndexPage;
