import React from 'react'
import Image from 'next/image'
import logo from '../img/logo.svg'
import { odibeeSans } from '@/resources/fonts'

const Logo = () => {
  return (
    <div className='logo'>
      <Image src={logo} width={50} height={50} alt='logo-mundo-gato' />
      <span className={odibeeSans.className}>GatoMundo</span>
    </div>
  )
}

export default Logo
