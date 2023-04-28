import { getAllFilesMetadata } from '@/lib/mdx'
import { MetadataRoute } from 'next'

export default function sitemap (): MetadataRoute.Sitemap {
  const allposts = getAllFilesMetadata()
  const sitemap = allposts.map((post: any) => {
    return {
      url: `https://gatomundo.com/blog/${post.categories.split(',')[0].replace(/\s/g, '-')}/${post.slug}`,
      lastModified: new Date(post.date)
    }
  })
  return [
    {
      url: 'https://gatomundo.com/',
      lastModified: new Date('2023-04-22')
    },
    {
      url: 'https://gatomundo.com/blog',
      lastModified: new Date('2023-04-22')
    },
    ...sitemap
  ]
}

/*
    {
      url: 'https://gatomundo.com/blog/fuentes-para-gatos/mejores-fuentes-gatos',
      lastModified: new Date()
    }
*/
