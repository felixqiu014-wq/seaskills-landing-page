<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# SeaSkills Landing Page

This repository contains the SeaSkills marketing landing page. It is a Vite + React application styled with Tailwind CSS and packaged for static deployment.

## Overview

The project includes:

- A responsive marketing site for SeaSkills
- A Vite-based local development workflow
- A production build output in `dist/`
- A Dockerfile for serving the static site with Nginx

## Requirements

- Node.js 22+ recommended
- npm

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000)

## Available Scripts

```bash
npm run dev       # Start the Vite dev server on port 3000
npm run build     # Create a production build
npm run preview   # Preview the production build locally
npm run lint      # Run TypeScript type checking
npm run clean     # Remove the dist directory
```

## Production Build

Create the static production bundle with:

```bash
npm run build
```

The built files will be written to `dist/`.

## Docker

The repository includes a multi-stage Dockerfile that builds the site and serves it with Nginx.

Build the image:

```bash
docker build -t seaskills-landing-page .
```

Run the container:

```bash
docker run --rm -p 8080:8080 seaskills-landing-page
```

Then open [http://localhost:8080](http://localhost:8080).
