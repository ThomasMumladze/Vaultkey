# VaultKey

A React-based marketplace for game keys, gift cards, and digital products.

## Requirements

- Node.js `v24.12.0`
- npm

## Tech Stack

- React `19.2.6`
- TypeScript `6.0.2`
- Vite `8.0.12`
- SCSS / Sass
- React Router `7.15.1`
- Axios `1.16.1`
- React Icons `5.6.0`

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev / npm start

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

src/
├── assets/ # Static assets (images, icons, fonts)
├── components/ # Reusable UI components
│ ├── Button.tsx
│ ├── Card.tsx
│ └── Filter.tsx
├── constants/ # Static data & constants
│ └── filter.ts
├── hooks/ # Custom React hooks
│ └── usePagination.ts
├── page/ # Page-level components
│ ├── Home.tsx
│ ├── ProductDetails.tsx
│ └── ProductList.tsx
└── style/ # SCSS styles
├── components/
│ ├── \_button.scss
│ ├── \_card.scss
│ └── \_filter.scss
├── page/
│ ├── \_product-list.scss
│ └── \_productDetails.scss
├── \_index.scss
├── App.scss
└── index.scss

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start dev server         |
| `npm run build`   | Type-check and build     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |
