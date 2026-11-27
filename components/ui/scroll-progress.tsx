'use client'

import { useEffect, useRef, type RefObject } from 'react'

export function ScrollProgress({
  article,
}: {
  article: RefObject<HTMLElement | null>
}) {
  const bar = useRef<HTMLProgressElement>(null)

  useEffect(() => {
    const root = article.current
    const progress = bar.current
    if (!root || !progress) return

    let frame = 0
    function update() {
      frame = 0
      if (!root || !progress) return
      const top = root.getBoundingClientRect().top
      const bottom =
        root.lastElementChild?.getBoundingClientRect().bottom ?? top
      const distance = bottom - top - window.innerHeight
      progress.value =
        bottom <= window.innerHeight
          ? 1
          : distance > 0
            ? Math.max(0, -top / distance)
            : 0
    }
    function schedule() {
      if (!frame) frame = requestAnimationFrame(update)
    }
    const observer = new ResizeObserver(schedule)
    observer.observe(document.body)
    observer.observe(root)
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    update()
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [article])

  return (
    <progress
      ref={bar}
      aria-label="Article reading progress"
      value={0}
      max={1}
      className="pointer-events-none fixed inset-x-0 top-0 z-30 h-1 w-full appearance-none border-0 bg-zinc-200 [--progress-fill:var(--color-zinc-800)] dark:bg-zinc-700 dark:[--progress-fill:var(--color-zinc-50)] [&::-moz-progress-bar]:bg-(--progress-fill) [&::-webkit-progress-bar]:bg-transparent [&::-webkit-progress-value]:bg-(--progress-fill)"
    />
  )
}
