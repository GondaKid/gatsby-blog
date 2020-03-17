import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import AboutUs from "../components/Globals/About"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AboutUs />
  </Layout>
)

export default IndexPage
