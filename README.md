# Custom UGS (Unblocked Game Site)

A customized clone of the UGS project with updated CDN URLs and a curated game list.

## Changes Made

### 1. CDN URL Updates
- Updated all `cdn.jsdelivr.net` URLs to point to `random-coder2`'s repositories:
  - `https://cdn.jsdelivr.net/gh/random-coder2/ugs-singlefile`
  - `https://cdn.jsdelivr.net/gh/random-coder2/UGS-Assets`

### 2. Game List Cleanup
Removed all existing games except:
- **8 Ball Pool** - Classic pool game
- **Babel Tower** - Tower building game
- **Cookie Clicker** - Popular idle clicker game

### 3. Added New Games

#### Eaglercraft (Minecraft)
- Eaglercraft 1.12 Tuff Client
- Eaglercraft 1.8 (JS and WASM versions)

#### Casual / Puzzle
- 2048 - Number puzzle game
- Famidash - Rhythm-based platformer
- Geometry Dash (HTML version) - Rhythm-based platformer

#### Clicker / Idle
- Capybara Clicker - Cute animal clicker
- Spacebar Clicker - Simple clicker game
- BitLife - Life simulator

#### Action / Adventure
- Hobo (all 7 versions) - Fighting game series
- Among Us - Social deduction game
- Balatro - Poker roguelike
- Hollow Knight - Action-adventure platformer
- Defend Your Nuts (1 & 2) - Defense game
- Drive Mad - Driving game
- Monkey Mart - Store management game

#### Sports / Racing
- FIFA series - Soccer games
- Subway Surfers (all city variants) - Endless runner
- Basket Random - Basketball game

#### Horror / Puzzle
- FNAF (Five Nights at Freddy's 1-4) - Horror game series
- FNAE (Five Nights at Epstein's) - Horror parody

#### Tower Defense / Strategy
- Bloons Tower Defense (all versions) - Tower defense series

#### Duck & Ragdoll
- Duck Life (all versions) - Duck training/racing series
- Ragdoll Archers - Physics-based archery game

#### Pokémon
- All available Pokémon games and emulators (100+ titles)

#### Other
- Blackjack - Card game
- Soundboard - Audio tool

### 4. Proxy Integration
Added a Scramjet-based web proxy to the UI:
- Click the 🌐 button in the sidebar to access the proxy
- Browse the web securely through the integrated proxy
- Uses AllOrigins as a proxy service

## File Structure
```
ugs-custom/
├── AASINGLEFILE.html    # Main entry point
├── games.js             # Game list and UI generation
├── searchbut.js         # Search functionality
├── README.md            # This file
└── UGS-Files/           # Game HTML files
    ├── cl8ballpool.html
    ├── clbabeltower.html
    ├── clcookieclicker.html
    └── ... (200+ game files)
```

## Usage
1. Open `AASINGLEFILE.html` in a web browser
2. Use the sidebar to navigate to different letter sections
3. Click on a game to play
4. Use the 🌐 button to access the web proxy

## Credits
- Original UGS project by bubbls
- Customized version with CDN updates by random-coder2
- Game assets from various sources

## License
This is a customized version of the open-source UGS project. Original credits go to the respective game developers and the UGS project maintainers.
