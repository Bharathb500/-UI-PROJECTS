import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.scss";

function Footer() {
  return (
    <footer>
        <ul>
          <li>
            <Link to="/-UI-PROJECTS">Home</Link>
          </li>
          <li>
            <Link to="/-UI-PROJECTS/about">About</Link>
          </li>
          <li>
            <Link to="/-UI-PROJECTS/contact">Contact</Link>
          </li>
          <li>
            <Link to="/-UI-PROJECTS/services">Services</Link>
          </li>
        </ul>
    </footer>
  )
}

export default Footer