
class NavBar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <nav class="fixed bottom-0 w-full z-50 flex justify-around items-center px-grid-margin-mobile pb-4 pt-2 bg-surface-container/90 backdrop-blur-md border-t border-outline-variant shadow-lg">
        <a href="/custody-app/option1.html" class="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer group">
          <span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
          <span class="font-label-mono text-label-mono">Custody</span>
        </a>
        <a href="/recipe-app/index.html" class="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer group">
          <span class="material-symbols-outlined" data-icon="restaurant">restaurant</span>
          <span class="font-label-mono text-label-mono">Recipe</span>
        </a>
        <a href="/toto-app/index.html" class="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer group">
          <span class="material-symbols-outlined" data-icon="pets">pets</span>
          <span class="font-label-mono text-label-mono">Toto</span>
        </a>
        <a href="/vision-app/index.html" class="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer group">
          <span class="material-symbols-outlined" data-icon="visibility">visibility</span>
          <span class="font-label-mono text-label-mono">Vision</span>
        </a>
      </nav>
    `;
  }
}

customElements.define('nav-bar', NavBar);
