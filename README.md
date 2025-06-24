# Tic-Tac-Toe

A simple rendition of Tic-Tac-Toe game, adapted from a tutorial using Next.js, React and Tailwind CSS
.

## Features

- Interactive 3x3 board
- X and O turn tracking
- Winner and tie detection
- Modern React functional components
- UI using Radix UI Button

## Getting Started

### Prerequisites
- Node.js (v18 or newer recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/tic-tac-toe.git
   cd tic-tac-toe
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the Development Server

```sh
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Building for Production

```sh
npm run build
npm start
# or
yarn build
yarn start
```

## Project Structure

- `src/app/board.tsx` — Main game logic and UI
- `src/components/ui/button.tsx` — Custom button component
- `public/` — Static assets

## Customization

You can add features like a restart button, score tracking, or improved styling by editing `src/app/board.tsx`.

## License

MIT License
