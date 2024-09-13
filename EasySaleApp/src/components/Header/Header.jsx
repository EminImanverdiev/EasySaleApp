import React from 'react'
import HeaderTop from './HeaderTop/HeaderTop'
import HeaderBottom from './HeaderBottom/HeaderBottom'
import Navbar from './DesktopNavbar/Navbar'
import './style.css'

export default function Header() {
  return (
    <header id='header'>
      <HeaderTop/>
      <Navbar/>
      <HeaderBottom/>
    </header>
  )
}
