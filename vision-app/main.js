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
          background: var(--accent-color, #6c5ce7);
          color: white;
          box-shadow: 0 4px 12px rgba(108, 92, 231, 0.3);
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
  connectedCallback() { this.render(); }
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
        :host { position: fixed; top: 1.5rem; right: 1.5rem; z-index: 1000; }
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
        }
      </style>
      <button onclick="this.getRootNode().host.toggleTheme()">
        ${this.theme === 'light' ? '🌙' : '☀️'}
      </button>
    `;
  }
}
customElements.define('theme-toggle', ThemeToggle);

class VisionClassifier extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.modelURL = "./my_model/";
    this.model = null;
    this.webcam = null;
    this.labelContainer = null;
  }

  connectedCallback() {
    this.render();
  }

  async init() {
    const btn = this.shadowRoot.getElementById('start-btn');
    btn.disabled = true;
    btn.textContent = "Loading Model...";

    try {
      const modelURL = this.modelURL + "model.json";
      const metadataURL = this.modelURL + "metadata.json";

      this.model = await window.tmImage.load(modelURL, metadataURL);
      const maxPredictions = this.model.getTotalClasses();

      const flip = true;
      this.webcam = new window.tmImage.Webcam(400, 400, flip);
      await this.webcam.setup();
      await this.webcam.play();
      
      this.shadowRoot.getElementById('webcam-placeholder').style.display = 'none';
      this.shadowRoot.getElementById('webcam-container').appendChild(this.webcam.canvas);
      
      this.labelContainer = this.shadowRoot.getElementById('label-container');
      for (let i = 0; i < maxPredictions; i++) {
        const bar = document.createElement('div');
        bar.className = 'prediction-bar';
        bar.innerHTML = \`<span class="label"></span><div class="progress-bg"><div class="progress-fill"></div></div><span class="value"></span>\`;
        this.labelContainer.appendChild(bar);
      }

      window.requestAnimationFrame(() => this.loop());
      btn.style.display = 'none';
    } catch (err) {
      console.error(err);
      alert("Error loading model. Make sure model.json, metadata.json and weights.bin are in the vision-app/my_model/ folder.");
      btn.disabled = false;
      btn.textContent = "Start AI Vision";
    }
  }

  async loop() {
    this.webcam.update();
    await this.predict();
    window.requestAnimationFrame(() => this.loop());
  }

  async predict() {
    const prediction = await this.model.predict(this.webcam.canvas);
    for (let i = 0; i < prediction.length; i++) {
      const bar = this.labelContainer.childNodes[i];
      const prob = (prediction[i].probability * 100).toFixed(0);
      bar.querySelector('.label').textContent = prediction[i].className;
      bar.querySelector('.progress-fill').style.width = prob + '%';
      bar.querySelector('.value').textContent = prob + '%';
    }
  }

  render() {
    this.shadowRoot.innerHTML = \`
      <style>
        .card {
          background: var(--card-bg);
          padding: 2rem;
          border-radius: 24px;
          box-shadow: var(--card-shadow);
          text-align: center;
        }
        #webcam-container {
          margin: 1.5rem auto;
          border-radius: 16px;
          overflow: hidden;
          width: 400px;
          height: 400px;
          background: #000;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
        }
        canvas { width: 100%; height: 100%; object-fit: cover; }
        #webcam-placeholder {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
          flex-direction: column;
          gap: 1rem;
        }
        .start-btn {
          background: var(--accent-color);
          color: white;
          border: none;
          padding: 1.2rem 2.5rem;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        .start-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 16px rgba(108, 92, 231, 0.4); }
        .start-btn:disabled { opacity: 0.7; cursor: wait; }

        #label-container {
          margin-top: 2rem;
          display: grid;
          gap: 0.8rem;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }
        .prediction-bar {
          display: grid;
          grid-template-columns: 100px 1fr 50px;
          align-items: center;
          gap: 1rem;
          text-align: left;
        }
        .label { font-weight: 700; font-size: 0.9rem; }
        .progress-bg { background: #eee; height: 10px; border-radius: 5px; overflow: hidden; }
        .progress-fill { background: var(--accent-color); height: 100%; width: 0%; transition: width 0.1s; }
        .value { font-weight: 800; font-size: 0.85rem; color: var(--accent-color); text-align: right; }
        [data-theme="dark"] .progress-bg { background: #3d4244; }
      </style>
      <div class="card">
        <div id="webcam-container">
          <div id="webcam-placeholder">
            <span>📷 Camera Preview</span>
            <p style="font-size: 0.8rem; opacity: 0.6">Click start to activate AI</p>
          </div>
        </div>
        <button class="start-btn" id="start-btn" onclick="this.getRootNode().host.init()">Start AI Vision</button>
        <div id="label-container"></div>
      </div>
    \`;
  }
}
customElements.define('vision-classifier', VisionClassifier);
