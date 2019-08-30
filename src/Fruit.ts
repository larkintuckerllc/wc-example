import { Location, Router } from '@vaadin/router';

const handleClick = (): void => {
  Router.go('/');
};

class Fruit extends HTMLElement {
  private rootHomeEl: HTMLDivElement;

  private rootValueEl: HTMLDivElement;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });
    const rootEl = document.createElement('div');

    // HOME
    this.rootHomeEl = document.createElement('div');
    this.rootHomeEl.textContent = 'Home';
    this.rootHomeEl.setAttribute('style', 'text-decoration: underline; cursor: pointer;');
    rootEl.appendChild(this.rootHomeEl);

    // TEXT
    const rootTextEl = document.createElement('div');
    rootTextEl.textContent = 'Hello Fruit';
    rootEl.appendChild(rootTextEl);

    // TEXT
    this.rootValueEl = document.createElement('div');
    this.rootValueEl.textContent = '';
    rootEl.appendChild(this.rootValueEl);

    shadow.appendChild(rootEl);
  }

  public onAfterEnter(location: Location): void {
    const { id } = location.params;
    if (id === undefined) {
      return;
    }
    this.rootValueEl.textContent = id;
  }

  public connectedCallback(): void {
    this.rootHomeEl.addEventListener('click', handleClick);
  }

  public disconnectedCallback(): void {
    this.rootHomeEl.removeEventListener('click', handleClick);
  }
}

window.customElements.define('hello-fruit', Fruit);
