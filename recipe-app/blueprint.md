
# Project Blueprint: Smart Recipe Finder

## Overview
A vibrant, interactive web application that helps users decide what to cook based on their available time, ingredients, and preferred cuisine.

## Features
- **Smart Filtering**: Filter by Category (Western/Chinese), Difficulty (Easy/Medium/Hard), and Max Cooking Time.
- **Ingredient Matching**: 
    - **Custom Ingredients**: Input specific items you have in your fridge.
    - **Common Pantry Items**: Interactive chips for popular items (Egg, Garlic, Rice, etc.) for one-click selection.
- **Randomize/Shuffle**: Quickly find a random recipe that fits your current constraints.
- **Responsive Design**: Mobile-friendly layout with modern typography and animations.
- **Day/Night Theme**: Persistent theme switching with a sleek floating toggle.

## Tech Stack
- **HTML5**: Semantic structure.
- **CSS3**: Modern layouts using CSS Grid, logical properties, and theme variables.
- **JavaScript (ES Modules)**: Modular code structure with Web Components.
- **Custom Elements**: `<recipe-finder>` and `<theme-toggle>`.

## Data Structure
Recipes are stored in `recipes.js` with the following attributes:
- `id`: Unique identifier.
- `name`: Dish title.
- `category`: Cuisine type.
- `difficulty`: Easy, Medium, or Hard.
- `time`: Preparation + cooking time in minutes.
- `ingredients`: List of required items.
- `instructions`: Step-by-step guide.

## Design Philosophy
- **Vibrant & Playful**: Warm colors and bouncy animations to make cooking feel fun.
- **Aesthetic**: Clean cards with deep shadows and clear visual hierarchy.
- **User-Centric**: Minimal steps to get a result—just click "Shuffle"!
