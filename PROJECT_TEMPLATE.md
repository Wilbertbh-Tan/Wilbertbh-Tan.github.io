# Project Card Template Guide

This guide shows you how to add new projects to your portfolio.

## Quick Start

1. Open `src/data/projects.js`
2. Copy the first project object (lines 2-60)
3. Paste it into the array
4. Update all the fields with your project info

## Project Object Structure

```javascript
{
  id: 'your-project-id',           // Required: unique identifier (lowercase-with-hyphens)
  title: 'Your Project Name',       // Required: display name
  description: 'Brief summary...',  // Required: 2-3 sentences for the card
  tags: ['Tech1', 'Tech2'],        // Required: array of technologies (3-5 recommended)
  image: null,                      // Optional: URL to image or null
  fullDescription: `...`,           // Required: full markdown description
  links: {
    github: 'https://...',          // Optional: GitHub URL or null
    live: 'https://...'             // Optional: live demo URL or null
  }
}
```

## Field Guidelines

### `id`
- Use lowercase letters, numbers, and hyphens only
- Must be unique across all projects
- Examples: `'task-manager'`, `'ai-chatbot'`, `'weather-app-v2'`

### `title`
- The name shown on cards and detail pages
- Keep it concise (2-5 words)
- Use title case
- Examples: `'AI Chat Assistant'`, `'Task Management Dashboard'`

### `description`
- 2-3 sentences that appear on the project card
- Summarize what the project does and key features
- Keep it under 200 characters for best display
- Example: `'A real-time chat application powered by GPT-4, featuring context-aware conversations, markdown support, and conversation history.'`

### `tags`
- Array of technologies/skills used
- Recommend 3-5 tags per project
- Use proper capitalization (e.g., `'React'` not `'react'`)
- Common tags: `'React'`, `'TypeScript'`, `'Node.js'`, `'Python'`, `'TailwindCSS'`, `'PostgreSQL'`, `'AWS'`, `'Docker'`

### `image`
- Can be `null` or a URL/path to an image
- Recommended size: 1200x630px (16:9 aspect ratio)
- Can use external URLs or local images in `/public/images/`
- Examples:
  - `null` (no image)
  - `'https://example.com/project-screenshot.png'`
  - `'/images/my-project.jpg'` (if stored in public/images/)

### `fullDescription`
- Write in markdown format
- Use lowercase headings for consistency with the site aesthetic
- Structure suggestion:
  ```markdown
  # overview
  Brief introduction (2-3 sentences)

  ## what it does
  - Feature 1
  - Feature 2
  - Feature 3

  ## technical implementation
  Tech stack details, architecture decisions

  ## challenges solved
  Problems you encountered and how you solved them

  ## impact
  - Metrics, results, user feedback
  - Quantify when possible (e.g., "reduced load time by 40%")

  ## what i learned
  Personal reflections, skills gained
  ```

### `links`
- Both `github` and `live` can be URLs or `null`
- If you don't have a GitHub repo, set to `null`
- If you don't have a live demo, set to `null`

## Full Example

```javascript
{
  id: 'recipe-finder',
  title: 'Recipe Finder App',
  description: 'A mobile-first web app that helps users discover recipes based on ingredients they have. Features meal planning, shopping lists, and nutritional information.',
  tags: ['React Native', 'Firebase', 'Spoonacular API'],
  image: '/images/recipe-finder.png',
  fullDescription: `
# overview

created a recipe discovery platform that reduces food waste by helping users find recipes based on ingredients they already have at home. the app integrates with the spoonacular API and includes features for meal planning and grocery list generation.

## what it does

- searches 350,000+ recipes by ingredient, cuisine, or dietary restriction
- generates meal plans for the week with automatic shopping lists
- displays nutritional information and cooking instructions
- saves favorite recipes for offline access
- supports dark mode and multiple languages

## technical implementation

**mobile app:**
- react native for cross-platform development
- redux for state management
- async storage for offline functionality
- react navigation for routing

**backend:**
- firebase authentication and firestore database
- cloud functions for api request optimization
- spoonacular API integration with caching layer

**key features:**
- implemented smart ingredient matching algorithm
- built caching system to reduce API calls by 70%
- designed responsive UI that works on phones and tablets

## impact

- 2,500+ active users in first month
- average 4.6 star rating on app stores
- users report saving average of $50/month on groceries
- reduced food waste by helping users use ingredients before expiration

## what i learned

this project taught me mobile app development best practices, working with external APIs efficiently, and designing for user retention. i learned the importance of offline functionality and how to optimize for slow connections.
  `,
  links: {
    github: 'https://github.com/yourusername/recipe-finder',
    live: null  // Mobile app, no web demo
  }
}
```

## Tips for Great Project Descriptions

1. **Use lowercase headings** - matches the minimal aesthetic of the site
2. **Be specific** - "reduced API calls by 70%" is better than "optimized performance"
3. **Show impact** - include metrics, user numbers, or results when possible
4. **Explain choices** - why did you choose certain technologies?
5. **Be honest** - talk about challenges, not just successes
6. **Keep it scannable** - use bullet points, short paragraphs
7. **Tell a story** - what problem did you solve? how did you solve it?

## Adding Your Projects

1. Edit `src/data/projects.js`
2. Replace the example projects with your own
3. Save the file
4. The dev server will auto-reload
5. Check http://localhost:5173 to see your changes

## Image Tips

If you want to add project images:

1. Create a folder: `public/images/`
2. Add your images there (PNG, JPG, or WebP)
3. Reference them with: `image: '/images/your-image.png'`
4. Recommended dimensions: 1200x630px

## Need Help?

The first project in `src/data/projects.js` is a detailed template with comments. Copy it and replace the content with your own project information.
