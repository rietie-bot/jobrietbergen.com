'use client'

import Link from 'next/link'
import type { BlogPost } from '@/app/data'
import { BlogPostTitle } from './blog-post-title'
import { AnimatedBackground } from '@/components/ui/animated-background'

const dateFormat = new Intl.DateTimeFormat('en', {
  dateStyle: 'medium',
  timeZone: 'UTC',
})

export function BlogPosts({
  posts,
  showDates = false,
  heading: Heading = 'h4',
  featuredLabel,
}: {
  posts: BlogPost[]
  showDates?: boolean
  heading?: 'h2' | 'h3' | 'h4'
  featuredLabel?: 'Pinned post' | 'Latest'
}) {
  return (
    <div className="flex flex-col space-y-0">
      <AnimatedBackground
        enableHover
        className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
        transition={{
          type: 'spring',
          bounce: 0,
          duration: 0.2,
        }}
      >
        {posts.map((post) => (
          <Link
            key={post.uid}
            className="-mx-3 rounded-xl px-3 py-3"
            href={post.link}
            data-id={post.uid}
            {...(post.link.startsWith('http')
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            <div className="flex items-start gap-4 sm:gap-5">
              {featuredLabel && post.image && (
                <img
                  src={post.image}
                  alt=""
                  className="aspect-[4/3] w-20 shrink-0 rounded-[2px] object-cover sm:w-32"
                />
              )}
              <div className="min-w-0 space-y-1">
                {(featuredLabel || (showDates && post.publishedOn)) && (
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    {featuredLabel && (
                      <span className="text-xs font-medium tracking-wider uppercase">
                        {featuredLabel}
                      </span>
                    )}
                    {showDates && post.publishedOn && (
                      <time
                        dateTime={post.publishedOn}
                        className="text-sm text-zinc-600 dark:text-zinc-400"
                      >
                        {dateFormat.format(new Date(post.publishedOn))}
                      </time>
                    )}
                  </div>
                )}
                <Heading
                  className={
                    featuredLabel
                      ? 'text-xl leading-snug font-medium tracking-tight sm:text-2xl dark:text-zinc-100'
                      : 'font-normal dark:text-zinc-100'
                  }
                >
                  <BlogPostTitle post={post} />
                </Heading>
                <p className="text-[15px] leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
                  {post.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </AnimatedBackground>
    </div>
  )
}
