# Magic Game

A fun and engaging memory card matching game built with Next.js. Test your memory skills by matching pairs of magical character cards!

## 🎮 About

Magic Game is a classic memory card game where players flip cards to find matching pairs. The game features beautiful character cards including mages, knights, archers, and many more fantasy characters. Challenge yourself to complete the game with the fewest moves and fastest time!

## ✨ Features

- **Memory Matching**: Flip cards to find matching pairs
- **Move Counter**: Track your progress with a move counter
- **Timer**: See how fast you can complete the game
- **Beautiful UI**: Modern, responsive design with smooth animations
- **Game Over Popup**: Celebrate your victory with a completion screen
- **Reset Functionality**: Start a new game anytime

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd memoryGame
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to start playing!

## 🎯 How to Play

1. Click on any card to flip it and reveal the character
2. Click on another card to find its match
3. If the cards match, they stay flipped
4. If they don't match, they flip back after a moment
5. Continue until all pairs are matched!
6. Try to complete the game with as few moves as possible

## 🛠️ Built With

- [Next.js](https://nextjs.org) - React framework
- [React](https://react.dev) - UI library
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [shadcn/ui](https://ui.shadcn.com) - UI components

## 📦 Project Structure

```
memoryGame/
├── app/
│   ├── components/
│   │   ├── MagicGame.tsx      # Main game component
│   │   ├── GameOverPopup.tsx  # Game completion popup
│   │   └── Header.tsx         # Game header
│   └── page.tsx               # Main page
├── lib/
│   └── cards.ts               # Card logic and shuffling
└── public/
    └── img/                   # Character card images
```

## 🚢 Deployment

The easiest way to deploy Magic Game is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy with one click!

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📝 License

This project is private and not licensed for public use.

---

Enjoy playing Magic Game! 🎴✨
