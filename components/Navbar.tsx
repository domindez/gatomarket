import Link from 'next/link'
import React from 'react'
import '../sass/Navbar.scss'

const Navbar = () => {
  const links = [
    { label: 'Inicio', url: '/' },
    { label: 'Pienso', url: '/pienso' },
    { label: 'Comida Húmeda', url: '/comida-humeda' }
  ]
  return (
    <nav className='navbar'>
      <ul>
        {links.map(({ label, url }) => (
          <Link
            key={url}
            className='link'
            href={url}
          >
            <li>
              {label}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
