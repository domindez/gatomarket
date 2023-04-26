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

function getSitemapItems () {
  const allPosts = getAllFilesMetadata()
  return allPosts.map((post: FileMetadata) => ({
    url: `https://gatomundo.com/blog/${post.categories[0]}/${post.slug}`,
    lastModified: new Date()
    // lastModified: new Date(post.date)
  }))
}

export default function sitemap (): MetadataRoute.Sitemap {
  const items = getSitemapItems()

  return [
    {
      url: 'https://acme.com',
      lastModified: new Date()
    },
    {
      url: 'https://acme.com/about',
      lastModified: new Date()
    },
    {
      url: 'https://acme.com/blog',
      lastModified: new Date()
    },
    ...items
  ]
}
