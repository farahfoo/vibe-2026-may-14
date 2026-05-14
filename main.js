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
          top: 2rem;
          right: 2rem;
          z-index: 1000;
        }
        button {
          background: var(--card-bg);
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          box-shadow: var(--card-shadow);
          transition: transform 0.2s, background-color var(--transition-speed);
        }
        button:hover {
          transform: scale(1.1);
        }
        button:active {
          transform: scale(0.95);
        }
        .icon {
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        [data-theme="dark"] .icon {
          transform: rotate(360deg);
        }
      </style>
      <button aria-label="Toggle Theme" onclick="this.getRootNode().host.toggleTheme()">
        <span class="icon">${this.theme === 'light' ? '🌙' : '☀️'}</span>
      </button>
    `;
  }
}

customElements.define('theme-toggle', ThemeToggle);

class TotoNumberGenerator extends HTMLElement {
  constructor() {
    super();
    this.hotNumbers = [1, 3, 4, 6, 7, 8, 48];
    this.highNumbers = [40, 41, 42, 43, 44, 45, 46, 47, 48, 49];
    
    const shadow = this.attachShadow({ mode: 'open' });
    this.currentNumbers = new Set();

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'wrapper');

    const title = document.createElement('h2');
    title.textContent = 'Toto Number Generator';

    const disclaimer = document.createElement('p');
    disclaimer.setAttribute('class', 'disclaimer');
    disclaimer.textContent = '* Popularity of numbers is based on Group 1 and 2 winning results from the past 3 months.';

    const numbersContainer = document.createElement('div');
    numbersContainer.setAttribute('class', 'numbers');

    const extraNumberContainer = document.createElement('div');
    extraNumberContainer.setAttribute('class', 'extra-number');

    const button = document.createElement('button');
    button.textContent = 'Generate Numbers';
    button.addEventListener('click', () => this.generateNumbers(numbersContainer, extraNumberContainer));

    const moreButton = document.createElement('button');
    moreButton.textContent = 'Generate 1 More';
    moreButton.id = 'more-button';
    moreButton.addEventListener('click', () => this.generateOneMore(extraNumberContainer));

    const style = document.createElement('style');
    style.textContent = `
      .wrapper {
        text-align: center;
        padding: 2.5rem;
        border-radius: 20px;
        box-shadow: var(--card-shadow);
        background-color: var(--card-bg);
        transition: background-color var(--transition-speed), box-shadow var(--transition-speed);
        max-width: 500px;
        width: 95%;
      }
      h2 {
        margin-top: 0;
        color: var(--text-color);
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }
      .disclaimer {
        font-size: 11px;
        color: var(--text-color);
        opacity: 0.6;
        margin: 0 0 20px 0;
        font-style: italic;
        line-height: 1.4;
      }
      .numbers, .extra-number {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 15px;
        margin: 30px 0;
      }
      .number-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
      }
      .number {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 54px;
        height: 54px;
        border-radius: 50%;
        background-color: var(--number-bg);
        color: var(--number-text);
        font-size: 20px;
        font-weight: 700;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        transition: transform 0.2s, background-color var(--transition-speed);
        position: relative;
      }
      .number:hover {
        transform: translateY(-3px);
      }
      .extra-number .number {
        background-color: #ffc107;
        color: #000;
      }
      .badge {
        font-size: 10px;
        font-weight: 800;
        padding: 2px 6px;
        border-radius: 10px;
        text-transform: uppercase;
        color: white;
        min-height: 14px;
      }
      .badge.hot { background-color: #ff4757; }
      .badge.high { background-color: #ffa502; }
      .badge.normal { visibility: hidden; }

      button {
        padding: 12px 28px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        border: none;
        border-radius: 12px;
        background-color: var(--accent-color);
        color: white;
        transition: background-color 0.2s, transform 0.1s;
        box-shadow: 0 4px 14px 0 rgba(0,118,255,0.39);
        margin: 5px;
      }
      button:hover {
        background-color: var(--accent-hover);
        transform: translateY(-1px);
      }
      button:active {
        transform: translateY(1px);
      }
      button:disabled {
        background-color: #ccc;
        cursor: not-allowed;
        box-shadow: none;
        transform: none;
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(title);
    wrapper.appendChild(disclaimer);
    wrapper.appendChild(numbersContainer);
    wrapper.appendChild(extraNumberContainer);
    wrapper.appendChild(button);
    wrapper.appendChild(moreButton);

    this.generateNumbers(numbersContainer, extraNumberContainer);
  }

  createNumberElement(num) {
    const numWrapper = document.createElement('div');
    numWrapper.setAttribute('class', 'number-container');

    const numElement = document.createElement('div');
    numElement.setAttribute('class', 'number');
    numElement.textContent = num;

    const badge = document.createElement('span');
    let type = 'normal';
    if (this.hotNumbers.includes(num)) {
      type = 'hot';
      badge.textContent = 'Hot';
    } else if (this.highNumbers.includes(num)) {
      type = 'high';
      badge.textContent = 'High';
    }
    badge.setAttribute('class', `badge ${type}`);

    numWrapper.appendChild(numElement);
    numWrapper.appendChild(badge);
    return numWrapper;
  }

  generateNumbers(container, extraContainer) {
    this.currentNumbers.clear();
    const hotAndHighPool = [...new Set([...this.hotNumbers, ...this.highNumbers])];
    
    while (this.currentNumbers.size < 3) {
      const randomHotHigh = hotAndHighPool[Math.floor(Math.random() * hotAndHighPool.length)];
      this.currentNumbers.add(randomHotHigh);
    }
    
    while (this.currentNumbers.size < 6) {
      const randomNumber = Math.floor(Math.random() * 49) + 1;
      this.currentNumbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(this.currentNumbers).sort((a, b) => a - b);

    container.innerHTML = '';
    extraContainer.innerHTML = '';
    for (const num of sortedNumbers) {
      container.appendChild(this.createNumberElement(num));
    }
  }

  generateOneMore(container) {
    let newNumber;
    do {
      newNumber = Math.floor(Math.random() * 49) + 1;
    } while (this.currentNumbers.has(newNumber));

    container.innerHTML = '';
    container.appendChild(this.createNumberElement(newNumber));
  }
}

customElements.define('toto-number-generator', TotoNumberGenerator);
