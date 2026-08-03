# Project Instructions

## Content And Layout Changes

After adding or changing pages, MDX, images, or shared layout styles:

1. Run a clean production build with `rm -rf .next && npm run build`.
2. Start or restart the development server after clearing `.next` when generated CSS or JavaScript assets return errors.
3. Open at least one changed page in a browser and confirm the global stylesheet and core `/_next/` assets return HTTP 200.
4. Check the changed page at desktop and 390px mobile widths.
5. Confirm `document.documentElement.scrollWidth` does not exceed the viewport width and all content images stay within the article container.
6. Do not report completion until these checks pass. Report any unrelated build or lint failures separately.

Keep Markdown and MDX images responsive through the shared blog layout rather than adding one-off styles to individual posts.
