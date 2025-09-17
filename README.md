# Babylon.js Showcase

A modern Babylon.js 3D showcase built with Vite and TypeScript.

## Features

- ⚡ **Vite** - Fast build tool and development server
- 🔷 **TypeScript** - Type-safe development
- 🎮 **Babylon.js** - Powerful 3D graphics engine
- 📱 **Responsive** - Full-screen 3D canvas that adapts to any screen size

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/babylon-js-jp-community/showcase.git
cd showcase
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
showcase/
├── src/
│   ├── main.ts          # Application entry point
│   ├── babylonScene.ts  # Babylon.js scene setup
│   ├── style.css        # Global styles
│   └── vite-env.d.ts    # Vite type definitions
├── public/
│   └── vite.svg         # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── README.md           # This file
```

## Technologies Used

- [Vite](https://vite.dev/) - Build tool
- [TypeScript](https://www.typescriptlang.org/) - Programming language
- [Babylon.js](https://www.babylonjs.com/) - 3D engine

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.
