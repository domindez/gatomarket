import React from 'react'
import '../sass/Blog-main-page.scss'
import Link from 'next/link'

interface Props {
page : number
category : string | null
}

const Pagination = ({ page, category }: Props) => {
  return (
    <div className='pagination'>
      <Link
        href={category
          ? `blog/${category}?page=${page + 1}`
          : `blog?page=${page + 1}`}
      >
        <span>
          Siguiente
        </span>
      </Link>
    </div>
  )
}

export default Pagination
