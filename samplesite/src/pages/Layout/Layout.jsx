import React from 'react'
import "./Layout.scss"

function Layout({children}) {
  return (
    <main className='layout'>{children}</main>
  )
}

export default Layout