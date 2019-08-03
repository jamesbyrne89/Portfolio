import React from "react";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import SEO from "../components/Seo";

const IndexPage = () => (
  <Layout>
    <SEO
      title="James Byrne"
      description="A London-based front end web developer with a passion for crafting beautiful experiences on the web."
    />
    <HeroSection
      headlineText="Hello. I'm James, a frontend developer based in London."
      introText="Hiya. If you like what you see and think I could help you, feel free to drop me an email, or get in touch through social media."
    />
    <AboutSection />
    <Footer />
  </Layout>
);

export default IndexPage;
