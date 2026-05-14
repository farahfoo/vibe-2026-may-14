import { recipes } from './recipes.js';

class AppNav extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const activeApp = this.getAttribute('active') || '';
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: fixed;
          top: 1.2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
        }
        nav {
          background: var(--card-bg, #fff);
          padding: 0.4rem;
          border-radius: 40px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          display: flex;
          gap: 0.3rem;
          border: 1px solid rgba(0,0,0,0.05);
          backdrop-filter: blur(10px);
        }
        a {
          text-decoration: none;
          padding: 0.6rem 1.2rem;
          border-radius: 30px;
          font-size: 0.85rem;
          font-weight: 800;
          color: var(--text-color, #333);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        a:hover { background: rgba(0,0,0,0.05); transform: translateY(-1px); }
        a.active {
          background: var(--accent-color, #ff6b6b);
          color: white;
          box-shadow: 0 4px 12px rgba(255,107,107,0.3);
        }
      </style>
      <nav>
        <a href="/recipe-app/" class="${activeApp === 'recipe' ? 'active' : ''}">🍳 Recipes</a>
        <a href="/toto-app/" class="${activeApp === 'toto' ? 'active' : ''}">🔢 Toto</a>
        <a href="/vision-app/" class="${activeApp === 'vision' ? 'active' : ''}">🤖 Vision</a>
        <a href="/" style="opacity: 0.6">🏠</a>
      </nav>
    `;
  }
}

customElements.define('app-nav', AppNav);

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
    this.commonIngredients = ["Egg", "Garlic", "Onion", "Rice", "Pasta", "Beef", "Chicken", "Tomato", "Potato", "Cheese"];
    this.state = {
      category: 'All',
      difficulty: 'All',
      maxTime: 60,
      typedIngredients: [],
      selectedCommon: new Set(),
      currentRecipe: null,
      recommendations: []
    };
    this.lastRecipeId = null;
  }

  connectedCallback() {
    this.generateDailyRecs();
    this.render();
  }

  generateDailyRecs() {
    const hour = new Date().getHours();
    let mealTime = "Dinner";
    if (hour < 11) mealTime = "Breakfast";
    else if (hour < 16) mealTime = "Lunch";

    const weather = Math.random() > 0.5 ? "Rainy" : "Sunny";
    
    let filtered = recipes.filter(r => r.tags.includes(mealTime));
    if (filtered.length === 0) filtered = recipes;

    this.state.recommendations = filtered.sort(() => 0.5 - Math.random()).slice(0, 2);
    this.state.mealTime = mealTime;
    this.state.weather = weather;
  }

  updateFilter(key, value) {
    this.state[key] = value;
  }

  updateTypedIngredients(value) {
    this.state.typedIngredients = value.split(',').map(i => i.trim().toLowerCase()).filter(i => i);
  }

  toggleCommonIngredient(ing) {
    const lowerIng = ing.toLowerCase();
    if (this.state.selectedCommon.has(lowerIng)) {
      this.state.selectedCommon.delete(lowerIng);
    } else {
      this.state.selectedCommon.add(lowerIng);
    }
    this.renderCommonChips();
  }

  get allIngredients() {
    return [...new Set([...this.state.typedIngredients, ...this.state.selectedCommon])];
  }

  findRecipes() {
    const userIngredients = this.allIngredients;
    let filtered = recipes.filter(r => {
      const matchCat = this.state.category === 'All' || r.category === this.state.category;
      const matchDiff = this.state.difficulty === 'All' || r.difficulty === this.state.difficulty;
      const matchTime = r.time <= this.state.maxTime;
      
      let score = 0;
      if (userIngredients.length > 0) {
        userIngredients.forEach(userIng => {
          if (r.ingredients.some(recipeIng => recipeIng.name.toLowerCase().includes(userIng))) {
            score++;
          }
        });
        r.matchScore = score;
      } else {
        r.matchScore = 0;
      }

      return matchCat && matchDiff && matchTime;
    });

    // Remove the last shown recipe to avoid immediate repeats
    if (filtered.length > 1) {
      filtered = filtered.filter(r => r.id !== this.lastRecipeId);
    }

    if (filtered.length === 0) {
      this.state.currentRecipe = null;
    } else {
      // Prioritize match score if searching by ingredient
      const pool = userIngredients.length > 0 
        ? filtered.sort((a, b) => b.matchScore - a.matchScore).slice(0, 3)
        : filtered;
      
      const newRecipe = pool[Math.floor(Math.random() * pool.length)];
      this.state.currentRecipe = newRecipe;
      this.lastRecipeId = newRecipe.id;
    }
    this.renderRecipe();
  }

  selectRecipe(recipe) {
    this.state.currentRecipe = recipe;
    this.lastRecipeId = recipe.id;
    this.renderRecipe();
    this.shadowRoot.getElementById('display').scrollIntoView({ behavior: 'smooth' });
  }

  renderCommonChips() {
    const container = this.shadowRoot.getElementById('common-chips');
    if (!container) return;
    container.innerHTML = this.commonIngredients.map(ing => {
      const active = this.state.selectedCommon.has(ing.toLowerCase()) ? 'active' : '';
      return `<span class="chip ${active}" onclick="this.getRootNode().host.toggleCommonIngredient('${ing}')">${ing}</span>`;
    }).join('');
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .container { display: grid; gap: 2rem; }
        
        .recs-section {
          background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
          padding: 1.5rem;
          border-radius: 20px;
          color: white;
          box-shadow: var(--card-shadow);
        }
        .recs-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
        .recs-title { margin: 0; font-size: 1.2rem; }
        .weather-tag { background: rgba(255,255,255,0.2); padding: 4px 10px; border-radius: 10px; font-size: 0.8rem; }
        .recs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .rec-item {
          background: rgba(255,255,255,0.15);
          padding: 1rem;
          border-radius: 12px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .rec-item:hover { background: rgba(255,255,255,0.25); }
        .rec-name { font-weight: 700; display: block; }
        .rec-meta { font-size: 0.8rem; opacity: 0.9; }

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
        .filter-group.full-width { grid-column: 1 / -1; }
        label { font-weight: 700; font-size: 0.9rem; color: var(--accent-color); text-transform: uppercase; }
        select, input {
          padding: 0.8rem;
          border: 2px solid #eee;
          border-radius: 10px;
          font-family: inherit;
          background: var(--card-bg);
          color: var(--text-color);
        }
        .chips-container { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 5px; }
        .chip {
          padding: 6px 14px;
          background: #f1f2f6;
          color: #2d3436;
          border-radius: 20px;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s;
          border: 2px solid transparent;
        }
        .chip:hover { transform: translateY(-2px); border-color: var(--accent-color); }
        .chip.active { background: var(--accent-color); color: white; border-color: var(--accent-color); font-weight: 700; }

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
        
        .recipe-display { min-height: 300px; display: flex; justify-content: center; align-items: center; }
        .recipe-card {
          background: var(--card-bg);
          padding: 2.5rem;
          border-radius: 24px;
          box-shadow: var(--card-shadow);
          width: 100%;
          animation: slideIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        @keyframes slideIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .recipe-header {
          margin-bottom: 1.5rem;
          border-bottom: 2px dashed #eee;
          padding-bottom: 1rem;
        }
        .recipe-title { margin: 0; font-size: 1.8rem; }
        .recipe-source { font-style: italic; font-size: 0.9rem; opacity: 0.6; display: block; margin-top: 0.2rem; }
        .tags { display: flex; gap: 0.5rem; margin-top: 0.8rem; }
        .tag { padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; color: white; }
        .tag-cat { background: var(--secondary-color); }
        .tag-time { background: #a29bfe; }
        .tag-diff.Easy { background: var(--difficulty-easy); }
        .tag-diff.Medium { background: var(--difficulty-medium); }
        .tag-diff.Hard { background: var(--difficulty-hard); }

        .hero-container {
          margin: 1.5rem 0;
          border-radius: 20px;
          overflow: hidden;
          height: 250px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }
        .hero-img { width: 100%; height: 100%; object-fit: cover; }

        h3 { color: var(--accent-color); margin: 1.5rem 0 0.5rem 0; }
        .ing-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 0.8rem;
          margin-top: 1rem;
        }
        .ing-item {
          display: flex;
          justify-content: space-between;
          background: #f8f9fa;
          padding: 0.8rem 1.2rem;
          border-radius: 10px;
          font-size: 0.95rem;
        }
        [data-theme="dark"] .ing-item { background: #3d4244; }
        .ing-name { font-weight: 600; }
        .ing-amount { color: var(--accent-color); font-weight: 800; font-size: 0.85rem; }

        .steps-container { display: grid; gap: 1.5rem; margin-top: 1rem; }
        .step {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 1.5rem;
          background: #f8f9fa;
          padding: 1.2rem;
          border-radius: 16px;
          border-left: 5px solid var(--accent-color);
        }
        [data-theme="dark"] .step { background: #3d4244; }
        .step-image { width: 120px; height: 100px; object-fit: cover; border-radius: 12px; }
        .step-content { display: flex; flex-direction: column; gap: 0.4rem; }
        .step-number { font-weight: 800; font-size: 0.9rem; color: var(--accent-color); text-transform: uppercase; display: flex; align-items: center; gap: 0.5rem; }
        .step-time { font-size: 0.75rem; font-weight: 700; color: #a29bfe; background: rgba(162, 155, 254, 0.1); padding: 2px 8px; border-radius: 10px; }
        .step-desc { line-height: 1.5; font-size: 0.95rem; margin: 0; opacity: 0.9; }
        .no-recipe { text-align: center; opacity: 0.5; font-style: italic; }
      </style>
      <div class="container">
        <div class="recs-section">
          <div class="recs-header">
            <h2 class="recs-title">✨ Recommended for ${this.state.mealTime} in SG</h2>
            <span class="weather-tag">☁️ ${this.state.weather} Choice</span>
          </div>
          <div class="recs-grid" id="recs-grid">
            ${this.state.recommendations.map(r => `
              <div class="rec-item" data-recipe-id="${r.id}">
                <span class="rec-name">${r.name}</span>
                <span class="rec-meta">${r.time}m • ${r.difficulty}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="filters">
          <div class="filter-group">
            <label>Cuisine</label>
            <select id="category-filter">
              <option>All</option>
              <option>Western</option>
              <option>Chinese</option>
            </select>
          </div>
          <div class="filter-group">
            <label>Difficulty</label>
            <select id="difficulty-filter">
              <option>All</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>
          <div class="filter-group">
            <label>Max Time (mins)</label>
            <input type="number" id="time-filter" value="60" min="5" step="5">
          </div>
          <div class="filter-group">
            <label>Custom Ingredients</label>
            <input type="text" id="ingredients-filter" placeholder="e.g. lemon, basil">
          </div>
          <div class="filter-group full-width">
            <label>Common Pantry Items</label>
            <div class="chips-container" id="common-chips"></div>
          </div>
          <button class="shuffle-btn" id="shuffle-btn">
            🔀 Find Random Recipe
          </button>
        </div>
        <div class="recipe-display" id="display">
          <div class="no-recipe">Click a recommendation or shuffle for a surprise!</div>
        </div>
      </div>
    `;
    this.setupEventListeners();
    this.renderCommonChips();
  }

  setupEventListeners() {
    this.shadowRoot.getElementById('category-filter').addEventListener('change', (e) => this.updateFilter('category', e.target.value));
    this.shadowRoot.getElementById('difficulty-filter').addEventListener('change', (e) => this.updateFilter('difficulty', e.target.value));
    this.shadowRoot.getElementById('time-filter').addEventListener('change', (e) => this.updateFilter('maxTime', parseInt(e.target.value)));
    this.shadowRoot.getElementById('ingredients-filter').addEventListener('input', (e) => this.updateTypedIngredients(e.target.value));
    this.shadowRoot.getElementById('shuffle-btn').addEventListener('click', () => this.findRecipes());
    
    this.shadowRoot.getElementById('recs-grid').addEventListener('click', (e) => {
      const item = e.target.closest('.rec-item');
      if (item) {
        const id = parseInt(item.dataset.recipeId);
        const recipe = recipes.find(r => r.id === id);
        this.selectRecipe(recipe);
      }
    });
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
          <h2 class="recipe-title">${r.name}</h2>
          <span class="recipe-source">${r.source}</span>
          <div class="tags">
            <span class="tag tag-cat">${r.category}</span>
            <span class="tag tag-diff ${r.difficulty}">${r.difficulty}</span>
            <span class="tag tag-time">${r.time} mins</span>
          </div>
        </div>
        
        <div class="hero-container">
          <img src="${r.heroImage}" alt="${r.name}" class="hero-img">
        </div>

        <h3>🛒 Ingredients & Amounts</h3>
        <div class="ing-list">
          ${r.ingredients.map(i => `
            <div class="ing-item">
              <span class="ing-name">${i.name}</span>
              <span class="ing-amount">${i.amount}</span>
            </div>
          `).join('')}
        </div>
        <h3>👨‍🍳 Step-by-Step Guide</h3>
        <div class="steps-container">
          ${r.steps.map((step, index) => `
            <div class="step">
              <img src="${step.image}" alt="Step ${index + 1}" class="step-image">
              <div class="step-content">
                <span class="step-number">Step ${index + 1} <span class="step-time">${step.time}</span></span>
                <p class="step-desc">${step.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
}

customElements.define('recipe-finder', RecipeFinder);
