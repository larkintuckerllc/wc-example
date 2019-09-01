class HelloWorld extends HTMLElement {
  static get observedAttributes(): string[] {
    return ['color', 'value'];
  }

  private color = 'black';

  private rootIncrementEl: HTMLElement;

  private rootIncrementExtEl: HTMLElement;

  private rootHelloEl: HTMLElement;

  private rootValueEl: HTMLElement;

  private rootValueExtEl: HTMLElement;

  private value = 0;

  private valueExt = 0;

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

    // INCREMENT
    this.rootIncrementEl = document.createElement('button');
    this.rootIncrementEl.textContent = 'increment';
    rootEl.appendChild(this.rootIncrementEl);

    // VALUE_EXT
    this.rootValueExtEl = document.createElement('div');
    this.rootValueExtEl.textContent = this.valueExt.toString();
    rootEl.appendChild(this.rootValueExtEl);

    // INCREMENT_EXT
    this.rootIncrementExtEl = document.createElement('button');
    this.rootIncrementExtEl.textContent = 'increment external';
    rootEl.appendChild(this.rootIncrementExtEl);

    shadow.appendChild(rootEl);
  }

  public attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
    const newValueInt = parseInt(newValue, 10);
    switch (name) {
      case 'color':
        this.color = newValue;
        this.rootHelloEl.setAttribute('style', `color: ${this.color}`);
        break;
      case 'value':
        if (Number.isNaN(newValueInt)) {
          return;
        }
        this.valueExt = newValueInt;
        this.rootValueExtEl.textContent = this.valueExt.toString();
        break;
      default:
    }
  }

  public connectedCallback(): void {
    this.rootIncrementEl.addEventListener('click', this.handleIncrementClick);
    this.rootIncrementExtEl.addEventListener('click', this.handleIncrementExtClick);
  }

  public disconnectedCallback(): void {
    this.rootIncrementEl.removeEventListener('click', this.handleIncrementClick);
    this.rootIncrementExtEl.removeEventListener('click', this.handleIncrementExtClick);
  }

  private handleIncrementClick = (): void => {
    this.value += 1;
    this.rootValueEl.textContent = this.value.toString();
  };

  private handleIncrementExtClick = (): void => {
    this.dispatchEvent(new CustomEvent('increment'));
  };
}

window.customElements.define('hello-world', HelloWorld);
