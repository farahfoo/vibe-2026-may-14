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
          left: 1.2rem;
          z-index: 1000;
        }
        .dropdown {
          position: relative;
          display: inline-block;
        }
        .dropbtn {
          background-color: #4CAF50;
          color: white;
          padding: 16px;
          font-size: 16px;
          border: none;
          cursor: pointer;
        }
        .dropdown-content {
          display: none;
          position: absolute;
          background-color: #f9f9f9;
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
          z-index: 1;
        }
        .dropdown-content a {
          color: black;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
        }
        .dropdown-content a:hover {background-color: #f1f1f1}
        .dropdown:hover .dropdown-content {
          display: block;
        }
        .dropdown:hover .dropbtn {
          background-color: #3e8e41;
        }
      </style>
      <div class="dropdown">
        <button class="dropbtn">Apps</button>
        <div class="dropdown-content">
          <a href="/recipe-app/">Recipes</a>
          <a href="/toto-app/">Toto</a>
          <a href="/custody-app/">Custody</a>
        </div>
      </div>
    `;
  }
}

customElements.define('app-nav', AppNav);
