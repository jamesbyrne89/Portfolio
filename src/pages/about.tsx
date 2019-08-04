import React from "react";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import LikesSection from "../components/LikesSection";
import SEO from "../components/Seo";

const AboutPage = () => (
  <Layout>
    <SEO
      title="About | James Byrne"
      description="A London-based front end web developer with a passion for crafting beautiful experiences on the web."
    />
    <LikesSection />
  </Layout>
);

export default AboutPage;
