'use client'

import { ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState, type RefObject } from 'react'

type Entry = { id: string; text: string; group: string }

export function PostContents({
  article,
}: {
  article: RefObject<HTMLElement | null>
}) {
  const [entries, setEntries] = useState<Entry[]>([])
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)
  const list = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const root = article.current
    if (!root) return
    const title = root.querySelector('h1')
    const headings = Array.from(
      root.querySelectorAll<HTMLElement>('h1,h2,h3,h4'),
    ).filter(
      (h) =>
        h !== title &&
        !(h.tagName === 'H3' && h.previousElementSibling === title),
    )
    if (!headings.length) return
    const topLevel = Math.min(...headings.map((h) => Number(h.tagName[1])))
    let group = ''
    setEntries(
      headings.map((h) => {
        const text = h.textContent?.trim() || 'Section'
        if (!h.id) {
          const base =
            text
              .toLowerCase()
              .replace(/[^\p{L}\p{N}]+/gu, '-')
              .replace(/^-|-$/g, '') || 'section'
          let id = base,
            n = 2
          while (document.getElementById(id)) id = `${base}-${n++}`
          h.id = id
        }
        if (!group || Number(h.tagName[1]) === topLevel) group = h.id
        return { id: h.id, text, group }
      }),
    )
    const target = headings.find(
      (h) => `#${encodeURIComponent(h.id)}` === location.hash,
    )
    target?.scrollIntoView()
    let frame = 0
    function update() {
      frame = 0
      let id = ''
      for (const h of headings) {
        if (h.getBoundingClientRect().top > 96) break
        id = h.id
      }
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 1
      )
        id = headings[headings.length - 1].id
      setActive(id)
    }
    function schedule() {
      if (!frame) frame = requestAnimationFrame(update)
    }
    const observer = new ResizeObserver(schedule)
    observer.observe(root)
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', schedule)
      cancelAnimationFrame(frame)
    }
  }, [article])

  useEffect(() => {
    const menu = list.current
    const item = menu?.querySelector('[aria-current]')
    if (!menu || !item || !menu.clientHeight) return
    const bounds = menu.getBoundingClientRect(),
      link = item.getBoundingClientRect()
    if (link.bottom > bounds.bottom)
      menu.scrollTop += link.bottom - bounds.bottom
    if (link.top < bounds.top) menu.scrollTop -= bounds.top - link.top
  }, [active, open])

  if (!entries.length) return null
  const current = entries.find((e) => e.id === active)
  return (
    <nav
      aria-label="Article contents"
      className="sticky top-2 z-20 mt-6 rounded-lg border border-zinc-200 bg-white text-sm xl:fixed xl:top-40 xl:right-[calc(50%+24rem)] xl:mt-0 xl:w-56 xl:border-0 dark:border-zinc-800 dark:bg-zinc-950"
      onKeyDown={(e) => {
        if (open && e.key === 'Escape') {
          setOpen(false)
          toggle.current?.focus()
        }
      }}
    >
      <span className="mb-3 hidden text-xs font-medium tracking-widest text-zinc-500 uppercase xl:block">
        Contents
      </span>
      <button
        ref={toggle}
        type="button"
        aria-expanded={open}
        aria-controls="post-outline"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-3 px-4 py-3 xl:hidden"
      >
        Contents{' '}
        <span className="ml-auto truncate text-zinc-500">{current?.text}</span>
        <ChevronDown
          aria-hidden
          className={`size-4 shrink-0 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <ul
        ref={list}
        id="post-outline"
        className={`${open ? 'block' : 'hidden'} absolute inset-x-0 top-full max-h-[60dvh] overflow-y-auto overscroll-contain rounded-lg border border-zinc-200 bg-white p-2 xl:static xl:block xl:max-h-[calc(100dvh-12rem)] xl:rounded-none xl:border-0 xl:p-0 dark:border-zinc-800 dark:bg-zinc-950`}
      >
        {entries.map((e) => (
          <li
            key={e.id}
            className={
              e.id !== e.group && current?.group !== e.group ? 'xl:hidden' : ''
            }
          >
            <a
              href={`#${e.id}`}
              aria-current={active === e.id ? 'location' : undefined}
              onClick={() => setOpen(false)}
              className={`block border-l py-1.5 pr-2 leading-snug ${e.id === e.group ? 'pl-3' : 'pl-7'} ${active === e.id ? 'border-current font-medium text-zinc-950 xl:font-normal xl:[-webkit-text-stroke:0.25px] dark:text-zinc-100' : 'border-zinc-200 text-zinc-600 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-white'}`}
            >
              {e.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
