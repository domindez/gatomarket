import { getFilesBySlug } from '@/lib/mdx'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import React from 'react'
import MDXComponents from '@/components/MDXComponents'
import '../../../sass/PostPage.scss'

const page = async ({ params } : Params) => {
  const { content, frontmatter } = await getFilesBySlug(params.post, MDXComponents)
  console.log('object :>> ', frontmatter)
  return (
    <div className='post-page'>
      <article>
        {content}
      </article>
    </div>
  )
}

export default page
