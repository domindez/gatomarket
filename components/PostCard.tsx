import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import '../sass/PostCard.scss'

interface Props{
  title: string
  extract: string
  author: string
  slug: string
  categories: Array<string>
  date: string
}

const PostCard = ({ title, extract, author, slug } : Props) => {
  const postImage = require(`@/public/img/${slug}.jpg`)

  return (
    <Link href={`blog/${slug}`}>
      <div className='post-card'>
        <Image src={postImage} alt={title} width={200} height={150} />
        <div className='text-card'>
          <h2>{title}</h2>
          <p>{extract}</p>
          <p className='read-more'>{'Leer mas >>'}</p>
        </div>
      </div>
    </Link>
  )
}

export default PostCard
