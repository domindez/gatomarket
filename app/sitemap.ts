import { MetadataRoute } from 'next'

export default function sitemap (): MetadataRoute.Sitemap {
  const allposts = [
    {
      categories: 'rascadores para gatos',
      date: '2023-04-21',
      slug: 'mejores-rascadores-para-gatos'
    },
    {
      categories: 'juguetes para gatos, gatos adultos, juguetes automáticos',
      date: '2023-04-21',
      slug: 'mejores-juguetes-para-gatos'
    },
    {
      categories: 'pienso para gatos',
      date: '2023-04-22',
      slug: 'mejores-ingredientes-pienso-gatos'
    },
    {
      categories: 'fuentes para gatos, cuencos para gatos',
      date: '2023-04-22',
      slug: 'mejores-fuentes-gatos'
    },
    {
      categories: 'pienso para gatos, gatos esterilizados',
      date: '2023-04-11',
      slug: 'mejor-pienso-gatos-esterilizados'
    },
    {
      categories: 'juguetes para gatos, gatos aburridos',
      date: '2023-04-29',
      slug: 'gato-aburrido-solo-en-casa'
    }
  ]
  const sitemap: MetadataRoute.Sitemap = allposts.map((post: any) => {
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
