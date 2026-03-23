type Project = {
  name: string
  description: string
  link: string
  video?: string
  image?: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
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
      'Open-source AI coding agent. Raised $8M seed.',
    link: 'https://kilo.ai',
    id: 'project1',
  },
  {
    name: 'Alphadoc',
    description: 'Developer documentation platform. Co-founded & led as CEO.',
    link: 'https://www.crunchbase.com/organization/alphadoc',
    id: 'project2',
  },
  {
    name: 'Onjo AI',
    description: 'AI venture exploring the future of intelligent automation.',
    link: '#',
    id: 'project3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Kilo',
    title: 'Head of Growth',
    start: '2024',
    end: 'Present',
    link: 'https://kilo.ai',
    id: 'work1',
  },
  {
    company: 'Alphadoc',
    title: 'Co-founder & CEO',
    start: '2020',
    end: '2024',
    link: 'https://www.crunchbase.com/organization/alphadoc',
    id: 'work2',
  },
  {
    company: 'Onjo AI',
    title: 'Founder',
    start: '2019',
    end: '2020',
    link: '#',
    id: 'work3',
  },
  {
    company: 'Founda Health',
    title: 'Growth Lead',
    start: '2018',
    end: '2019',
    link: 'https://founda.com',
    id: 'work4',
  },
  {
    company: 'Marketer Technologies',
    title: 'Head of Growth',
    start: '2016',
    end: '2018',
    link: '#',
    id: 'work5',
  },
  {
    company: 'Growth Tribe',
    title: 'Growth Lead',
    start: '2015',
    end: '2016',
    link: 'https://growthtribe.io',
    id: 'work6',
  },
  {
    company: 'Rocket Internet / CityDeal (→ Groupon)',
    title: 'Early Employee',
    start: '2010',
    end: '2015',
    link: 'https://groupon.com',
    id: 'work7',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'How I Use Kilo for Slack and Code Reviewer to Scale My Growth Role',
    description: 'Building an interactive pricing calculator with AI coding tools',
    link: 'https://blog.kilo.ai/p/how-i-use-kilo-for-slack-and-code-reviewer',
    uid: 'blog-1',
  },
  {
    title: 'How Kilo Code uses PostHog as the connective tissue behind a hyper-fast growth engine',
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
