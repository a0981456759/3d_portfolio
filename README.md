# Interactive 3D Portfolio

An interactive personal portfolio built with React and Vite. The landing page renders a navigable 3D island scene, while separate pages present background, selected projects, and a contact form.

## What it includes

- Interactive island, sky, bird, and plane rendered with React Three Fiber.
- Scene-driven text stages and responsive model scaling for smaller screens.
- About and Projects pages with a list of work samples.
- Contact form using EmailJS and an animated 3D character.
- Optional background audio with an on/off control.
- Client-side routes for Home, About, Projects, and Contact.

## Stack

- **UI:** React 18, React Router 6, Tailwind CSS
- **3D:** Three.js through @react-three/fiber and @react-three/drei, @react-spring/three
- **Tooling:** Vite 5, ESLint
- **Contact:** @emailjs/browser (external hosted service)

## Run locally

Requirements: a recent Node.js release and npm.

1. Clone this repository.
2. Install dependencies: `npm install`
3. Start Vite: `npm run dev`
4. Open the localhost address printed by Vite.

Useful scripts:

- `npm run dev` — start development server
- `npm run build` — produce production assets in `dist/`
- `npm run preview` — preview the local build
- `npm run lint` — run ESLint

### Contact form configuration

The Contact page expects three Vite environment variables:

    VITE_APP_EMAILJS_SERVICE_ID=your_service_id
    VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_APP_EMAILJS_PUBLIC_KEY=your_emailjs_public_key

Put them in a local `.env.local` file (do not commit credentials). Values prefixed with `VITE_` are included in client-side builds, so use only EmailJS's intended public browser key and apply restrictions/rate limits in your EmailJS dashboard. Without these values the contact form cannot send messages.

## Code navigation

- `src/App.jsx` — route configuration
- `src/pages/Home.jsx` — 3D scene, audio, and stage state
- `src/models/` — island, sky, bird, plane, and other models
- `src/pages/Projects.jsx` — project gallery
- `src/pages/Contact.jsx` — EmailJS form and 3D interaction
- `src/components/` — navigation and shared UI

## Scope and verification

This is a client-side portfolio, not a backend application. The README documents features visible in source; a fresh production build, device/browser checks, and EmailJS delivery still need to be verified in your deployment environment. No test suite or CI status is claimed here.

## Portfolio talking points

3D interaction and lifecycle management, responsive scene design, routing, async form submission, and external API integration.
