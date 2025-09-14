# Full Project File Map

This document serves as a reference for the complete file and directory structure of "Between: Fractured Promises".

---

📂 **Between_FracturedPromises/**
│
├── `README.md`                # Overview: game story, dev setup, play instructions, credits.
├── `story.twee`               # Main Twine script: all passages, dialogue trees, branching logic.
├── `story.json`               # Compiled Twine export: structured story in JSON for web build.
├── `index.html`               # Web build entry point: launches Twine in browser.
│
├── 📂 **css/**                     # Stylesheets controlling game’s visual design.
│   ├── `global.css`           # Base typography, layout grid, animations, transitions, color palette.
│   ├── `splash.css`           # Splash & intro animations: fade-in logo, shimmer effects.
│   ├── `home.css`             # Phone home UI styles: app grid, battery/wifi icons, wallpaper blur.
│   ├── `messenger.css`        # Messenger chat look: blue/white bubbles, typing dots animation.
│   ├── `makelove.css`         # Makelove chat app: burgundy neon theme, subtle pulse highlights.
│   ├── `profile.css`          # Profile screen: avatar frame, bio layout, badge styling.
│   ├── `gallery.css`          # Photo gallery: grid view, swipe animations, lightbox modal.
│   ├── `secret.css`           # Secret chats: dark theme (black/red), blurred lock-screen look.
│   ├── `settings.css`         # Settings screen: toggles, sliders, save/load design.
│   └── `endgame.css`          # Endgame sequences: shattered glass visuals, branching outcome overlays.
│
├── 📂 **scripts/**                 # JavaScript logic for interactivity & game systems.
│   ├── `ui.js`                # Core UI effects: smooth transitions, hover states, pulse icons.
│   ├── `chat.js`              # Chat logic: typing delays, message reveal pacing, notifications.
│   ├── `profile.js`           # Profile logic: Nadia customization (avatar, bio, badge).
│   ├── `save.js`              # Save/load system: trust/romance variables, autosaves.
│   ├── `gallery.js`           # Handles profile photo interactions: zoom, swipe, upload.
│   └── `sound.js`             # Audio triggers: message pings, typing hum, vibration effects.
│
├── 📂 **assets/**                  # All game media assets (visuals, audio, icons).
│   ├── 📂 **logo/**                # Branding for the game.
│   ├── 📂 **backgrounds/**         # Background images for each screen.
│   ├── 📂 **icons/**               # UI & app icons.
│   ├── 📂 **badges/**              # Verification badges for profiles.
│   ├── 📂 **avatars/**             # Character avatars (used in chat/profile).
│   ├── 📂 **gallery/**             # Photo galleries for each character.
│   ├── 📂 **fx/**                  # Sound effects.
│   └── 📂 **music/**               # Music & ambience.
│
├── 📂 **data/**                    # Player saves & game state variables.
│   ├── `variables.json`       # Tracks trust, romance, suspicion points, branching flags.
│   └── 📂 **saves/**               # Save slots for player progress.
│
├── 📂 **docs/**                    # Developer documentation.
│   ├── `design_doc.md`        # Game design: core loops, mechanics, UI breakdown.
│   ├── `file_map.md`          # This detailed file map reference.
│   ├── `character_bios.md`    # Full bios (Nadia, Ethan, Daniel, Claire, Olivia, Liam).
│   ├── `ui_guidelines.md`     # UI rules: padding, fonts, button shapes, visual consistency.
│   └── `endings.md`           # All branching endings, conditions, outcomes.
│
└── 📂 **episodes/**               # Individual story files for each episode.
    ├── `episode1.twee`
    ├── `episode2.twee`
    ├── `episode3.twee`
    ├── `episode4.twee`
    ├── `episode5.twee`
    └── `episode6.twee`
