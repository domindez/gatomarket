import React from 'react'
import '../sass/Blog-main-page.scss'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

interface Props {
page : number
category : string | null
left: boolean
right: boolean
}

const Pagination = ({ page, category, left, right }: Props) => {
  return (
    <div className='pagination'>
      <Link
        href={category
          ? `blog/${category}?page=${Number(page) - 1}`
          : `blog?page=${Number(page) - 1}`}
      >
        {left && <FontAwesomeIcon className='arrows' icon={faChevronLeft} />}
      </Link>
      <span className='n-page'>{page}</span>
      <Link
        href={category
          ? `blog/${category}?page=${Number(page) + 1}`
          : `blog?page=${Number(page) + 1}`}
      >
        {right && <FontAwesomeIcon className='arrows' icon={faChevronRight} />}
      </Link>
    </div>
  )
}

export default Pagination
