export class GreetingElement extends HTMLElement {
  constructor() {
    super();
    const template = document.querySelector('#greeting-template') as HTMLTemplateElement;
    const shadowRoot = this.attachShadow({mode: "open"});
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('x-greeting', GreetingElement);
