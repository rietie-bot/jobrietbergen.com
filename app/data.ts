type Project = {
  name: string
  description: string
  link?: string
  video?: string
  image?: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link?: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Kilo Code',
    description:
      'Open-source AI coding agent.',
    link: 'https://kilo.ai',
    id: 'project1',
  },
  {
    name: 'Alphadoc',
    description: 'Developer documentation platform.',
    id: 'project2',
  },
  {
    name: 'Onjo AI',
    description: 'AI agents for GTM.',
    id: 'project3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Kilo',
    title: 'Head of Growth',
    start: '2025',
    end: 'Present',
    link: 'https://kilo.ai',
    id: 'work1',
  },
  {
    company: 'Alphadoc',
    title: 'Co-founder & CEO',
    start: '2022',
    end: '2024',
    id: 'work2',
  },
  {
    company: 'Onjo AI',
    title: 'Co-founder & CEO',
    start: '2024',
    end: '2024',
    id: 'work3',
  },
  {
    company: 'Founda Health',
    title: 'CMO',
    start: '2020',
    end: '2021',
    link: 'https://founda.com',
    id: 'work4',
  },
  {
    company: 'Marketer Technologies',
    title: 'Head of Growth',
    start: '2021',
    end: '2022',
    link: 'https://www.marketer.com/',
  },
  {
    company: 'Growth Tribe',
    title: 'VP Growth',
    start: '2015',
    end: '2020',
    id: 'work6',
  },
  {
    company: 'Rocket Internet / CityDeal (→ Groupon)',
    title: 'Early Employee',
    start: '2010',
    end: '2013',
    link: 'https://groupon.com',
    id: 'work7',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'AI Agents Are Coming for Every Role',
    description: 'Not to replace you, but to give you super powers.',
    link: '/blog/ai-agents-are-coming-for-every-role',
    uid: 'blog-3',
  },
  {
    title: 'How I Use Kilo for Slack and Code Reviewer to Scale My Growth Role',
    description: 'Building an interactive pricing calculator with AI coding tools',
    link: '/blog/how-i-use-kilo-for-slack-and-code-reviewer',
    uid: 'blog-1',
  },
  {
    title: 'How Kilo Code uses PostHog to power hyper-fast growth',
    description: 'A customer story on PostHog about scaling growth at Kilo Code',
    link: 'https://posthog.com/customers/kilocode',
    uid: 'blog-2',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jobrietbergen/',
  },
  {
    label: '𝕏',
    link: 'https://x.com/jobrietbergen',
  },
  {
    label: 'GitHub',
    link: 'https://github.com/jobrietbergen',
  },
  {
    label: 'Substack',
    link: 'https://jobkilo.substack.com',
  },
]

export const EMAIL = 'job@jobrietbergen.com'
