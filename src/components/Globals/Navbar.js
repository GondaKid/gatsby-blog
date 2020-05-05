import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import logo_sm from "../../images/logo-sm.svg"

import { Box, Grid, List, ListItem } from "@chakra-ui/core"

import "../style/layout.scss"

export default class Navbar extends Component {
  state = {
    links: [
      {
        id: 1,
        path: "/",
        text: "STORIES",
      },
      {
        id: 2,
        path: "/Work",
        text: "ABOUT US",
      },
    ],
  }

  render() {
    return (
      <Grid templateColumns="repeat(3, 1fr)">
        <Box></Box>
        <Box w="100%" display="flex" justifyContent="center">
          <Link to="/" className="d-block">
            <picture>
              <source
                media="(min-width: 768px)"
                className="logo-img "
                srcSet={logo}
              />
              <img src={logo_sm} alt="logo-small" />
            </picture>
          </Link>
        </Box>
        <Box
          w="100%"
          display="flex"
          flexWrap="nowrap"
          justifyContent="center"
          alignItems="center"
        >
          <List styleType="none" display="flex">
            {this.state.links.map(link => {
              return (
                <ListItem key={link.id} mx={2}>
                  <Link
                    to={link.path}
                    className="nav-link nav-text text-uppercase"
                  >
                    {link.text}
                  </Link>
                </ListItem>
              )
            })}
          </List>
        </Box>
      </Grid>
    )
  }
}
