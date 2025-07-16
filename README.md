# Game Maker Prefab Designer

A user-friendly interface for designing game prefabs for the Game Maker engine. This tool allows game developers to easily configure reusable game elements with interactive forms and helpful tooltips.

🎮 **[Live Demo](https://yourusername.github.io/game-maker-prefab-designer)**

![Game Maker Prefab Designer Screenshot](./screenshot.png)

## Features

- **10 Prefab Types**: Player, Platform, Item, Room, NPC, Door, Menu, Score, Controls, and UI
- **Interactive Configuration**: Functional dropdown menus and toggle switches for easy setup
- **Helpful Tooltips**: Info icons with explanations for each setting
- **Dark Theme**: Professional dark UI design matching the imported Figma design
- **Responsive Design**: Works on different screen sizes
- **Export Ready**: Generate JSON configurations for your game engine

## Prefab Types

### Core Game Elements

- **Player**: Configure movement, speed, actions, and sprites
- **Platform**: Set collision behavior, platform type, and visual appearance
- **Item**: Define collectible behavior, timers, and respawn settings
- **Room**: Configure camera angles, movement, dimensions, and physics

### Interactive Elements

- **NPC**: Set behavior patterns, dialogue, and interaction types
- **Door**: Configure destinations, unlock conditions, and trigger events
- **Menu**: Toggle UI options like restart, pause, sound controls
- **Score**: Define point sources, win conditions, and display settings
- **Controls**: Map keyboard inputs to game actions
- **UI**: Configure HUD elements like health bars, minimaps, and notifications

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/game-maker-prefab-designer.git
cd game-maker-prefab-designer
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

The built files will be in the `dist` directory.

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages:

### Automatic Deployment

1. Push to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your site will be available at `https://yourusername.github.io/game-maker-prefab-designer`

### Manual Deployment

```bash
npm run deploy
```

### Setup Steps for GitHub Pages

1. **Enable GitHub Pages**:

   - Go to your repository settings
   - Scroll to "Pages" section
   - Set source to "GitHub Actions"

2. **Update Repository Info**:

   - Replace `yourusername` in `package.json` with your GitHub username
   - Update the repository URL in `package.json`
   - Update the base URL in `vite.config.ts` if your repo name is different

3. **Configure Base Path** (if needed):
   - If your repository name is different from `game-maker-prefab-designer`
   - Update the `base` path in `vite.config.ts`

## Usage

1. **Select a Prefab Type**: Click on any of the sidebar options (Player, Platform, Item, etc.)
2. **Configure Settings**: Use the dropdown menus and toggles to set up your prefab
3. **Get Help**: Hover over the info (i) icons to see explanations for each setting
4. **Export Configuration**: The form data can be exported as JSON for use in your game engine

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Radix UI** - Accessible UI components
- **Vite** - Build tool and dev server
- **Lucide React** - Icons
- **GitHub Actions** - Automated deployment

## Project Structure

```
src/
├── components/
│   ├── icons/           # Custom SVG icons
│   ├── ui/             # Reusable UI components (shadcn/ui)
│   ├── FormField.tsx   # Form field components
│   ├── PrefabCard.tsx  # Card container component
│   └── PrefabDesigner.tsx # Main designer interface
├── imports/            # SVG path definitions
├── styles/
│   └── globals.css     # Global styles and Tailwind config
├── App.tsx            # Main application component
└── main.tsx           # Application entry point
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Roadmap

- [ ] Export to JSON functionality
- [ ] Import/save prefab configurations
- [ ] Variant management (multiple versions of each prefab)
- [ ] Preset templates for common game types
- [ ] Integration with popular game engines
- [ ] Custom prefab type creation

## Support

If you have questions or need help, please:

- Open an issue on GitHub
- Check the [documentation](./docs/)

---

Made with ❤️ for game developers