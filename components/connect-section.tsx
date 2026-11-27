'use client'

import { ArrowUpRight } from 'lucide-react'
import { EMAIL, SOCIAL_LINKS } from '@/app/data'
import { Magnetic } from '@/components/ui/magnetic'

export function ConnectSection() {
  return (
    <section aria-labelledby="connect-heading">
      <h2 id="connect-heading" className="mb-5 text-xl font-medium">
        Connect
      </h2>
      <p className="mb-5 text-lg leading-relaxed text-zinc-700 sm:text-xl dark:text-zinc-300">
        Feel free to contact me at{' '}
        <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>
      </p>
      <div className="flex flex-wrap items-center justify-start gap-3">
        {SOCIAL_LINKS.map(({ label, link }) => (
          <Magnetic key={label} springOptions={{ bounce: 0 }} intensity={0.3}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-3 py-1.5 text-base text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
            >
              {label}
              <ArrowUpRight aria-hidden="true" className="h-3 w-3" />
            </a>
          </Magnetic>
        ))}
      </div>
    </section>
  )
}
