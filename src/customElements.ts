export class GreetingElement extends HTMLElement {
  constructor() {
    super();
    const element = document.createElement('div');
    element.textContent = this.getAttribute('message');
    this.appendChild(element);

    this.innerHTML = "aaaa";
  }

  static get observedAttributes() {
    return ['message'];
  }

  connectedCallback() {
    console.log('connected');
  }

  disconnectedCallback() {
    console.log('disconnected');
  }

  adoptedCallback() {
    console.log('adopted')
  }

  attributeChangedCallback() {
    console.log('changed');
  }
}

customElements.define('x-greeting', GreetingElement);