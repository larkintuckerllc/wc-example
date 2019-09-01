class HelloWorld extends HTMLElement {
  static get observedAttributes(): string[] {
    return ['color'];
  }

  private color = 'black';

  private rootButtonEl: HTMLElement;

  private rootHelloEl: HTMLElement;

  private rootValueEl: HTMLElement;

  private value = 0;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });

    // STYLE
    const styleEl = document.createElement('style');
    styleEl.textContent = `
    #root {
      align-items: center;
      background-color: yellow;
      display: flex;
      flex-direction: column;
    }
    `;
    shadow.appendChild(styleEl);

    // ROOT
    const rootEl = document.createElement('div');
    rootEl.id = 'root';

    // HELLO
    this.rootHelloEl = document.createElement('div');
    this.rootHelloEl.setAttribute('style', `color: ${this.color}`);
    this.rootHelloEl.textContent = 'Hello World';
    rootEl.appendChild(this.rootHelloEl);

    // VALUE
    this.rootValueEl = document.createElement('div');
    this.rootValueEl.textContent = this.value.toString();
    rootEl.appendChild(this.rootValueEl);

    // BUTTON
    this.rootButtonEl = document.createElement('button');
    this.rootButtonEl.textContent = 'increment';
    rootEl.appendChild(this.rootButtonEl);

    shadow.appendChild(rootEl);
  }

  public attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
    switch (name) {
      case 'color':
        this.color = newValue;
        this.rootHelloEl.setAttribute('style', `color: ${this.color}`);
        break;
      default:
    }
  }

  public connectedCallback(): void {
    this.rootButtonEl.addEventListener('click', this.handleClick);
  }

  public disconnectedCallback(): void {
    this.rootButtonEl.removeEventListener('click', this.handleClick);
  }

  private handleClick = (): void => {
    this.value += 1;
    this.rootValueEl.textContent = this.value.toString();
  };
}

window.customElements.define('hello-world', HelloWorld);
