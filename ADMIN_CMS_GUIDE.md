# Admin CMS Guide

Your portfolio now has a complete admin panel for managing projects!

## Access the Admin Panel

### Login
1. Go to: `http://localhost:3000/en/admin/login` (or `/nl/admin/login`)
2. Enter password: `admin123` (change this in `.env.local`)
3. You'll be redirected to the admin dashboard

### Dashboard
**URL**: `http://localhost:3000/en/admin`

Features:
- View all projects in a table
- See project thumbnails, tags, dates
- Quick edit and delete actions
- Create new projects with "+ New Project" button
- View the public site with "View Site →"
- Logout button

## Managing Projects

### Create a New Project

1. Click "+ New Project" from the dashboard
2. Fill in the form:
   - **Project ID**: Lowercase, no spaces (e.g., `my-project`)
   - **Date**: Project completion date
   - **Project URL**: Live website link (optional)
   - **Media Type**: Choose "Image" or "Video"
   - **Upload Media**: Drag & drop or click to upload
     - For videos, also upload a thumbnail image
   - **Tags**: Type tag name and click "Add" (e.g., Next.js, React)
   - **Content**: Switch between English 🇬🇧 and Dutch 🇳🇱 tabs
     - Title (required)
     - Description (short, 1-2 sentences)
     - Content (full HTML)

3. Click "Create Project"

### Edit a Project

1. Click "Edit" next to any project in the dashboard
2. Modify any fields (Project ID cannot be changed)
3. Click "Update Project"

### Delete a Project

1. Click "Delete" next to the project
2. Confirm the deletion
3. Project is permanently removed

## Image Upload

The admin panel uses **Vercel Blob Storage** for images:

### Setup
Add your Vercel Blob token to `.env.local`:
```
BLOB_READ_WRITE_TOKEN=your_token_here
```

Get token from: https://vercel.com/dashboard/stores

### Features
- Drag and drop files
- Automatic upload to CDN
- Preview before saving
- Supports: JPG, PNG, WEBP, GIF, MP4, WEBM
- Max file size: 50MB
- Fast loading with edge CDN

### Usage
1. Drag file into the upload area OR click to browse
2. File uploads automatically
3. URL is saved in the form
4. Preview shows immediately
5. Click "Remove" to delete and choose another

## Content Formatting

The content field supports HTML:

```html
<p>This is a paragraph with regular text.</p>

<h2>This is a heading</h2>

<p>You can use <strong>bold text</strong> for emphasis.</p>

<h2>Features</h2>
<ul>
  <li><strong>Feature 1</strong>: Description here</li>
  <li><strong>Feature 2</strong>: Description here</li>
  <li><strong>Feature 3</strong>: Description here</li>
</ul>

<h2>Technical Details</h2>
<p>More content with details about the project.</p>
```

Supported HTML tags:
- `<p>` - Paragraphs
- `<h2>` - Headings
- `<ul>` and `<li>` - Lists
- `<strong>` - Bold text
- `<em>` - Italic text

## Security

### Password
Default password: `admin123`

**IMPORTANT**: Change this in `.env.local`:
```
ADMIN_PASSWORD=your-secure-password-here
```

### Session
- Sessions expire after 24 hours
- Stored in browser sessionStorage
- Click "Logout" to end session manually

### Routes Protected
All `/admin/*` routes except `/admin/login` require authentication.

## Troubleshooting

### Can't login
- Check password in `.env.local` matches what you're entering
- Restart dev server after changing `.env.local`

### Images not uploading
- Add `BLOB_READ_WRITE_TOKEN` to `.env.local`
- Get token from Vercel dashboard
- Check file size (max 50MB)
- Check file type (images and videos only)

### Changes not visible
- Hard refresh browser (Cmd/Ctrl + Shift + R)
- Check Convex dashboard to verify data was saved
- Restart dev server

### 404 on admin pages
- Make sure you're using the correct URL: `/en/admin` or `/nl/admin`
- Check that all files were created correctly

## Development

### Files Created
```
app/
  [locale]/admin/
    page.js              # Dashboard
    login/page.js        # Login page
    new/page.js          # Create project
    edit/[id]/page.js    # Edit project
  components/admin/
    AuthProvider.js      # Auth wrapper
    ProjectForm.js       # Reusable form
    ImageUpload.js       # Upload component
  api/upload/
    route.js             # Upload endpoint

convex/
  auth.ts                # Auth functions
  schema.ts              # Database schema (updated)
```

### Convex Functions Used
- `api.auth.login` - Login with password
- `api.auth.verifySession` - Check if session is valid
- `api.auth.logout` - End session
- `api.projects.getAllProjects` - Get all projects
- `api.projects.getProjectById` - Get single project
- `api.projects.createProject` - Create new project
- `api.projects.updateProject` - Update project
- `api.projects.deleteProject` - Delete project

## Next Steps

1. **Change the admin password** in `.env.local`
2. **Add Vercel Blob token** for image uploads
3. **Test creating a project** end-to-end
4. **Deploy to production** (Vercel will use env vars from dashboard)

Enjoy your new CMS! 🎉
