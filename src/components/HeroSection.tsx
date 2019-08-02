import React from "react"
import styled from "@emotion/styled"
import { colours, fonts, fontSizes } from "../styles/theme"

interface Props {
  text: string
}

const HeroSectionStyles = styled.section`
  background: ${colours.navy};
  height: 100vh;
  display: flex;
  align-items: center;
`

const HeroSectionTextStyles = styled.article`
  width: 80vw;
  margin: auto;
`

const HeadlineStyles = styled.h1`
  color: ${colours.yellow};
  max-width: 700px;
  font-family: ${fonts.headingFont};
  font-size: ${fontSizes.headingLg};
`

const HeroSection = ({ text }: Props) => (
  <HeroSectionStyles>
    <HeroSectionTextStyles>
      <HeadlineStyles className="intro-text">{text}</HeadlineStyles>
      <div className="mouse">
        <div className="scroll"></div>
      </div>
    </HeroSectionTextStyles>
  </HeroSectionStyles>
)

export default HeroSection
