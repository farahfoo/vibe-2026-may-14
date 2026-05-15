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
    this.modelURL = "https://teachablemachine.withgoogle.com/models/Ywn-ZzwDh/";
    this.model = null;
    this.webcam = null;
    this.uploadedImage = null;
    this.labelContainer = null;
  }

  connectedCallback() {
    this.render();
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@teachablemachine/image@latest/dist/teachablemachine-image.min.js';
    this.shadowRoot.appendChild(script);
  }

  async init(useWebcam = true) {
    this.shadowRoot.getElementById('initial-buttons').style.display = 'none';

    if (!this.model) {
        const modelURL = this.modelURL + "model.json";
        const metadataURL = this.modelURL + "metadata.json";
        this.model = await window.tmImage.load(modelURL, metadataURL);
    }

    this.labelContainer = this.shadowRoot.getElementById('label-container');
    this.labelContainer.innerHTML = '';
    const maxPredictions = this.model.getTotalClasses();
    for (let i = 0; i < maxPredictions; i++) {
        const bar = document.createElement('div');
        bar.className = 'prediction-bar';
        bar.innerHTML = \`<span class="label"></span><div class="progress-bg"><div class="progress-fill"></div></div><span class="value"></span>\`;
        this.labelContainer.appendChild(bar);
    }

    if (useWebcam) {
        this.shadowRoot.getElementById('reset-button-container').style.display = 'flex';
        const flip = true;
        this.webcam = new window.tmImage.Webcam(400, 400, flip);
        await this.webcam.setup();
        await this.webcam.play();
        
        const wcContainer = this.shadowRoot.getElementById('webcam-container');
        wcContainer.innerHTML = '';
        wcContainer.appendChild(this.webcam.canvas);

        window.requestAnimationFrame(() => this.loop());
    }
  }

  async loop() {
    if (this.webcam && this.webcam.canvas) {
      this.webcam.update();
      await this.predict(this.webcam.canvas);
      window.requestAnimationFrame(() => this.loop());
    } 
  }

  async predict(imageElement) {
    const prediction = await this.model.predict(imageElement);
    for (let i = 0; i < prediction.length; i++) {
      const bar = this.labelContainer.childNodes[i];
      const prob = (prediction[i].probability * 100).toFixed(0);
      bar.querySelector('.label').textContent = prediction[i].className;
      bar.querySelector('.progress-fill').style.width = prob + '%';
      bar.querySelector('.value').textContent = prob + '%';
    }
  }

  async handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    this.uploadedImage = new Image();
    this.uploadedImage.width = 400;
    this.uploadedImage.height = 400;
    this.uploadedImage.src = URL.createObjectURL(file);

    this.uploadedImage.onload = () => {
      const wcContainer = this.shadowRoot.getElementById('webcam-container');
      wcContainer.innerHTML = ''; 
      wcContainer.appendChild(this.uploadedImage);

      this.shadowRoot.getElementById('initial-buttons').style.display = 'none';
      this.shadowRoot.getElementById('assessment-buttons').style.display = 'flex';
      this.shadowRoot.getElementById('label-container').innerHTML = '';
    }
  }
  
  async assessUploadedImage() {
    if (!this.uploadedImage) return;

    const assessBtn = this.shadowRoot.getElementById('assess-btn');
    assessBtn.disabled = true;
    assessBtn.textContent = 'Assessing...';

    if (!this.model) {
        await this.init(false);
    }
    
    await this.predict(this.uploadedImage);

    assessBtn.textContent = 'Assess Picture';
    assessBtn.disabled = false;
  }

  reset() {
    if (this.webcam) {
        this.webcam.stop();
    }
    this.webcam = null;
    this.uploadedImage = null;
    this.render(); // Re-render to restore initial state
  }

  render() {
    this.shadowRoot.innerHTML = \`
      <style>
        .card { background: var(--card-bg); padding: 2rem; border-radius: 24px; box-shadow: var(--card-shadow); text-align: center; }
        #webcam-container { position: relative; margin: 1.5rem auto; border-radius: 16px; overflow: hidden; width: 400px; height: 400px; background: #000; box-shadow: 0 8px 24px rgba(0,0,0,0.1); }
        canvas, img { width: 100%; height: 100%; object-fit: cover; }
        #webcam-placeholder { height: 100%; display: flex; align-items: center; justify-content: center; color: #666; flex-direction: column; gap: 1rem; }
        .button-container { display: flex; justify-content: center; gap: 1rem; margin-top: 1rem; }
        .action-btn { background: var(--accent-color); color: white; border: none; padding: 1rem 2rem; border-radius: 12px; font-weight: 700; font-size: 1rem; cursor: pointer; transition: all 0.2s; }
        .action-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 16px rgba(108, 92, 231, 0.4); }
        .action-btn:disabled { opacity: 0.7; cursor: wait; }
        .reset-btn { background: #6c757d; }
        #label-container { margin-top: 2rem; display: grid; gap: 0.8rem; max-width: 500px; margin-left: auto; margin-right: auto; }
        .prediction-bar { display: grid; grid-template-columns: 100px 1fr 50px; align-items: center; gap: 1rem; text-align: left; }
        .label { font-weight: 700; font-size: 0.9rem; }
        .progress-bg { background: #eee; height: 10px; border-radius: 5px; overflow: hidden; }
        .progress-fill { background: var(--accent-color); height: 100%; width: 0%; transition: width 0.1s; }
        .value { font-weight: 800; font-size: 0.85rem; color: var(--accent-color); text-align: right; }
        [data-theme="dark"] .progress-bg { background: #3d4244; }
      </style>
      <div class="card">
        <div id="webcam-container">
          <div id="webcam-placeholder">
            <span>📷</span>
            <p style="font-size: 0.8rem; opacity: 0.6">Start with your webcam or upload a picture</p>
          </div>
        </div>
        <div class="button-container" id="initial-buttons">
          <button class="action-btn" id="start-btn" onclick="this.getRootNode().host.init(true)">Use Webcam</button>
          <input type="file" id="image-upload" accept="image/*" style="display: none;" onchange="this.getRootNode().host.handleImageUpload(event)">
          <button class="action-btn" onclick="this.getRootNode().host.shadowRoot.getElementById('image-upload').click()">Upload Picture</button>
        </div>
        <div class="button-container" id="assessment-buttons" style="display: none;">
            <button class="action-btn" id="assess-btn" onclick="this.getRootNode().host.assessUploadedImage()">Assess Picture</button>
            <button class="action-btn reset-btn" onclick="this.getRootNode().host.reset()">Reset</button>
        </div>
        <div class="button-container" id="reset-button-container" style="display: none;">
            <button class="action-btn reset-btn" onclick="this.getRootNode().host.reset()">Reset</button>
        </div>
        <div id="label-container"></div>
      </div>
    \`;
  }
}
customElements.define('vision-classifier', VisionClassifier);
