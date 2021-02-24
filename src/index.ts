export class GreetingElement extends HTMLElement {
  constructor() {
    super();
    const element = document.createElement('div');
    element.textContent = this.getAttribute('message');
    const shadowRoot = this.attachShadow({mode: "open"});
    this.appendChild(element);
    shadowRoot.appendChild(element);
  }
}

customElements.define('x-greeting', GreetingElement);
