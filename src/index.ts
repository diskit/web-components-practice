export class GreetingElement extends HTMLElement {
  constructor() {
    super();
    const element = document.createElement('div');
    element.textContent = 'hello';
    this.appendChild(element);
  }
}
customElements.define('x-greeting', GreetingElement);