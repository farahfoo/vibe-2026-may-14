# Project Blueprint

## Overview

This project is a collection of web applications that demonstrate the use of modern web technologies, including Web Components, to create interactive UI elements.

## Implemented Features

### Shared Navigation

- A shared navigation component (`shared/nav.js`) is used across all applications to provide a consistent user experience.
- The navigation menu is a dropdown that allows users to switch between the different applications.

### Toto Number Generator

- A Web Component that generates 6 unique random numbers (1-49).
- A button to generate an additional unique number.

### Smart Recipe Finder

- A Web Component that helps users find recipes based on ingredients, time, and difficulty.
- The application includes features like daily recommendations, filtering, and a recipe display.

### AI Vision Classifier

- A Web Component that uses a pre-trained model to classify images from a webcam or uploaded file.

### Disqus Comment Section

- All applications include a Disqus comment section to allow for user feedback and discussion.

## Current Plan

### Refactor Navigation

- **`shared/nav.js`**: Create a shared navigation component.
- **`custody-app/index.html`**: Add the shared navigation component.
- **`recipe-app/index.html`**: Update the navigation to use the shared component.
- **`toto-app/index.html`**: Update the navigation to use the shared component.
- **`vision-app/index.html`**: Update the navigation to use the shared component.
- **`recipe-app/main.js`**: Remove the old navigation component.
- **`toto-app/main.js`**: Remove the old navigation component.
- **`vision-app/main.js`**: Remove the old navigation component.
- **`blueprint.md`**: Update the blueprint to include the new feature.
