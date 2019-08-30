import { Router } from '@vaadin/router';

const handleAClick = (): void => {
  Router.go('/a');
};

const handleBClick = (): void => {
  Router.go('/b');
};

const handleFruitAClick = (): void => {
  Router.go('/fruit/a');
};

const handleFruitBClick = (): void => {
  Router.go('/fruit/b');
};

const handleNavAClick = (): void => {
  Router.go('/nav/a');
};

const handleNavBClick = (): void => {
  Router.go('/nav/b');
};

class Home extends HTMLElement {
  private rootAEl: HTMLDivElement;

  private rootBEl: HTMLDivElement;

  private rootFruitAEl: HTMLDivElement;

  private rootFruitBEl: HTMLDivElement;

  private rootNavAEl: HTMLDivElement;

  private rootNavBEl: HTMLDivElement;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });
    const rootEl = document.createElement('div');

    // A
    this.rootAEl = document.createElement('div');
    this.rootAEl.textContent = 'A';
    this.rootAEl.setAttribute('style', 'text-decoration: underline; cursor: pointer;');
    rootEl.appendChild(this.rootAEl);

    // B
    this.rootBEl = document.createElement('div');
    this.rootBEl.textContent = 'B';
    this.rootBEl.setAttribute('style', 'text-decoration: underline; cursor: pointer;');
    rootEl.appendChild(this.rootBEl);

    // NAV A
    this.rootNavAEl = document.createElement('div');
    this.rootNavAEl.textContent = 'Nav A';
    this.rootNavAEl.setAttribute('style', 'text-decoration: underline; cursor: pointer;');
    rootEl.appendChild(this.rootNavAEl);

    // NAV B
    this.rootNavBEl = document.createElement('div');
    this.rootNavBEl.textContent = 'Nav B';
    this.rootNavBEl.setAttribute('style', 'text-decoration: underline; cursor: pointer;');
    rootEl.appendChild(this.rootNavBEl);

    // FRUIT A
    this.rootFruitAEl = document.createElement('div');
    this.rootFruitAEl.textContent = 'Fruit A';
    this.rootFruitAEl.setAttribute('style', 'text-decoration: underline; cursor: pointer;');
    rootEl.appendChild(this.rootFruitAEl);

    // FRUIT B
    this.rootFruitBEl = document.createElement('div');
    this.rootFruitBEl.textContent = 'Fruit B';
    this.rootFruitBEl.setAttribute('style', 'text-decoration: underline; cursor: pointer;');
    rootEl.appendChild(this.rootFruitBEl);

    shadow.appendChild(rootEl);
  }

  public connectedCallback(): void {
    this.rootAEl.addEventListener('click', handleAClick);
    this.rootBEl.addEventListener('click', handleBClick);
    this.rootFruitAEl.addEventListener('click', handleFruitAClick);
    this.rootFruitBEl.addEventListener('click', handleFruitBClick);
    this.rootNavAEl.addEventListener('click', handleNavAClick);
    this.rootNavBEl.addEventListener('click', handleNavBClick);
  }

  public disconnectedCallback(): void {
    this.rootAEl.removeEventListener('click', handleAClick);
    this.rootBEl.removeEventListener('click', handleBClick);
    this.rootFruitAEl.removeEventListener('click', handleFruitAClick);
    this.rootFruitBEl.removeEventListener('click', handleFruitBClick);
    this.rootNavAEl.removeEventListener('click', handleNavAClick);
    this.rootNavBEl.removeEventListener('click', handleNavBClick);
  }
}

window.customElements.define('hello-home', Home);
