import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import ContactSection from "../components/ContactSection";
import SEO from "../components/Seo";
import { skills } from "../data/content";

const IndexPage = () => {
  const { site } = useStaticQuery(graphql`
    query HomepageDataQuery {
      site {
        siteMetadata {
          description
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
      <SEO title="James Byrne" description={site.siteMetadata.description}/>
      <HeroSection
        headlineText={site.siteMetadata.introSection.headline}
        introText={site.siteMetadata.introSection.blurb}
      />
      <SkillsSection technologies={skills.technologies} />
      <ContactSection />
    </Layout>
  );
};

export default IndexPage;
