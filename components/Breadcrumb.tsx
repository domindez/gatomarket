'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import '../sass/Breadcrumb.scss'

const Breadcrumb = () => {
  const path = usePathname()
  const urlPath = path.split('/').filter(x => x)

  return (
    <nav className='breadcrumb'>
      <ul>
        <li><Link href='/'>Inicio</Link></li>
        {urlPath.map((pathPart, i) => {
          const href = '/' + urlPath.slice(0, i + 1).join('/')
          return (
            <li key={href}><span>\</span>
              <Link href={href}>
                {pathPart}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Breadcrumb
