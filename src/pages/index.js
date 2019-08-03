import React from "react";
import Layout from "../components/layout";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="James Byrne" />
    <HeroSection
      headlineText="Hello. I'm James, a frontend developer based in London."
      introText="Hiya. If you like what you see and think I could help you, feel free to drop me an email, or get in touch through social media."
    />
    <AboutSection />
  </Layout>
);

export default IndexPage;
