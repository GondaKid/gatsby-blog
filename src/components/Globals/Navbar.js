import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    collapse: "collapse navbar-collapse",
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
        id: 2,
        path: "/Collection",
        text: "Collection",
      },
    ],
  }

  navbarHandler = () => {
    console.log("Hello")
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={this.state.collapse}>
          <ul className="navbar-nav mx-auto">
            {this.state.links.map(link => {
              return (
                <li key={link.id} className="nav-item">
                  <Link to={link.path} className="nav-link text-capitalize">
                    {link.text}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    )
  }
}
