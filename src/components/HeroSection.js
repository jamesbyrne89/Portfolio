import { Link } from "gatsby"
import React from "react"

const HeroSection = ({ text }) => (
  <section className="intro-section section">
    <h1 className="intro-text">{text}</h1>
    <div className="mouse">
      <div className="scroll"></div>
    </div>
  </section>
)

export default HeroSection
