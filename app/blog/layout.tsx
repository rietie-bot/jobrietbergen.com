'use client'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { PostContents } from '@/components/post-contents'
import { usePathname } from 'next/navigation'
import { CheckIcon, LinkIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

function CopyButton() {
  const [copied, setCopied] = useState(false)
  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''

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
          await navigator.clipboard.writeText(currentUrl)
        }

        setCopied(true)
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
  return (
    <>
      <div className="pointer-events-none fixed left-0 top-0 z-10 h-12 w-full bg-gray-100 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-zinc-950" />
      <ScrollProgress
        className="fixed top-0 z-20 h-0.5 bg-gray-300 dark:bg-zinc-600"
        springOptions={{
          bounce: 0,
        }}
      />

      <div className="mt-8 flex justify-end sm:absolute sm:right-4 sm:top-24 sm:mt-0">
        <CopyButton />
      </div>
      {pathname.replace(/\/$/, '') !== '/blog' && <PostContents key={pathname} article={article} />}
      <main ref={article} className="prose prose-lg prose-gray mt-8 max-w-none pb-20 dark:prose-invert prose-headings:scroll-m-20 prose-headings:tracking-tight prose-h1:text-3xl prose-h1:font-medium prose-h2:mt-12 prose-h2:text-2xl prose-h2:font-medium prose-h3:text-xl prose-h3:font-medium prose-h4:text-lg prose-h4:font-medium prose-h5:text-base prose-h5:font-medium prose-h6:text-base prose-h6:font-medium prose-p:leading-relaxed prose-li:leading-relaxed prose-strong:font-medium prose-img:h-auto prose-img:max-w-full sm:mt-24">
        {children}
      </main>
    </>
  )
}
