import React from 'react'
import Image from 'next/image'
import logo from '../img/logo.svg'

const Logo = () => {
  return (
    <div className='logo'>
      <Image src={logo} width={50} height={50} alt='logo-mundo-gato' />
      <span>MundoGato</span>
    </div>
  )
}

export default Logo
