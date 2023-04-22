import Blog from './blog/page'

export default function Home ({ searchParams } : any) {
  return (
    <main>
      <Blog searchParams={searchParams} />
    </main>
  )
}
