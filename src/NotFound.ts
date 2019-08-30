class NotFound extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });
    const rootEl = document.createElement('div');
    rootEl.textContent = 'Hello NotFound';
    shadow.appendChild(rootEl);
  }
}

window.customElements.define('hello-not-found', NotFound);
