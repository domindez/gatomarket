import { getAllFilesMetadata, getFilesBySlug } from '@/lib/mdx'
import React from 'react'
import MDXComponents from '@/components/MDXComponents'
import '../../../../sass/PostPage.scss'
import Breadcrumb from '@/components/Breadcrumb'
import ShareBtns from '../../../../components/ShareBtns'
import type { Metadata } from 'next'
import { Post } from '../../page'
import PostCard from '@/components/PostCard'

export const metadata: Metadata = {}

const page = async ({ params } : any) => {
  const { content, frontmatter } = await getFilesBySlug(params.post, MDXComponents)
  const posts = getAllFilesMetadata()
  setMetaData(frontmatter)

  return (
    <div className='post-page'>
      <div className='main-column'>
        <Breadcrumb />
        <main>
          <article>
            {content}
          </article>
        </main>

        <ShareBtns title={metadata.title as string} />
        <hr />
        <div className='related-posts'>
          {posts.slice(0, 4).map((post : Post) => (
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
        </div>
      </div>

    </div>
  )
}

export default page
function setMetaData (frontmatter: Record<string, unknown>) {
  const keywords = frontmatter.keywords as string

  metadata.metadataBase = new URL('http://mundogato.com')
  metadata.title = frontmatter.title as string
  metadata.description = frontmatter.extract as string
  metadata.keywords = keywords.split(',')
  metadata.robots = { index: true, follow: true }

  const openGraph = {
    type: 'website',
    url: 'http://mundogato.com',
    title: `${frontmatter.title as string} | Gatomundo.com`,
    description: frontmatter.extract as string,
    image: {
      url: `http://www.gatomundo.com/img/${frontmatter.img}.jpg`,
      width: 1200,
      height: 630
    }
  }
  const twitter = {
    card: 'summary_large_image',
    site: '@mundogato',
    title: `${frontmatter.title as string} | Gatomundo.com`,
    description: frontmatter.extract as string,
    image: {
      url: `http://www.gatomundo.com/img/${frontmatter.img}.jpg`,
      alt: `${frontmatter.title as string} | Gatomundo.com`
    }
  }
  metadata.openGraph = openGraph
  metadata.twitter = twitter
}
