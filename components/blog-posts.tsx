'use client'

import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
  image?: string
}

type BlogPostsProps = {
  posts: BlogPost[]
  variant?: 'list' | 'grid'
}

export function BlogPosts({ posts, variant = 'list' }: BlogPostsProps) {
  if (variant === 'grid') {
    return (
      <div className="grid gap-5 sm:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.uid}
            className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white text-zinc-950 no-underline transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:border-zinc-700"
            href={post.link}
            data-id={post.uid}
            {...(post.link.startsWith('http')
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            {post.image && (
              <div className="aspect-[16/9] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                <img
                  src={post.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
            )}
            <div className="p-5">
              <h2 className="text-lg font-medium leading-snug tracking-tight text-zinc-950 no-underline dark:text-zinc-50">
                {post.title}
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-zinc-600 no-underline dark:text-zinc-400">
                {post.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    )
  }

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
            <div className="flex flex-col space-y-1">
              <h4 className="font-normal dark:text-zinc-100">{post.title}</h4>
              <p className="text-[15px] leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
                {post.description}
              </p>
            </div>
          </Link>
        ))}
      </AnimatedBackground>
    </div>
  )
}
