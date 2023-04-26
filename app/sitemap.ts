import { MetadataRoute } from 'next'

export default function sitemap (): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://gatomundo.com',
      lastModified: new Date()
    },
    {
      url: 'https://gatomundo/blog',
      lastModified: new Date()
    },
    {
      url: 'https://gatomundo.com/blog/fuentes-para-gatos/mejores-fuentes-gatos',
      lastModified: new Date()
    }
  ]
}
