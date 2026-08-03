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
  image?: string
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

type SpeakingPhoto = {
  src: string
  alt: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Kilo Code',
    description:
      'Open-source AI coding agent.',
    link: 'https://kilo.ai',
    image: '/logos/kilo_logo.jpeg',
    id: 'project1',
  },
  {
    name: 'Alphadoc',
    description: 'Developer experience platform.',
    image: '/logos/alphadoc_io_logo.jpeg',
    id: 'project2',
  },
  {
    name: 'Onjo AI',
    description: 'AI agents for GTM.',
    image: '/logos/onjo_ai_logo.jpeg',
    id: 'project3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Kilo (acquired by Anaconda)',
    title: 'Head of Growth',
    start: '2025',
    end: 'Present',
    link: 'https://kilo.ai',
    image: '/logos/kilo_logo.jpeg',
    id: 'work1',
  },
  {
    company: 'Alphadoc',
    title: 'Co-founder & CEO',
    start: '2022',
    end: '2024',
    image: '/logos/alphadoc_io_logo.jpeg',
    id: 'work2',
  },
  {
    company: 'Onjo AI',
    title: 'Co-founder & CEO',
    start: '2024',
    end: '2024',
    image: '/logos/onjo_ai_logo.jpeg',
    id: 'work3',
  },
  {
    company: 'Marketer Technologies',
    title: 'Head of Growth',
    start: '2021',
    end: '2022',
    link: 'https://www.marketer.com/',
    image: '/logos/marketer_com_logo.jpeg',
    id: 'work4',
  },
  {
    company: 'Founda Health',
    title: 'CMO',
    start: '2020',
    end: '2021',
    link: 'https://founda.com',
    image: '/logos/founda_logo.jpeg',
    id: 'work5',
  },
  {
    company: 'Growth Tribe',
    title: 'VP Growth',
    start: '2015',
    end: '2020',
    image: '/logos/growth_tribe_logo.jpeg',
    id: 'work6',
  },
  {
    company: 'Rocket Internet / CityDeal (acquired by Groupon)',
    title: 'Early Employee',
    start: '2010',
    end: '2013',
    link: 'https://www.rocket-internet.com/',
    image: '/logos/rocket_logo.jpeg',
    id: 'work7',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Open Weights Is All You Need',
    description: 'Why open and closed models need a neutral routing layer.',
    link: '/blog/open-weights-is-all-you-need',
    uid: 'blog-12',
  },
  {
    title: 'Kimi K3 + Grok 4.5 Built the Same Database as Claude Opus 5 at 1/25th the Price',
    description: 'The open-model path delivered comparable correctness and crash safety at 4% of the cost.',
    link: '/blog/kimi-k3-grok-45-built-the-same-database',
    uid: 'blog-11',
  },
  {
    title: "Auto Model vs Picking Your Own: We Tested Kilo Code's Router on a Backend Build",
    description: 'Auto Model matched manually selected frontier models at less than half the cost.',
    link: '/blog/auto-model-vs-picking-your-own',
    uid: 'blog-10',
  },
  {
    title: "Why we won't see another DeepSeek moment anytime soon",
    description: 'Frontier-class open models increase demand for scarce compute rather than reducing it.',
    link: '/blog/no-second-deekseek-moment',
    uid: 'blog-9',
  },
  {
    title: 'AI creates jobs. The compute bill is not your problem (yet).',
    description: 'AI-heavy companies are growing headcount while infrastructure spending pressures pricing.',
    link: '/blog/ai-creates-jobs-compute-bill',
    uid: 'blog-8',
  },
  {
    title: 'We predicted the $100k/yr-per-dev AI bill. Now the winners are routing around it.',
    description: 'Why model routing is becoming the enterprise cost-control layer for AI coding.',
    link: '/blog/we-predicted-the-100kyr-per-dev-ai',
    uid: 'blog-7',
  },
  {
    title: 'Claude Fable 5 vs GPT-5.5: better planning, similar execution',
    description: 'Claude Fable 5 wrote the sharper plan, but GPT-5.5 matched execution at lower cost.',
    link: '/blog/claude-fable-5-vs-gpt-5-5',
    uid: 'blog-6',
  },
  {
    title: "The GitHub Copilot Bill Came Due. Here's What Engineering Leaders Should Do.",
    description: 'The era of free compute ended, and enterprise teams need model freedom and spend control.',
    link: '/blog/the-github-copilot-bill-came-due',
    uid: 'blog-5',
  },
  {
    title: 'Your Coding Agent Will Get Ripped Out. Build Workflows That Survive It.',
    description: 'Durable AI coding workflows need to survive vendor pivots across tools, models, and surfaces.',
    link: '/blog/your-coding-agent-will-get-ripped',
    uid: 'blog-4',
  },
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

export const SPEAKING_PHOTOS: SpeakingPhoto[] = [
  {
    src: '/speaking/speaker-job-rietbergen-2.jpg',
    alt: 'Job Rietbergen presenting to an audience',
  },
  {
    src: '/speaking/speaker-job-rietbergen-4.jpeg',
    alt: 'Job Rietbergen speaking on stage at an AI event',
  },
  {
    src: '/speaking/speaker-job-rietbergen-1.jpg',
    alt: 'Audience watching Job Rietbergen speak at an event',
  },
  {
    src: '/speaking/speaker-job-rietbergen-7.jpeg',
    alt: 'Job Rietbergen speaking at an event',
  },
  {
    src: '/speaking/speaker-job-rietbergen-3.jpeg',
    alt: 'Job Rietbergen giving a talk',
  },
  {
    src: '/speaking/speaker-job-rietbergen-6.jpeg',
    alt: 'Job Rietbergen presenting with slides',
  },
]

export const EMAIL = 'job@jobrietbergen.com'
