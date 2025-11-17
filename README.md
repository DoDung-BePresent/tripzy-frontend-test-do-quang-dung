# Tripzy Frontend

Hi! This is a technical interview test for Tripzy, built with Next.js, Ant Design v5, and Tailwind CSS.

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Start production server

```bash
npm start
```

## Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **UI**: React
- **Styling**: Tailwind CSS
- **Library component**: Ant Design (v5)
- **Icons**: Custom SVG Icons

## Key Technical Decisions

### Why I chose Next.js & TypeScript

I chose Next.js because it provides a powerful React experience with routing, has a clear and easy-to-use system structure, and optimizes for SEO with flexible rendering options (SSR, SSG, ISR). TypeScript is used to provide type safety and improve the developer experience.

### About Component UI

For this project, I chose Ant Design as the primary component library. It offers a rich set of high-quality components that cover complex use cases like Date Pickers and advanced Select inputs out-of-the-box. This allows for rapid development while ensuring a consistent and professional look. The components are also highly customizable through its theming provider and styling APIs, which I've used to align the UI with the project's design requirements.

## Demo

> [Vercel Demo Link](https://tripzy-frontend-test-do-quang-dung.vercel.app/)

## Folder Structure

- `app/` - The Next.js app directory. It contains `globals.css`, which defines reusable color variables and global styles.
- `components/` - Contains all React components.
  - `ui/` - This directory is key to the project's architecture. It holds **wrapper components** designed to customize Ant Design's default components. Each component (e.g., `date-picker`, `select`, `input-number`, v.v) is organized into its own folder, which includes:
    - `index.tsx`: The wrapper component that imports the original Ant Design component and applies custom props, structure, and logic.
    - `style.css`: A dedicated CSS file for component-specific style overrides.
- `constants/` - Contains static data such as `locations.ts` and `icons.ts`.
- `data/` - Contains local JSON data files.
- `assets/icons/` - Contains all SVG icon files.
- `libs/` - Contains utility functions.
- `providers/` - Contains global context providers. The `ant-config-provider.tsx` file is central to the styling strategy, setting up a global theme for all Ant Design components and using color variables from `globals.css` to ensure design system consistency.

---

Feel free to fork or clone and run locally!
