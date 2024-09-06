import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.scss";

function Footer() {
  return (
    <footer>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>
    </footer>
  )
}

export default Footer