# Brand image assets

The Amazon listing synopsis is available, but the official cover image could not be retrieved from the accessible listing. No generated artwork is being used as a substitute cover.

## Book cover

When the client supplies the official cover file, place it here as:

`public/images/puck-and-liara-1.jpg`

Then set `coverImage` in `src/data/books.js` to `/images/puck-and-liara-1.jpg`. The shared book-cover component will render and optimize it across the hero, catalogue, and book detail page.

## Author portrait (optional)

Place an approved portrait at `public/images/leonardo-piccardi.jpg` and set `portraitImage` in `src/data/author.js` to `/images/leonardo-piccardi.jpg` when available.

`hero-cosmos.jpg` is original atmospheric site artwork only; it is not the book cover or an official illustration from the book.

## Deployment URL

Set `NEXT_PUBLIC_SITE_URL` to the deployed site’s canonical origin (for example, the actual `https://` domain) so Open Graph image URLs resolve correctly. `VERCEL_URL` is used automatically on Vercel; localhost is only the development fallback.
