type CrossPostNoticeProps = {
  url: string
  source?: string
}

export function CrossPostNotice({
  url,
  source = 'the Kilo Blog',
}: CrossPostNoticeProps) {
  return (
    <blockquote>
      This post originally appeared on{' '}
      <a href={url} target="_blank" rel="noopener noreferrer">{source}</a>.
    </blockquote>
  )
}
