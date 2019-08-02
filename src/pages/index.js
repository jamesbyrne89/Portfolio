import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import HeroSection from "../components/HeroSection"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection text="Hello. I'm James, a frontend developer based in London." />
  </Layout>
)

export default IndexPage
