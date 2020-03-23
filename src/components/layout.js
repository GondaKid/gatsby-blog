import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./style/bootstrap.min.css"
import "./style/layout.scss"

import Navbar from "./Globals/Navbar"
import styled from "styled-components"

const Layout = ({ children }) => (
  <>
    <Navbar />
    <div className="wrapper">{children}</div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
