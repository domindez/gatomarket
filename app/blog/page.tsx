import React from 'react'
import '../../sass/Blog-main-page.scss'
import BlogCategory from '@/components/BlogCategory'

export interface Post {
title: string
extract: string
author: string
slug: string
categories: string
date: string
}

const Blog = ({ searchParams } : any) => {
  return (
    <BlogCategory category={null} cardsPerPage={4} page={searchParams.page} />
  )
}

export default Blog
