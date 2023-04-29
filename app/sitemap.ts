import { MetadataRoute } from 'next'

export default function sitemap (): MetadataRoute.Sitemap {
  const allposts = [
    {
      title: 'Los 5 mejores rascadores para gatos: ¡Descubre cuál es el mejor!',
      extract: 'Una guía completa para elegir el rascador ideal para tu felino',
      author: 'Daniel Domínguez',
      img: 'mejores-rascadores-para-gatos',
      categories: 'rascadores para gatos',
      keywords: 'mejores rascadores para gatos, rascador horizontal, rascador vertical',
      date: '2023-04-21',
      slug: 'mejores-rascadores-para-gatos'
    },
    {
      title: 'Los 5 mejores juguetes para gatos en 2023: ¡Diversión asegurada!',
      extract: 'Descubre cuáles son los mejores juguetes para gatos y cómo pueden mejorar la vida de tu mascota',
      author: 'Daniel Domínguez',
      img: 'mejores-juguetes-para-gatos',
      categories: 'juguetes para gatos, gatos adultos, juguetes automáticos',
      keywords: 'mejores juguetes para gatos, juguete para gato adulto, juguetes automáticos para gatos',
      date: '2023-04-21',
      slug: 'mejores-juguetes-para-gatos'
    },
    {
      title: 'Los mejores ingredientes para un pienso de gatos',
      extract: '¿Quieres saber cuáles son los mejores ingredientes para un pienso de gatos? Aquí te lo explicamos todo.',
      author: 'Daniel Domínguez',
      img: 'mejores-ingredientes-pienso-gatos',
      categories: 'pienso para gatos',
      keywords: 'mejores ingredientes pienso gato, ingredientes saludables para gatos, alimentos buenos para gatos',
      date: '2023-04-22',
      slug: 'mejores-ingredientes-pienso-gatos'
    },
    {
      title: '¿Cuenco o fuente? ¿Qué es mejor para tu gato?',
      extract: 'Descubre si es mejor para tu gato beber en un cuenco o en una fuente y conoce las mejores opciones del mercado',
      author: 'Daniel Domínguez',
      img: 'mejores-fuentes-gatos',
      categories: 'fuentes para gatos, cuencos para gatos',
      keywords: 'mejores fuentes para gatos, cuencos para gatos, dispensador de agua para gatos',
      date: '2023-04-22',
      slug: 'mejores-fuentes-gatos'
    },
    {
      title: 'El mejor pienso para gatos esterilizados: ranking de los 5 mejores',
      extract: 'Todo lo que debes tener en cuenta para elegir un pienso de calidad',
      author: 'Daniel Domínguez',
      img: 'mejor-pienso-gatos-esterilizados',
      categories: 'pienso para gatos, gatos esterilizados',
      keywords: 'pienso para gatos, gatos esterilizados, pienso para gatos con sobrepeso, mejor pienso para gatos',
      date: '2023-04-11',
      slug: 'mejor-pienso-gatos-esterilizados'
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
