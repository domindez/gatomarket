import { MetadataRoute } from 'next'
import { getAllFilesMetadata } from '../lib/mdx'

interface FileMetadata {
  title: string;
  extract: string;
  author: string;
  img: string;
  categories: Array<string>;
  keywords: Array<string>;
  date: string;
  slug: string;
}

async function getSitemapItems () {
  const allPosts = await getAllFilesMetadata()
  return allPosts.map((post: FileMetadata) => ({
    url: `https://gatomundo.com/blog/${post.categories[0]}/${post.slug}`,
    lastModified: new Date()
    // lastModified: new Date(post.date)
  }))
}

export default async function sitemap (): Promise<any> {
  return await getSitemapItems()
}
