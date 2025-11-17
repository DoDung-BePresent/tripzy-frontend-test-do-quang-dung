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

## Project Overview

- **Framework:** Next.js (App Router, React 19)
- **UI Library:** Ant Design v5 (customized with ConfigProvider and Tailwind)
- **Styling:** Tailwind CSS (utility classes, custom variables in `globals.css`)
- **Icons:** Custom SVG icons via SVGR, organized in [`assets/icons`](assets/icons)
- **Forms:** Ant Design Form, Select, DatePicker, InputNumber, Checkbox, Button
- **State:** React hooks for local state management
- **Tabs:** Custom Tabs component ([`components/ui/tabs.tsx`](components/ui/tabs.tsx))
- **Data:** Locations loaded from local JSON ([`data/locations.json`](data/locations.json))
- **Routing:** Form submits to `/search` with query params, results shown using `useSearchParams`
- **Font:** Nunito Sans via `next/font/google`
- **Theme:** Ant Design theme tokens set in [`providers/ant-config-provider.tsx`](providers/ant-config-provider.tsx)

## Demo

> [Vercel Demo Link](https://your-vercel-demo-url.vercel.app)  
> _(Replace with your actual link if available)_

## Folder Structure

- `app/` - Next.js app directory
- `components/` - UI components (form, tabs, icons, etc.)
- `constants/` - Static data and icon registry
- `data/` - Local JSON data
- `assets/icons/` - SVG icon files
- `libs/` - Utility functions
- `providers/` - Context and config providers

---

Feel free to fork or clone and run locally!