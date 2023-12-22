import React from 'react'
import { Link } from 'react-router-dom'

const SideComponent = () => {
  return (
    <div className="d-flex">
          <Link
            to="/Signup"
            className="nav-link text-white mx-2"
            style={{ textDecoration: "none" }}
          >
            Sign Up
          </Link>
          <Link
            href="/login"
            className="nav-link text-white mx-2"
            style={{ textDecoration: "none" }}
          >
            Login
          </Link>
          <Link
            href="/contact"
            className="nav-link text-white mx-2"
            style={{ textDecoration: "none" }}
          >
            Contact
          </Link>
        </div>
  )
}

export default SideComponent
