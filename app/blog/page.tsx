import PostCard from '@/components/PostCard'
import { getAllFilesMetadata } from '@/lib/mdx'
import React from 'react'
import '../../sass/Blog-main-page.scss'

interface Post {
title: string
extract: string
author: string
slug: string
categories: string
date: string
}

const Blog = async () => {
  const posts = await getAllFilesMetadata()

  return (
    <section className='blog-main-page'>
      {posts.map((post : Post) => (
        <PostCard
          title={post.title}
          extract={post.extract}
          slug={post.slug}
          author={post.author}
          key={post.slug}
          categories={post.categories.split(',')}
          date={post.date}
        />
      ))}
    </section>
  )
}

export default Blog
