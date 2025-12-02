# CLAUDE.md - AI Assistant Guide for Oddly's Garden

## Project Overview

**Oddly's Garden** is a personal tech notebook and digital garden built with Docusaurus 3.9. It serves as a public knowledge base for documenting software design decisions, philosophical thoughts, political opinions, and personal chronicles.

- **Live Site**: https://oddlydoddly.github.io/oddlys-garden/
- **Repository**: https://github.com/OddlyDoddly/oddlys-garden
- **Author**: Dylan Dodds (@OddlyDoddly)

## Tech Stack

- **Framework**: Docusaurus 3.9.2 (with v4 future flags enabled)
- **Language**: TypeScript (~5.6.2)
- **Runtime**: Node.js >=20.0
- **UI Library**: React 19.0
- **Styling**: CSS Modules + Custom CSS
- **Syntax Highlighting**: Prism (Gruvbox Material theme)
- **Deployment**: GitHub Pages via GitHub Actions

## Directory Structure

```
oddlys-garden/
├── .github/
│   └── workflows/
│       └── deploy.yml              # Automated deployment to GitHub Pages
├── blog/
│   ├── authors.yml                 # Blog author definitions
│   ├── tags.yml                    # Blog tag definitions
│   ├── chronicle/                  # Event-based blog posts
│   └── meditations/                # Contemplative blog posts
├── docs/
│   ├── cover.md                    # Main landing page for docs
│   ├── philosophies/               # Philosophy documents
│   ├── politics/                   # Political opinions
│   └── software/                   # Software design documents
├── src/
│   ├── components/
│   │   ├── AuthorSignature/        # Custom author signature component
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   └── HomepageFeatures/       # Homepage feature cards
│   ├── css/
│   │   └── custom.css              # Global custom styles
│   ├── pages/
│   │   └── index.tsx               # Homepage
│   └── theme/
│       └── DocItem/
│           └── Footer/
│               └── index.tsx       # Swizzled footer component
├── static/                         # Static assets (images, favicons)
├── docusaurus.config.ts            # Main Docusaurus configuration
├── sidebars.ts                     # Sidebar navigation structure
├── package.json                    # Dependencies and scripts
└── tsconfig.json                   # TypeScript configuration
```

## Development Workflows

### Local Development

```bash
# Install dependencies
npm install

# Start development server (localhost:3000)
npm start

# Type checking
npm run typecheck

# Build for production
npm run build

# Serve production build locally
npm run serve

# Clear cache
npm run clear
```

### Deployment

- **Automated**: Pushes to `main` branch trigger automatic deployment via GitHub Actions
- **Workflow**: `.github/workflows/deploy.yml`
- **Process**: Build → Upload artifact → Deploy to GitHub Pages
- **Base URL**: `/oddlys-garden/` (production), `/` (development)

## Content Conventions

### Documentation (docs/)

#### Frontmatter Structure
```yaml
---
sidebar_position: 1  # Order in sidebar
date: 2025-11-21     # Optional: Written date (for AuthorSignature)
---
```

#### Content Categories
1. **Philosophies** (`docs/philosophies/`)
   - Methodologies and reasoning
   - Examples: philosophy-of-philosophy.md, philosophy-of-truth.md

2. **Politics** (`docs/politics/`)
   - Political opinions and philosophies
   - Examples: immigration.md

3. **Software Design Documents** (`docs/software/`)
   - Architecture documents for hobby projects
   - Examples: gnomicon-knowledge-base.md

### Blog Posts (blog/)

#### Frontmatter Structure
```yaml
---
slug: unique-slug
title: Post Title
authors: [oddly]           # Reference to blog/authors.yml
tags: [chronicle]           # Reference to blog/tags.yml
---
```

#### Blog Categories
1. **Chronicle** (`blog/chronicle/`)
   - Event-based recordings with timestamps
   - Format: `YYYY-MM-DD-descriptive-name.mdx`

2. **Meditations** (`blog/meditations/`)
   - Contemplative thoughts on arbitrary subjects
   - Format: `YYYY-MM-DD-descriptive-name.mdx`

#### Author Configuration
- Defined in `blog/authors.yml`
- Default author: `oddly` (Dylan Dodds)
- Profile image: https://github.com/oddlydoddly.png

#### Tag Configuration
- Defined in `blog/tags.yml`
- Available tags: chronicle, meditations

## Component Architecture

### Custom Components

#### AuthorSignature (`src/components/AuthorSignature/`)
- **Purpose**: Display author information and document metadata at the bottom of docs pages
- **Features**:
  - Shows author profile picture from GitHub
  - Displays written date (from frontmatter `date` field)
  - Shows last updated date and author (from git metadata)
  - Safe date formatting with type casting for all date types
- **Usage**: Automatically rendered in swizzled `DocItem/Footer`

#### HomepageFeatures (`src/components/HomepageFeatures/`)
- **Purpose**: Feature cards on the homepage
- **Styling**: CSS Modules

### Theme Customization

#### Swizzled Components
- **DocItem/Footer** (`src/theme/DocItem/Footer/index.tsx`)
  - Custom footer that integrates `AuthorSignature`
  - Removes duplicate metadata display from `EditMetaRow`
  - Preserves tags display and edit link

