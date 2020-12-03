export class GreetingElement extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'open'});
    const element = document.createElement('div');
    element.textContent = this.getAttribute('message');
    shadowRoot.appendChild(element);
  }
}
customElements.define('x-greeting', GreetingElement);