import { recipes } from './recipes.js';

class ThemeToggle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    this.applyTheme();
  }

  connectedCallback() {
    this.render();
  }

  applyTheme() {
    document.documentElement.dataset.theme = this.theme;
    localStorage.setItem('theme', this.theme);
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.applyTheme();
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: fixed;
          top: 1.5rem;
          right: 1.5rem;
          z-index: 1000;
        }
        button {
          background: var(--card-bg);
          border: 2px solid var(--accent-color);
          border-radius: 50%;
          width: 45px;
          height: 45px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          box-shadow: var(--card-shadow);
          transition: transform 0.2s, background-color var(--transition-speed);
        }
        button:hover { transform: scale(1.1); }
      </style>
      <button onclick="this.getRootNode().host.toggleTheme()">
        ${this.theme === 'light' ? '🌙' : '☀️'}
      </button>
    `;
  }
}

customElements.define('theme-toggle', ThemeToggle);

class RecipeFinder extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.state = {
      category: 'All',
      difficulty: 'All',
      maxTime: 60,
      ingredients: [],
      currentRecipe: null
    };
  }

  connectedCallback() {
    this.render();
  }

  updateFilter(key, value) {
    this.state[key] = value;
  }

  updateIngredients(value) {
    this.state.ingredients = value.split(',').map(i => i.trim().toLowerCase()).filter(i => i);
  }

  findRecipes() {
    const filtered = recipes.filter(r => {
      const matchCat = this.state.category === 'All' || r.category === this.state.category;
      const matchDiff = this.state.difficulty === 'All' || r.difficulty === this.state.difficulty;
      const matchTime = r.time <= this.state.maxTime;
      
      let score = 0;
      if (this.state.ingredients.length > 0) {
        this.state.ingredients.forEach(userIng => {
          if (r.ingredients.some(recipeIng => recipeIng.toLowerCase().includes(userIng))) {
            score++;
          }
        });
        r.matchScore = score;
      } else {
        r.matchScore = 0;
      }

      return matchCat && matchDiff && matchTime;
    });

    if (filtered.length === 0) {
      this.state.currentRecipe = null;
    } else {
      // Prioritize by match score if ingredients are provided
      const pool = this.state.ingredients.length > 0 
        ? filtered.sort((a, b) => b.matchScore - a.matchScore).slice(0, 3)
        : filtered;
      
      this.state.currentRecipe = pool[Math.floor(Math.random() * pool.length)];
    }
    this.renderRecipe();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .container {
          display: grid;
          gap: 2rem;
        }
        .filters {
          background: var(--card-bg);
          padding: 2rem;
          border-radius: 20px;
          box-shadow: var(--card-shadow);
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }
        .filter-group { display: flex; flex-direction: column; gap: 0.5rem; }
        label { font-weight: 700; font-size: 0.9rem; color: var(--accent-color); text-transform: uppercase; }
        select, input {
          padding: 0.8rem;
          border: 2px solid #eee;
          border-radius: 10px;
          font-family: inherit;
          background: var(--card-bg);
          color: var(--text-color);
        }
        .shuffle-btn {
          grid-column: 1 / -1;
          background: var(--accent-color);
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          transition: transform 0.2s, background-color 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        .shuffle-btn:hover { background: var(--accent-hover); transform: translateY(-2px); }
        .shuffle-btn:active { transform: translateY(0); }

        .recipe-display {
          min-height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .recipe-card {
          background: var(--card-bg);
          padding: 2.5rem;
          border-radius: 24px;
          box-shadow: var(--card-shadow);
          width: 100%;
          animation: slideIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .recipe-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          border-bottom: 2px dashed #eee;
          padding-bottom: 1rem;
        }
        .recipe-title { margin: 0; font-size: 1.8rem; }
        .tags { display: flex; gap: 0.5rem; margin-top: 0.5rem; }
        .tag {
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 700;
          color: white;
        }
        .tag-cat { background: var(--secondary-color); }
        .tag-time { background: #a29bfe; }
        .tag-diff.Easy { background: var(--difficulty-easy); }
        .tag-diff.Medium { background: var(--difficulty-medium); }
        .tag-diff.Hard { background: var(--difficulty-hard); }

        h3 { color: var(--accent-color); margin: 1.5rem 0 0.5rem 0; }
        ul { margin: 0; padding-left: 1.2rem; line-height: 1.6; }
        .instructions { line-height: 1.6; opacity: 0.9; }
        .no-recipe { text-align: center; opacity: 0.5; font-style: italic; }
      </style>
      <div class="container">
        <div class="filters">
          <div class="filter-group">
            <label>Cuisine</label>
            <select onchange="this.getRootNode().host.updateFilter('category', this.value)">
              <option>All</option>
              <option>Western</option>
              <option>Chinese</option>
            </select>
          </div>
          <div class="filter-group">
            <label>Difficulty</label>
            <select onchange="this.getRootNode().host.updateFilter('difficulty', this.value)">
              <option>All</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>
          <div class="filter-group">
            <label>Max Time (mins)</label>
            <input type="number" value="60" min="5" step="5" onchange="this.getRootNode().host.updateFilter('maxTime', parseInt(this.value))">
          </div>
          <div class="filter-group">
            <label>Ingredients I Have</label>
            <input type="text" placeholder="e.g. egg, beef, pasta" oninput="this.getRootNode().host.updateIngredients(this.value)">
          </div>
          <button class="shuffle-btn" onclick="this.getRootNode().host.findRecipes()">
            🔀 Find Random Recipe
          </button>
        </div>
        <div class="recipe-display" id="display">
          <div class="no-recipe">Click the button to find a random recipe!</div>
        </div>
      </div>
    `;
  }

  renderRecipe() {
    const display = this.shadowRoot.getElementById('display');
    if (!this.state.currentRecipe) {
      display.innerHTML = '<div class="no-recipe">No recipes found matching your criteria. Try loosening your filters!</div>';
      return;
    }

    const r = this.state.currentRecipe;
    display.innerHTML = `
      <div class="recipe-card">
        <div class="recipe-header">
          <div>
            <h2 class="recipe-title">${r.name}</h2>
            <div class="tags">
              <span class="tag tag-cat">${r.category}</span>
              <span class="tag tag-diff ${r.difficulty}">${r.difficulty}</span>
              <span class="tag tag-time">${r.time} mins</span>
            </div>
          </div>
        </div>
        <h3>🛒 Ingredients</h3>
        <ul>
          ${r.ingredients.map(i => `<li>${i}</li>`).join('')}
        </ul>
        <h3>👨‍🍳 Instructions</h3>
        <p class="instructions">${r.instructions}</p>
      </div>
    `;
  }
}

customElements.define('recipe-finder', RecipeFinder);
