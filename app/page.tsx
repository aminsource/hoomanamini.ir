import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'

export default async function Page() {
  const filteredBlogs = allBlogs.filter((post) => !post.draft)
  const sortedPosts = sortPosts(filteredBlogs)

  const posts = allCoreContent(sortedPosts)

  return <Main posts={posts} />
}
