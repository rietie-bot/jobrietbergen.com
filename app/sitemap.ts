import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jobrietbergen.com'

  const blogPosts = [
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
