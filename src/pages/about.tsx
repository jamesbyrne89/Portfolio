import React from "react";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import LikesSection from "../components/LikesSection";
import ExperienceSection from "../components/ExperienceSection";
import SEO from "../components/Seo";

const Wrapper = styled.div`
  width: 80vw;
  margin: auto;
  padding: 8em 0;
`;

const AboutPage = () => (
  <Layout>
    <SEO
      title="About | James Byrne"
      description="A London-based front end web developer with a passion for crafting beautiful experiences on the web."
    />
    <Wrapper>
      <LikesSection title="Likes." />
      <ExperienceSection title="Experience." />
    </Wrapper>
  </Layout>
);

export default AboutPage;