#### Theme Configuration
- **Color Mode**: Respects system preferences (`respectPrefersColorScheme: true`)
- **Prism Theme**: Gruvbox Material Light/Dark
- **Custom CSS**: `src/css/custom.css`

## Configuration Files

### docusaurus.config.ts
- **Title**: "[Public] The Garden of Oddly"
- **Tagline**: "An enchanted digital collection of technological shenanegans."
- **Base URL**: Conditional based on `NODE_ENV`
- **Future Flags**: `v4: true` (preparing for Docusaurus v4)
- **Features Enabled**:
  - Show last update time/author in docs
  - Blog reading time
  - RSS/Atom feeds
  - Edit page links to GitHub

### sidebars.ts
- **Structure**: Manually configured (not autogenerated)
- **Main Sidebar** (`tutorialSidebar`):
  - Cover Page (intro doc)
  - Philosophies category
  - Politics category
  - Software Design Documents category
- **Category Links**: Use `generated-index` type for category landing pages

## Styling Conventions

### CSS Architecture
- **Global Styles**: `src/css/custom.css`
- **Component Styles**: CSS Modules (`.module.css` files)
- **Naming**: BEM-like conventions in CSS Modules

### Theme Colors
- Respects user's color scheme preference
- Light theme: Gruvbox Material Light
- Dark theme: Gruvbox Material Dark

## Git Conventions

### Branch Strategy
- **Main Branch**: `main`
- **Feature Branches**: Use descriptive names (e.g., `feature/add-new-section`)
- **Claude Branches**: Start with `claude/` prefix for AI-assisted development

### Commit Message Guidelines
- Be descriptive and focus on "why" rather than "what"
- Examples from history:
  - "Add author signature component and metadata to docs pages"
  - "Fix type casting in date formatter to handle all date types safely"
  - "Update signature to display both written and last updated dates"

### Deployment Triggers
- Automatic deployment on push to `main`
- Manual trigger available via GitHub Actions UI

## Common Tasks for AI Assistants

### Adding New Documentation
1. Create markdown file in appropriate `docs/` subdirectory
2. Add frontmatter with `sidebar_position` and optional `date`
3. Update `sidebars.ts` if creating new category or changing structure
4. Use descriptive headings and clear structure
5. Consider adding tags if relevant

### Adding New Blog Post
1. Choose appropriate subdirectory: `blog/chronicle/` or `blog/meditations/`
2. Name file: `YYYY-MM-DD-descriptive-slug.mdx`
3. Add frontmatter:
   ```yaml
   ---
   slug: descriptive-slug
   title: Post Title
   authors: [oddly]
   tags: [chronicle or meditations]
   ---
   ```
4. Write content using MDX syntax

### Creating New Components
1. Create directory in `src/components/ComponentName/`
2. Add `index.tsx` for component logic
3. Add `styles.module.css` for component styles
4. Import and use in pages or swizzled theme components
5. Follow TypeScript strict typing conventions

### Modifying Theme Components
1. Check if component is already swizzled in `src/theme/`
2. If not, use `npm run swizzle` (or create manually if needed)
3. Maintain Docusaurus theme compatibility
4. Use provided theme hooks (e.g., `useDoc()` from `@docusaurus/plugin-content-docs/client`)

### Type Safety
1. Always run `npm run typecheck` before committing
2. Use proper TypeScript types from Docusaurus packages
3. Avoid `any` types; use proper type assertions or type guards
4. Example: Date handling in `AuthorSignature` demonstrates safe type casting

### Testing Changes Locally
1. Run `npm start` for hot-reload development
2. Test in both light and dark modes
3. Verify responsive design on different screen sizes
4. Run `npm run build` to catch build-time errors
5. Use `npm run serve` to test production build locally

## Important Notes

### Environment-Specific Behavior
- **Base URL**: Changes based on `NODE_ENV`
  - Development: `/`
  - Production: `/oddlys-garden/`

### Breaking Changes to Avoid
1. Don't change the base URL in production
2. Don't modify the deployment workflow without testing
3. Maintain backward compatibility with existing URLs
4. Keep frontmatter structure consistent across docs

### Performance Considerations
1. Optimize images before adding to `static/`
2. Keep bundle size reasonable (avoid large dependencies)
3. Use lazy loading for heavy components when appropriate

### Content Guidelines
1. Write for both AI and human readers
2. Use clear, descriptive headings for better navigation
3. Include code examples with proper syntax highlighting
4. Link between related documents using relative paths
5. Keep personal information appropriate for public viewing

## Troubleshooting

### Common Issues

**Build Failures**
- Check TypeScript errors: `npm run typecheck`
- Verify all markdown links are valid
- Ensure frontmatter YAML is properly formatted
- Check for broken imports in components

**Style Issues**
- Clear Docusaurus cache: `npm run clear`
- Check CSS Module imports
- Verify theme color mode settings

**Deployment Issues**
- Check GitHub Actions logs
- Verify `main` branch protection rules
- Ensure workflow has proper permissions

## Resources

- **Docusaurus Docs**: https://docusaurus.io/docs
- **Docusaurus Config API**: https://docusaurus.io/docs/api/docusaurus-config
- **Swizzling Guide**: https://docusaurus.io/docs/swizzling
- **MDX Documentation**: https://mdxjs.com/

---

**Last Updated**: 2025-12-02
**Docusaurus Version**: 3.9.2
**Node Version**: >=20.0
