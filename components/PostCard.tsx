import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props{
title: string,
extract: string,
author: string,
slug: string
}

const PostCard = ({ title, extract, author, slug } : Props) => {
  const postImage = require(`../img/${slug}.jpg`)
  return (
    <Link href={`blog/${slug}`}>
      <div className='post-card'>
        <Image src={postImage} alt={title} width={200} height={150} />
        <div>
          <h2>{title}</h2>
          <p>{extract}</p>
          <div>{author}</div>
        </div>
      </div>
    </Link>
  )
}

export default PostCard
