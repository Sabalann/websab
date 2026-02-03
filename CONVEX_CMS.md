# Convex CMS for Projects

Your portfolio is now powered by Convex, a real-time backend database. This means you can manage your projects dynamically without editing code!

## Dashboard Access

- **Development**: https://dashboard.convex.dev/d/amiable-meadowlark-449
- **Production**: https://dashboard.convex.dev/d/groovy-kookabura-568

## Production Setup

To deploy Convex to production and seed it with your projects:

1. **Deploy functions and schema to production**
   ```bash
   npm run convex:deploy:prod
   ```
   (Requires `CONVEX_DEPLOY_KEY` in `.env.local`.)

2. **Seed the production database**
   ```bash
   npm run convex:seed:prod
   ```
   This runs the same seed as dev but against the production deployment.

For your production site (e.g. Vercel), set `NEXT_PUBLIC_CONVEX_URL` to `https://groovy-kookabura-568.convex.cloud` in the environment variables.

## Managing Projects

### View All Projects
1. Go to the Convex dashboard
2. Click "Data" in the sidebar
3. Select the `projects` table
4. You'll see all your projects listed

### Add a New Project
1. In the dashboard, go to "Data" → `projects`
2. Click "+ Add Document"
3. Fill in the fields:
```json
{
  "id": "your-project-id",
  "media": {
    "type": "",
    "url": "/projects/your-image.webp",
    "thumbnail": "/projects/your-image.webp"
  },
  "tags": ["Next.js", "React"],
  "date": "2026-02-03",
  "url": "https://yourproject.com",
  "translations": {
    "en": {
      "title": "Project Title",
      "description": "Short description",
      "content": "<p>Full HTML content here</p>"
    },
    "nl": {
      "title": "Project Titel",
      "description": "Korte beschrijving",
      "content": "<p>Volledige HTML inhoud hier</p>"
    }
  }
}
```

### Edit a Project
1. Click on any project in the dashboard
2. Click "Edit" button
3. Modify the fields
4. Click "Save"
5. Your website updates immediately!

### Delete a Project
1. Click on the project
2. Click "Delete" button
3. Confirm deletion

## Content Formatting

The `content` field supports HTML:
- `<p>` for paragraphs
- `<h2>` for headings
- `<ul><li>` for lists
- `<strong>` for bold text

Example:
```html
<p>This is a paragraph.</p>
<h2>Features</h2>
<ul>
  <li><strong>Feature 1</strong>: Description</li>
  <li><strong>Feature 2</strong>: Description</li>
</ul>
```

## Media Types

Set `media.type`:
- `""` (empty) for images
- `"video"` for videos

For videos, provide both `url` (video file) and `thumbnail` (poster image).

## Technical Details

**Files:**
- Schema: `convex/schema.ts`
- Functions: `convex/projects.ts`
- Seed data: `convex/seedProjects.ts`

**Environment:**
- Deployment URL: `https://amiable-meadowlark-449.convex.cloud`
- HTTP Actions: `https://amiable-meadowlark-449.convex.site`

## Future Enhancements

You can build a custom admin panel by:
1. Creating an `/admin` route in your Next.js app
2. Using Convex mutations (`createProject`, `updateProject`, `deleteProject`)
3. Adding authentication for security

The functions are already set up in `convex/projects.ts`!
