
import BlogCategory from '@/components/BlogCategory'
import '../../../sass/Blog-main-page.scss'

const Category = ({ params, searchParams } : any) => {
  return (
    <BlogCategory category={params.category} cardsPerPage={6} page={searchParams.page} />
  )
}

export default Category
