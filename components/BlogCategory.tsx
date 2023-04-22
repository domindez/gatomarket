import { getAllFilesMetadata } from '@/lib/mdx'
import React from 'react'
import PostCard from './PostCard'
import { Post } from '@/app/blog/page'
import Pagination from './Pagination'

interface Categories {
category: string | null
cardsPerPage: number
page: number
}

const BlogCategory = ({ category, cardsPerPage, page = 1 } : Categories) => {
  const posts: Array<any> = getAllFilesMetadata()
  const filteredPosts = posts.filter((post) => {
    if (!category) return posts
    const categories = post.categories
      .split(',')
      .map((category: string) => category.trim().replace(/\s+/g, '-'))
    return categories.includes(category)
  })

  const start = (page - 1) * cardsPerPage
  const end = start + cardsPerPage
  const paginatedPosts = filteredPosts.slice(start, end)

  return (
    <>
      <section className='blog-main-page'>
        {paginatedPosts.map((post : Post) => (
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

      <Pagination page={page} category={category} />
    </>
  )
}

export default BlogCategory
