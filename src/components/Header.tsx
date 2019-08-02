import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

interface Props {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => <header style={{}}></header>

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
