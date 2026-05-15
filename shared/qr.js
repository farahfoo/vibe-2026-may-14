class QRCode extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const text = this.getAttribute('text') || 'https://www.google.com';
    const size = this.getAttribute('size') || '128';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
        }
        img {
          width: ${size}px;
          height: ${size}px;
        }
      </style>
      <img src="https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(text)}" alt="QR Code">
    `;
  }
}

customElements.define('qr-code', QRCode);