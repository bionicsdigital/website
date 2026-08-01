# Blog content and image guide

The blog listing and individual blog pages read their records from `src/data/blogs.ts`.

## Adding a blog post

1. Add a new `BlogArticle` object to the `authoredBlogs` array in `src/data/blogs.ts`.
2. Put the full article body in the object's `content` field using the existing Markdown-style format.
3. Add its banner image to `public/blogs/`.
4. Set `coverImage` to `/blogs/your-image-name.webp`.

## Banner image specification

- Dimensions: **600 × 200 px** (width × height)
- Aspect ratio: **3:1 landscape**
- Preferred format: **WebP**
- Recommended maximum file size: **200 KB**
- Keep important subjects near the center because card thumbnails use image cropping.

Do not use 200 × 600 px; that is a portrait image and will not fit the wide blog banner.
