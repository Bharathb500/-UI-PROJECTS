import React from 'react'
import { Link } from 'react-router-dom'

function Links({href, text}) {
  return (
    <Link to={href}>{text}</Link>
  )
}

export default Links