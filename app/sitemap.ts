import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jobrietbergen.com'

  const blogPosts = [
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
