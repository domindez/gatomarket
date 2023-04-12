import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'

const root = process.cwd()

export const getFiles = () => fs.readdirSync(path.join(root, 'posts'))

export const getFilesBySlug = async (slug : string, components: any) => {
  const mdxSource = fs.readFileSync(path.join(root, 'posts', `${slug}.mdx`), 'utf-8')
  const { content, frontmatter } = await compileMDX({ source: mdxSource, components, options: { parseFrontmatter: true } })
  return { content, frontmatter }
}

export const getAllFilesMetadata = (): any => {
  const files = getFiles()

  return files.reduce((allPosts, postSlug): any => {
    const mdxSource = fs.readFileSync(path.join(root, 'posts', postSlug), 'utf-8')
    const { data } = matter(mdxSource)

    return [{ ...data, slug: postSlug.replace('.mdx', '') }, ...allPosts]
  }, [])
}
