import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import AboutUs from "../components/Globals/About"
import Background from "../components/Globals/BackgroundSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Background />
  </Layout>
)

export default IndexPage
