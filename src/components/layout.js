import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./style/bootstrap.min.css"
import "./style/layout.scss"
import { theme, ThemeProvider, CSSReset } from "@chakra-ui/core"

import Navbar from "./Globals/Navbar"

const Layout = ({ children }) => (
  <ThemeProvider>
    <CSSReset />
    <Navbar />
    <div className="wrapper">{children}</div>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
