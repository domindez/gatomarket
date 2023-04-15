import { getFilesBySlug } from '@/lib/mdx'
import React from 'react'
import MDXComponents from '@/components/MDXComponents'
import '../../../sass/PostPage.scss'
import Breadcrumb from '@/components/Breadcrumb'

const page = async ({ params } : any) => {
  const { content, frontmatter } = await getFilesBySlug(params.post, MDXComponents)
  console.log('object :>> ', frontmatter)
  return (
    <div className='post-page'>
      <Breadcrumb />
      <article>
        {content}
      </article>
    </div>
  )
}

export default page
