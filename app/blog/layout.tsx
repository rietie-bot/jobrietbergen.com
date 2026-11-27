'use client'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { PostContents } from '@/components/post-contents'
import { ConnectSection } from '@/components/connect-section'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CheckIcon, LinkIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

function CopyButton() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return

    const timeout = setTimeout(() => {
      setCopied(false)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [copied])

  return (
    <button
      aria-label={copied ? 'Copied link' : 'Copy link'}
      onClick={async () => {
        if (navigator.clipboard) {
          const url = new URL(window.location.href)
          url.hash = ''
          await navigator.clipboard.writeText(url.href)
          setCopied(true)
        }
      }}
      className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-600 shadow-sm transition-colors hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-zinc-100"
      type="button"
    >
      {copied ? (
        <CheckIcon className="h-4 w-4" aria-hidden="true" />
      ) : (
        <LinkIcon className="h-4 w-4" aria-hidden="true" />
      )}
      <span>{copied ? 'Copied' : 'Copy link'}</span>
    </button>
  )
}

export default function LayoutBlogPost({
  children,
}: {
  children: React.ReactNode
}) {
  const article = useRef<HTMLElement>(null)
  const pathname = usePathname()
  const isPost = pathname.replace(/\/$/, '') !== '/blog'
  return (
    <>
      <div className="pointer-events-none fixed top-0 left-0 z-10 h-12 w-full bg-gray-100 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-zinc-950" />
      {isPost && <ScrollProgress key={pathname} article={article} />}

      <div className="mt-8 flex justify-end sm:absolute sm:top-24 sm:right-4 sm:mt-0">
        <CopyButton />
      </div>
      {isPost && (
        <PostContents key={`contents-${pathname}`} article={article} />
      )}
      <main
        ref={article}
        className="prose prose-lg prose-gray dark:prose-invert prose-headings:scroll-m-20 prose-headings:tracking-tight prose-h1:text-3xl prose-h1:font-medium prose-h2:mt-12 prose-h2:text-2xl prose-h2:font-medium prose-h3:text-xl prose-h3:font-medium prose-h4:text-lg prose-h4:font-medium prose-h5:text-base prose-h5:font-medium prose-h6:text-base prose-h6:font-medium prose-p:leading-relaxed prose-li:leading-relaxed prose-strong:font-medium prose-img:h-auto prose-img:max-w-full mt-8 max-w-none pb-20 sm:mt-24"
      >
        {isPost && (
          <nav
            aria-label="Breadcrumb"
            className="not-prose mb-4 text-sm text-zinc-600 dark:text-zinc-400"
          >
            <ol className="flex items-center gap-2">
              <li>
                <Link
                  href="/"
                  className="underline-offset-4 hover:underline focus-visible:underline"
                >
                  Job Rietbergen
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="text-zinc-400 dark:text-zinc-600"
                >
                  /
                </span>
                <Link
                  href="/blog"
                  className="underline-offset-4 hover:underline focus-visible:underline"
                >
                  Blog
                </Link>
              </li>
            </ol>
          </nav>
        )}
        {children}
      </main>
      <ConnectSection />
    </>
  )
}
