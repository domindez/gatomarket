'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false)
  const [activeLink, setActiveLink] = useState('/')

  const links = [
    { label: 'Inicio', url: '/' },
    { label: 'Pienso', url: 'blog/pienso-para-gatos' },
    { label: 'Juguetes', url: 'blog/juguetes-para-gatos' },
    { label: 'Fuentes', url: 'blog/fuentes-para-gatos' },
    { label: 'Blog', url: '/blog' }
  ]

  return (
    <>
      <FontAwesomeIcon className='icon' onClick={() => setActiveMenu(!activeMenu)} icon={faBars} />
      <nav className={activeMenu ? 'navbar navbar-active' : 'navbar'}>
        <ul>
          {links.map(({ label, url }) => (
            <Link
              key={url}
              className={activeLink === url ? 'link link-active' : 'link'}
              href={url}
              onClick={() => { setActiveLink(url); setActiveMenu(false) }}
            >
              <li>
                {label}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
