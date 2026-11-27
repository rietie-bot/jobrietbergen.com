import { BlogPosts } from '@/components/blog-posts'
import { BLOG_POSTS } from '../data'

export const metadata = {
  title: 'Blog | Job Rietbergen',
  description: 'All blog posts by Job Rietbergen.',
}

export default function BlogPage() {
  return (
    <main className="mt-24 pb-20">
      <section>
        <div className="mb-8">
          <h1 className="text-3xl font-medium tracking-tight text-zinc-950 dark:text-zinc-50">
            Blog
          </h1>
        </div>
        <BlogPosts posts={BLOG_POSTS} variant="grid" />
      </section>
    </main>
  )
}
