import React, { useState } from 'react'
import Image from './Image'
import Navbar from './Navbar'
import upwork from '../assets/images/upword.png'
import './Header.scss'

function Header() {
    const [menuExpanded, setmenuExpanded] = useState(false)

    const clickHandler = () => {
        setmenuExpanded(!menuExpanded)
    }
  return (
    <header>
        <Image src={upwork} alt="upword"/>
        <Navbar menuExpanded={menuExpanded}/>
        <button onClick={clickHandler}>clicke me</button>
    </header>
  )
}

export default Header