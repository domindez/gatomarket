import { getAllFilesMetadata } from './lib/mdx'

interface FileMetadata {
  title: string
  extract: string
  author: string
  img: string
  categories: Array<string>
  keywords: Array<string>
  date: string
  slug: string
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  siteUrl: 'https://your-domain.com',
  generateRobotsTxt: true,
  exclude: ['/404'],
  async additionalSitemaps () {
    const allPosts = await getAllFilesMetadata()
    console.log('allPost :>> ', allPosts)
    const allRoutes = allPosts.map((post : FileMetadata) => `/blog/${post.categories[0]}/${post.slug}`)

    const sitemap = {
      baseUrl: 'https://gatomundo.com/',
      allRoutes,
      changefreq: 'daily',
      priority: 0.8
    }

    return [
      {
        loc: 'https://gatomundo.com/sitemap-posts.xml',
        lastmod: new Date().toISOString(),
        items: [sitemap]
      }
    ]
  }
}
