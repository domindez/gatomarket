import React from 'react'
import Navbar from './Navbar'
import Logo from './Logo'
import '../sass/Header.scss'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='header'>
      <Link href='/'>
        <Logo />
      </Link>
      <Navbar />
    </header>
  )
}

export default Header
