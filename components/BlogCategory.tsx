import { getAllFilesMetadata } from '@/lib/mdx'
import React from 'react'
import PostCard from './PostCard'
import { Post } from '@/app/blog/page'

interface Categories {
category: string
numToShow: number
}

const BlogCategory = ({ category, numToShow } : Categories) => {
  const posts: Array<any> = getAllFilesMetadata()
  const filteredPosts = posts.filter((post) => {
    const categories = post.categories
      .split(',')
      .map((category: string) => category.trim().replace(/\s+/g, '-'))
    return categories.includes(category)
  })

  return (
    <section className='blog-main-page'>
      {filteredPosts.slice(0, numToShow).map((post : Post) => (
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

export default BlogCategory
