import { BlogPosts } from '@/components/blog-posts'
import { BLOG_POSTS, PINNED_POST_ID } from '../data'

export const metadata = {
  title: 'Blog | Job Rietbergen',
  description: 'All blog posts by Job Rietbergen.',
}

export default function BlogPage() {
  const sorted = [...BLOG_POSTS].sort((a, b) =>
    (b.publishedOn ?? '').localeCompare(a.publishedOn ?? ''),
  )
  const pinned = sorted.find((post) => post.uid === PINNED_POST_ID)
  const featured = pinned ?? sorted[0]
  const remaining = sorted.filter((post) => post !== featured)
  return (
    <div className="not-prose">
      <h1 className="mb-8 text-3xl font-medium tracking-tight">Blog</h1>
      {featured && (
        <article>
          <BlogPosts
            posts={[featured]}
            showDates
            heading="h2"
            featuredLabel={pinned ? 'Pinned post' : 'Latest'}
          />
        </article>
      )}
      {remaining.length > 0 && (
        <section className="mt-8">
          <h2 className="mb-3 text-xl font-medium">More writing</h2>
          <BlogPosts posts={remaining} showDates heading="h3" />
        </section>
      )}
    </div>
  )
}
