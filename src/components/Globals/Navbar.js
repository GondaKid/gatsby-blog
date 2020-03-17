import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import logo_sm from "../../images/logo-sm.svg"

export default class Navbar extends Component {
  state = {
    links: [
      {
        id: 1,
        path: "/",
        text: "About us",
      },
      {
        id: 2,
        path: "/Work",
        text: "Work",
      },
      {
        id: 3,
        path: "/Blog",
        text: "Blog",
      },
      {
        id: 4,
        path: "/Photography",
        text: "Photography",
      },
      {
        id: 5,
        path: "/Contact",
        text: "Contact",
      },
    ],
  }

  render() {
    return (
      <section className="header-container py-4 pt-md-5">
        <div className="container">
          <div className="container mb-md-3 mb-2">
            <div className="row">
              <div className="col-8 col-md-4 mx-auto d-flex justify-content-center">
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
              </div>
            </div>
          </div>

          <div className="container py-md-4 py-3 px-0">
            <ul className="nav d-flex flex-nowrap justify-content-around justify-content-md-center">
              {this.state.links.map(link => {
                return (
                  <li key={link.id} className="nav-item mx-md-5">
                    <Link
                      to={link.path}
                      className="nav-link nav-text text-uppercase"
                    >
                      {link.text}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>
    )
  }
}
