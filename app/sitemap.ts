import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jobrietbergen.com'

  const blogPosts = [
    {
      url: `${baseUrl}/blog/open-weights-is-all-you-need`,
      lastModified: new Date('2026-07-31'),
    },
    {
      url: `${baseUrl}/blog/kimi-k3-grok-45-built-the-same-database`,
      lastModified: new Date('2026-07-30'),
    },
    {
      url: `${baseUrl}/blog/auto-model-vs-picking-your-own`,
      lastModified: new Date('2026-07-27'),
    },
    {
      url: `${baseUrl}/blog/no-second-deekseek-moment`,
      lastModified: new Date('2026-07-21'),
    },
    {
      url: `${baseUrl}/blog/ai-creates-jobs-compute-bill`,
      lastModified: new Date('2026-07-06'),
    },
    {
      url: `${baseUrl}/blog/we-predicted-the-100kyr-per-dev-ai`,
      lastModified: new Date('2026-06-23'),
    },
    {
      url: `${baseUrl}/blog/claude-fable-5-vs-gpt-5-5`,
      lastModified: new Date('2026-06-13'),
    },
    {
      url: `${baseUrl}/blog/the-github-copilot-bill-came-due`,
      lastModified: new Date('2026-06-05'),
    },
    {
      url: `${baseUrl}/blog/your-coding-agent-will-get-ripped`,
      lastModified: new Date('2026-06-02'),
    },
    {
      url: `${baseUrl}/blog/ai-agents-are-coming-for-every-role`,
      lastModified: new Date('2026-04-10'),
    },
    {
      url: `${baseUrl}/blog/how-i-use-kilo-for-slack-and-code-reviewer`,
      lastModified: new Date('2026-01-28'),
    },
  ]

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...blogPosts,
  ]
}
