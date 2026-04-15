# 🚀 Next.js Practice App

A feature-rich, full-stack-ready web application built with **Next.js 14 (App Router)**, showcasing modern web development patterns, multi-layout architecture, dynamic routing, and best practices in React ecosystem.

🌐 **Live Demo:** [next-js-practice-app-two.vercel.app](https://next-js-practice-app-two.vercel.app/)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 14** | React framework with App Router |
| **React** | UI library & client components |
| **Tailwind CSS** | Utility-first CSS styling |
| **DaisyUI** | Tailwind component library |
| **React Icons** | Icon library |
| **Context API** | Global state & data sharing |
| **Vercel** | Deployment & hosting |


---

## ✨ Features & Concepts

### 🗂️ Multi-Layout Architecture
- **Root Layout** (`layout.js`) — wraps the entire application with global navigation, footer, and providers.
- **Dashboard Layout** — a separate layout for the dashboard route group `(dashboard)`, isolated from the main layout.
- **Nested Layouts** — blog detail pages use their own scoped layout inside `[blogId]/layout.jsx`.

### 🔀 Routing
- **Route Groups** — `(dashboard)` and `(main)` used to organize routes without affecting URL structure.
- **Nested Routing** — deeply nested pages like `/blogs/[blogId]` with their own layouts.
- **Dynamic Routing** — `[blogId]` segment enables dynamic blog post pages with unique URLs.

### 🖼️ Image Optimization
- Uses Next.js `<Image />` component for automatic optimization, lazy loading, and responsive sizing.
- **Remote Image Imports** — configured `next.config.js` to allow images from external domains.

### 🔗 Linking & Navigation
- Uses Next.js `<Link />` component for client-side navigation without full page reloads.
- Active link highlighting and programmatic navigation with `useRouter`.

### 📦 Context API
- Global context created in the `/context` folder.
- Used to **fetch data once** and **share it across components** — e.g., blog posts consumed by multiple pages/components without prop drilling.

### 🧩 Client Components
- Selective use of `"use client"` directive for interactive components.
- Clear separation between **Server Components** (default, for data fetching & SEO) and **Client Components** (for interactivity, state, and browser APIs).

### 🏷️ Metadata & SEO
- Page-level `metadata` exports for dynamic `<title>`, `<meta description>`, and Open Graph tags.
- Improves SEO and link sharing across all routes.

### 🚫 Custom Not Found Page
- `not-found.jsx` provides a branded, styled 404 experience instead of the default Next.js fallback.

### 🎨 UI & Styling
- **Tailwind CSS** for rapid, responsive utility-first styling.
- **DaisyUI** component classes for pre-built, theme-able UI elements (cards, buttons, navbar, badges, etc.).
- **React Icons** for scalable, consistent iconography throughout the app.

---

## 📄 Pages

| Route | Description |
|---|---|
| `/` | Home — hero, features, testimonials, pricing |
| `/about` | About page |
| `/blogs` | Blog listing page |
| `/blogs/[blogId]` | Individual blog post (dynamic) |
| `/contact` | Contact page |
| `/dashboard` | Dashboard with its own layout |
| `*` | Custom 404 Not Found page |

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone <your-repo-url>
cd <project-folder>

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Key Configuration

**`next.config.js`** — Remote image domains are whitelisted here to allow `<Image />` to load external sources:

```js
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'your-image-domain.com',
      },
    ],
  },
};
```

---

## 📚 Concepts Practiced

- ✅ Next.js 14 App Router
- ✅ File-based routing
- ✅ Route groups with `(groupName)`
- ✅ Nested & dynamic routing
- ✅ Multi-layout system
- ✅ Server vs Client Components
- ✅ Context API for global state
- ✅ Next.js `<Image />` optimization
- ✅ Remote image imports
- ✅ `<Link />` navigation
- ✅ Page metadata & SEO
- ✅ Custom 404 page
- ✅ Tailwind CSS + DaisyUI
- ✅ React Icons
- ✅ Deployment on Vercel

---

## 🙌 Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vercel](https://vercel.com/)

---

> Built as a hands-on learning project to explore Next.js App Router patterns and modern React architecture. 🎯
