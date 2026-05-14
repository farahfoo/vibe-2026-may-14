
# Project Blueprint

## Overview

This project is a modern web application featuring a Toto Number Generator with a toggleable Day and Night theme. It leverages Web Components, CSS variables, and modern web standards for a premium, responsive experience.

## Implemented Features

### Initial Setup
- **`index.html`**: Basic HTML structure, includes theme toggle and generator components.
- **`style.css`**: Global styles using CSS variables for theming and modern typography.
- **`main.js`**: Core logic and Web Component definitions.

### Toto Number Generator
- A Web Component that generates 6 unique random numbers (1-49).
- **Additional Number**: A "Generate 1 More" button to add a unique 7th number to the set.
- **Smart Generation**: 
    - Automatically includes at least **3 "Hot" or "High"** numbers in every draw.
    - **"Hot" Numbers**: Frequently appearing numbers from the past 3 months (e.g., 1, 3, 4, 6, 7, 8, 48).
    - **"High" Numbers**: Numbers in the top range (40-49).
- **Visual Cues**: Labeled badges for "Hot" and "High" numbers for quick identification.
- **Design**: Centered card layout with a modern, responsive design.
- **Interactivity**: Smooth animations and hover effects on generated numbers and the button.
- **Theme Support**: Uses global CSS variables to automatically adapt to light and dark modes.

### Day and Night Theme
- **`ThemeToggle` Component**: A floating UI element (top-right) that allows users to switch between light and dark themes.
- **Persistence**: Remembers user choice using `localStorage`.
- **System Preference**: Defaults to the user's system theme preference on first load.

## Technical Details

### CSS Variables
- `--bg-color`, `--text-color`, `--card-bg`, `--card-shadow`, etc.
- Seamless transitions applied to `background-color` and `color` properties.

### Web Components
- **Encapsulation**: Uses Shadow DOM for styles and structure.
- **Custom Elements**: `theme-toggle` and `toto-number-generator`.
