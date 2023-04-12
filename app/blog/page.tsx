import PostCard from '@/components/PostCard'
import { getAllFilesMetadata } from '@/lib/mdx'
import React from 'react'

interface Post {
title: string
extract: string
author: string
slug: string
}

const Blog = async () => {
  const posts = await getAllFilesMetadata()

  return (
    <div>
      {posts.map((post : Post) => (
        <PostCard
          title={post.title}
          extract={post.extract}
          slug={post.slug}
          author={post.author}
          key={post.slug}
        />
      ))}
    </div>
  )
}

export default Blog
