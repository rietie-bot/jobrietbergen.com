import { ArrowUpRight } from 'lucide-react'
import type { BlogPost } from '@/app/data'

export function BlogPostTitle({ post }: { post: BlogPost }) {
  return (
    <>
      {post.title}
      {/^https?:\/\//.test(post.link) && (
        <>
          {'\u00a0'}
          <ArrowUpRight
            aria-hidden="true"
            className="inline-block size-[0.85em] align-baseline"
          />
          <span className="sr-only"> (external site, opens in a new tab)</span>
        </>
      )}
    </>
  )
}
