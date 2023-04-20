
import BlogCategory from '@/components/BlogCategory'
import '../../../sass/Blog-main-page.scss'

const Pienso = ({ params } : any) => {
  console.log(params.category)
  return (
    <BlogCategory category={params.category} numToShow={4} />
  )
}

export default Pienso
