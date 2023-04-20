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
        {urlPath.map((pathPart, i) => {
          let displayPathPart = pathPart
          if (i === 1) { // solo para el segundo pathPart
            const words = pathPart.split('-')
            displayPathPart = words[0]
          }
          const href = '/' + urlPath.slice(0, i + 1).join('/')
          return (
            <li key={href}><span>\</span>
              <Link href={href}>
                {displayPathPart}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Breadcrumb
