import React from 'react'
import '../sass/globals.scss'
import Header from '@/components/Header'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { sairaCondensed } from '@/resources/fonts'
import Footer from '@/components/Footer'
import Script from 'next/script'
config.autoAddCss = false

export const metadata = {
  title: 'GatoMundo.com',
  description: 'Bienvenido al mundo de los gatos.'
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Script
        id='gtag-base'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KDFWVBD');
          `
        }}
      />
      <html className={sairaCondensed.className}>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>
  )
}

export default RootLayout
