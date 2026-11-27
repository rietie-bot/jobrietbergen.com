'use client'
import { Fragment, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight'
import { ConnectSection } from '@/components/connect-section'
import Link from 'next/link'
import { BlogPosts } from '@/components/blog-posts'
import { PROJECTS, WORK_EXPERIENCE, BLOG_POSTS, SPEAKING_PHOTOS } from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

const HERO_PHOTOS: { src: string; alt: string }[] = [
  { src: '/photos/photo-1.jpg', alt: 'Job Rietbergen — cover photo' },
  { src: '/photos/photo-2.jpg', alt: 'Job Rietbergen — portrait' },
  { src: '/photos/photo-3.jpg', alt: 'Job Rietbergen — profile' },
  { src: '/photos/photo-4.jpg', alt: 'Job Rietbergen — Amsterdam' },
]

const STRIP_PHOTOS: { src: string; alt: string }[] = [
  { src: '/photos/photo-2.jpg', alt: 'Job Rietbergen — portrait' },
  { src: '/photos/photo-1.jpg', alt: 'Job Rietbergen — cover photo' },
  { src: '/photos/photo-4.jpg', alt: 'Job Rietbergen — Amsterdam' },
  { src: '/photos/photo-3.jpg', alt: 'Job Rietbergen — profile' },
]

const SPEAKING_IMAGE_ROTATIONS = [-1.2, 1.2, 1, -1.1, 1.15, -0.9]

const SPEAKING_FEATURE_CARD_CLASS =
  'col-span-12 overflow-hidden rounded-2xl bg-zinc-800 ring-1 ring-white/15 sm:col-span-6'

const SPEAKING_SUPPORT_CARD_CLASS =
  'col-span-6 overflow-hidden rounded-2xl bg-zinc-800 ring-1 ring-white/15 sm:col-span-3'

const SPEAKING_IMAGE_CLASS = 'w-full object-cover'

function RotatingPhoto() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_PHOTOS.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const photo = HERO_PHOTOS[index]

  return (
    <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl ring-1 ring-zinc-200/50 sm:h-48 sm:w-48 dark:ring-zinc-800/50">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={photo.src}
          alt={photo.alt}
          className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>
    </div>
  )
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex flex-col items-start gap-8 sm:flex-row">
          <RotatingPhoto />
          <div className="flex-1">
            <p className="text-lg leading-relaxed text-zinc-700 sm:text-xl dark:text-zinc-300">
              Builder and growth leader based in Amsterdam. Currently leading
              growth at{' '}
              <a
                href="https://kilo.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="underline dark:text-zinc-300"
              >
                Kilo
              </a>
              , an open-source coding agent. Previously founded Alphadoc and
              Onjo AI. I&apos;m hands-on across growth, data, product, and
              engineering.
            </p>
            <p className="mt-4 text-base leading-relaxed font-medium text-zinc-900 sm:text-lg dark:text-zinc-100">
              15 years experience building and growing venture-scale companies.
              I&apos;ve gone from zero to exit multiple times.
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-600 italic sm:text-lg dark:text-zinc-400">
              &ldquo;Learn to sell, learn to build. If you can do both,
              you&apos;ll be unstoppable.&rdquo; — Naval
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-xl font-medium">Ventures</h3>
        <div className="flex flex-col space-y-2">
          {PROJECTS.map((project) => {
            const className =
              'relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30'
            const cardContent = (
              <>
                <Spotlight
                  className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                  size={64}
                />
                <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                  <div className="flex items-center gap-3">
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="h-9 w-9 shrink-0 rounded-[2px] object-cover"
                      />
                    )}
                    <div>
                      <h4 className="font-normal dark:text-zinc-100">
                        {project.name}
                      </h4>
                      <p className="text-[15px] leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )
            return (
              <Fragment key={project.id}>
                {project.link ? (
                  <a
                    className={className}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {cardContent}
                  </a>
                ) : (
                  <div className={className}>{cardContent}</div>
                )}
              </Fragment>
            )
          })}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <figure className="relative overflow-hidden rounded-3xl bg-zinc-950 p-6 text-white ring-1 ring-zinc-900 sm:p-8 dark:bg-zinc-900 dark:ring-zinc-800">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_88%_10%,rgba(161,161,170,0.22),transparent_30%)]" />
          <div className="relative">
            <blockquote className="text-xl leading-relaxed tracking-tight text-zinc-100 sm:text-2xl">
              &ldquo;Job took our growth from near zero to over 3 million users
              in 13 months. He&rsquo;s sharp, direct, and gets things done
              without needing hand-holding. A strong mix of growth leadership
              and hands-on execution.&rdquo;
            </blockquote>
            <figcaption className="mt-6 border-t border-white/10 pt-4">
              <div className="font-medium text-white">Sid Sijbrandij</div>
              <div className="text-sm text-zinc-400">
                Co-founder of GitLab and Kilo Code
              </div>
            </figcaption>
          </div>
        </figure>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="-mx-6 -my-2 flex gap-3 overflow-x-auto px-6 py-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {STRIP_PHOTOS.map((photo, i) => (
            <motion.div
              key={photo.src}
              className="shrink-0 overflow-hidden rounded-xl ring-1 ring-zinc-200/50 dark:ring-zinc-800/50"
              style={{ rotate: i % 2 === 0 ? 1.2 : -1.2 }}
              whileHover={{ scale: 1.03, rotate: 0 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-52 w-auto object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="relative overflow-hidden rounded-3xl bg-zinc-950 p-5 text-white ring-1 ring-zinc-900 dark:bg-zinc-900 dark:ring-zinc-800">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_88%_20%,rgba(161,161,170,0.24),transparent_28%),linear-gradient(135deg,rgba(63,63,70,0.16),transparent_45%)]" />
          <div className="relative space-y-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-xl">
                <p className="mb-2 text-sm tracking-[0.2em] text-zinc-400 uppercase">
                  Speaking
                </p>
                <h3 className="mb-4 text-3xl font-medium tracking-tight">
                  Practical talks on AI, growth, and building from zero to one.
                </h3>
                <p className="text-[17px] leading-relaxed text-zinc-300">
                  I speak at events, podcasts and panels about applying AI
                  agents in real workflows, building growth systems, and turning
                  technical products into companies people care about.
                </p>
              </div>
              <a
                href="#connect"
                onClick={(event) => {
                  event.preventDefault()
                  window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: 'smooth',
                  })
                }}
                className="inline-flex w-fit shrink-0 rounded-full bg-white px-4 py-2 text-sm text-zinc-950 transition-colors hover:bg-zinc-200"
              >
                Invite me to speak
              </a>
            </div>

            <div className="grid grid-cols-12 gap-3">
              {SPEAKING_PHOTOS.slice(0, 6).map((photo, i) => (
                <motion.div
                  key={photo.src}
                  className={
                    i === 0 || i === 1
                      ? SPEAKING_FEATURE_CARD_CLASS
                      : SPEAKING_SUPPORT_CARD_CLASS
                  }
                  style={{ rotate: SPEAKING_IMAGE_ROTATIONS[i] }}
                  whileHover={{ scale: 1.03, rotate: 0, zIndex: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className={SPEAKING_IMAGE_CLASS}
                    style={{
                      aspectRatio: i === 0 || i === 1 ? '16 / 11' : '4 / 3',
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="connect"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-xl font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => {
            const className =
              'relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30'
            const jobContent = (
              <>
                <Spotlight
                  className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                  size={64}
                />
                <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                  <div className="relative flex w-full flex-row items-center justify-between">
                    <div className="flex items-center gap-3">
                      {job.image && (
                        <img
                          src={job.image}
                          alt={job.company}
                          className="h-9 w-9 shrink-0 rounded-[2px] object-cover"
                        />
                      )}
                      <div>
                        <h4 className="font-normal dark:text-zinc-100">
                          {job.title}
                        </h4>
                        <p className="text-[15px] leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
                          {job.company}
                        </p>
                      </div>
                    </div>
                    <p className="shrink-0 text-[15px] text-zinc-600 sm:text-base dark:text-zinc-400">
                      {job.start} - {job.end}
                    </p>
                  </div>
                </div>
              </>
            )
            return (
              <Fragment key={job.id}>
                {job.link ? (
                  <a
                    className={className}
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {jobContent}
                  </a>
                ) : (
                  <div className={className}>{jobContent}</div>
                )}
              </Fragment>
            )
          })}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-xl font-medium">
          <Link
            href="/blog"
            className="underline-offset-4 hover:underline focus-visible:underline"
          >
            Reading
          </Link>
        </h3>
        <BlogPosts posts={BLOG_POSTS} />
      </motion.section>

      <motion.div variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <ConnectSection />
      </motion.div>
    </motion.main>
  )
}
