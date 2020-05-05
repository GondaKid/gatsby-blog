import React, { useState, useEffect } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const BackgroundSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(svg)/" }
          sourceInstanceName: { eq: "images" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  const Backgrounds = data.allFile.edges
  const [currBG, setCurrBG] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      var pos = (currBG + 1) % Backgrounds.length
      setCurrBG(pos)
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [currBG])

  return <Img fluid={Backgrounds[currBG].node.childImageSharp.fluid} />
}

export default BackgroundSection
