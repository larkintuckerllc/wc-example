class Nav extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });
    const rootEl = document.createElement('div');

    // TEXT
    const rootTextEl = document.createElement('div');
    rootTextEl.textContent = 'Hello Nav';
    rootEl.appendChild(rootTextEl);

    // SLOT
    const rootSlotEl = document.createElement('slot');
    rootEl.appendChild(rootSlotEl);

    shadow.appendChild(rootEl);
  }
}

window.customElements.define('hello-nav', Nav);
