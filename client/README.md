# Front Row Website

A React + Vite website for **Front Row**, a short film about comedy, grief, confidence, and the power of taking the stage. The site is designed with a cool nightclub-comedy club visual theme using neon purple, pink, gold, and dark cinematic styling.

## Project Overview

This website presents the official online experience for **Front Row**. It includes separate pages for the film overview, cast, crew, awards, credits, gallery, and trailer link. The project uses React Router for navigation and custom CSS files for each page section.

## Features

- React single-page application built with Vite
- Separate routed pages for each major section
- Neon nightclub / comedy club visual design
- Responsive navigation bar
- Full-width homepage hero image
- Trailer button linking to YouTube
- About page with film poster and marquee-style border
- Cast cards with clickable image-to-bio interaction
- Crew cards with styled biography sections and headshots
- Awards page with award cards and photo carousel
- Gallery page that automatically imports images from local folders
- Credits page with organized production credits
- Custom 404 Not Found page

## Tech Stack

- React
- Vite
- React Router DOM
- CSS
- JavaScript / JSX

## Folder Structure

```txt
client/
  public/
  src/
    assets/
    components/
      AboutSection.jsx
      AwardSection.jsx
      CastSection.jsx
      CreditSection.jsx
      CrewSection.jsx
      FooterSection.jsx
      GallerySection.jsx
      NavBar.jsx
    css/
      AboutSection.css
      AwardSection.css
      CastSection.css
      CreditSection.css
      CrewSection.css
      FooterSection.css
      GallerySection.css
      Home.css
      NavBar.css
      NotFound.css
    pages/
      Home.jsx
      NotFound.jsx
    photo assets/
      About Page/
      Award Page/
      Cast Page/
      Crew Page/
      Gallery Page/
      Home Page/
    App.css
    App.jsx
    index.css
    main.jsx
  index.html
  package.json
  vite.config.js
```

## Pages and Routes

| Page | Route | Description |
|---|---|---|
| Home | `/` | Main landing page with title image and trailer button |
| About | `/about` | Logline, poster, synopsis, inspiration, and film details |
| Crew | `/crew` | Crew biographies and headshots |
| Cast | `/cast` | Cast cards with image-to-bio interaction |
| Awards | `/awards` | Awards and image carousel |
| Credits | `/credits` | Full production credits |
| Gallery | `/gallery` | Photo gallery with local image imports |
| Not Found | `*` | Custom 404 page |

## Installation

From the project root, move into the client folder:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local Vite URL shown in the terminal, usually:

```txt
http://localhost:5173/
```

## Available Scripts

Inside the `client` folder, you can run:

```bash
npm run dev
```

Starts the development server.

```bash
npm run build
```

Builds the project for production.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs ESLint on the project.

## Image Assets

This project uses local images stored inside `client/src/photo assets/`.

Important folders include:

```txt
client/src/photo assets/Home Page/
client/src/photo assets/About Page/
client/src/photo assets/Cast Page/
client/src/photo assets/Crew Page/
client/src/photo assets/Award Page/
client/src/photo assets/Gallery Page/
```

The Gallery page uses `import.meta.glob()` to automatically import images from folders such as:

```txt
client/src/photo assets/Gallery Page/BTS/
client/src/photo assets/Gallery Page/Stills/DaVinci Stills/
client/src/photo assets/Gallery Page/Stills/Premiere Stills/
```

Supported image formats include:

```txt
.jpg
.jpeg
.png
.JPG
.JPEG
.PNG
```

## Notes About File Names

Because the project uses Vite imports, file names and folder names must match exactly. Capitalization, spaces, and extensions matter.

For fewer path issues, it is recommended to avoid special characters such as:

```txt
#
&
?
```

A safer file naming style is:

```txt
front-row-poster-1.jpg
julian-headshot.jpg
award-photo-01.jpg
```

## Main Components

### `NavBar.jsx`

Provides navigation links using React Router.

### `Home.jsx`

Displays the main Front Row title image and a trailer button.

### `AboutSection.jsx`

Displays the logline, poster, synopsis, inspiration, and key film details.

### `CastSection.jsx`

Displays cast members with image cards. Clicking a cast image flips the card to show the actor biography.

### `CrewSection.jsx`

Displays crew member cards with biographies and headshots.

### `AwardSection.jsx`

Displays award recognition and a carousel of award images.

### `GallerySection.jsx`

Displays a main featured image and a clickable thumbnail grid. Includes image enlargement and arrow navigation.

### `CreditSection.jsx`

Displays production credits, departments, catering credit, and website developer credit.

### `FooterSection.jsx`

Displays the site footer with matching neon styling.

## Design Theme

The website uses a visual theme inspired by:

- Nightclubs
- Comedy clubs
- Stage spotlights
- Neon signs
- Movie marquees
- Purple, pink, gold, and black lighting

Common design elements include:

- Dark gradient backgrounds
- Neon text shadows
- Glass-style cards
- Gold highlight borders
- Spotlight gradients
- Hover effects
- Responsive layouts

## Troubleshooting

### Failed to resolve import

If Vite says an import does not exist, check that the path, capitalization, spacing, and extension match the actual file exactly.

Example:

```jsx
import image from "../photo assets/Home Page/fr title.jpg";
```

The file must exist exactly at:

```txt
client/src/photo assets/Home Page/fr title.jpg
```

### `import.meta.glob` error

Vite only accepts one pattern argument or an array of patterns, plus an optional options object.

Correct:

```jsx
const images = import.meta.glob(
  [
    "../photo assets/Gallery Page/BTS/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
    "../photo assets/Gallery Page/Stills/DaVinci Stills/*.{jpg,jpeg,png,JPG,JPEG,PNG}"
  ],
  {
    eager: true,
    query: "?url",
    import: "default"
  }
);
```

Incorrect:

```jsx
import.meta.glob("path-one", "path-two", options);
```

### Page has unwanted spacing

Check these files:

```txt
client/src/App.css
client/src/index.css
client/src/css/Home.css
```

Make sure default Vite styles like `max-width`, `margin: auto`, or large padding are removed from `#root`.

## Credits

**Film:** Front Row  
**Written and Directed by:** Julian Rodriguez  
**Produced by:** Sydney Simmons  
**Music by:** Lucas Buck  
**Website Developed by:** Ryan Dong

## License

This project is for the Front Row film website. All film-related text, images, and media should be used only with permission from the project owner or production team.