import React from 'react'
import '../sass/Footer.scss'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../img/logo.svg'

const Footer = () => {
  const links = [
    { label: 'Inicio', url: '/' },
    { label: 'Pienso', url: '/pienso' },
    { label: 'Comida Húmeda', url: '/comida-humeda' },
    { label: 'Blog', url: '/blog' }
  ]
  return (
    <footer>
      <div className='footer__main'>
        <div>
          <Image src={logo} width={50} height={50} alt='logo-mundo-gato' />
          <ul>
            <Link href='/privacidad'><li>Privacidad</li></Link>
            <Link href='/legal'><li>Legal</li></Link>
          </ul>
        </div>
        <nav>
          <ul>
            {links.map(({ label, url }) => <Link key={url} href={url}><li>{label}</li></Link>)}
          </ul>
        </nav>
      </div>
      <div className='bottom-bar'>
        <p>2023 · Web by  <Link href='https://trivify.es/'>Trivify.es</Link></p>
      </div>
    </footer>
  )
}

export default Footer
