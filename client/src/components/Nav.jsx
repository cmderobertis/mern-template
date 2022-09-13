import React from "react"
import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <div>
      <h1>Product Manager, Dawg</h1>
      <NavLink
        to={"/products"}
        className={(isActive) =>
          isActive ? "btn btn-light me-3" : "btn btn-info me-3"
        }
      >
        Products
      </NavLink>
      <NavLink
        to={"/products/new"}
        className={(isActive) => (isActive ? "btn btn-light" : "btn btn-info")}
      >
        Create Product
      </NavLink>
    </div>
  )
}

export default Nav
