import React from 'react'
import '../sass/globals.scss'
import Header from '@/components/Header'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { sairaCondensed } from '@/resources/fonts'
import Footer from '@/components/Footer'
config.autoAddCss = false

export const metadata = {
  title: 'GatoMundo.com',
  description: 'Bienvenido al mundo de los gatos.'
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className={sairaCondensed.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
