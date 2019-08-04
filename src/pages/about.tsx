import React from "react";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SEO from "../components/Seo";

const AboutPage = () => (
  <Layout>
    <SEO
      title="About | James Byrne"
      description="A London-based front end web developer with a passion for crafting beautiful experiences on the web."
    />
    <HeroSection
      headlineText="Hello. I'm James, a frontend developer based in London."
      introText="I love crafting beautiful, functional experiences on the web, with accessibility and security top of mind. My toolbox includes a range of technologies across HTML, CSS and Javascript, but the user always comes first."
    />
  </Layout>
);

export default AboutPage;
