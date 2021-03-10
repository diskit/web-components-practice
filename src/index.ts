const template = document.createElement('template');
template.innerHTML = `
<style>
div {
  color: var(--text-color, #ffa500);
}
</style>
<div class="message"></div>
<slot name="name">default name</slot>
`;

export class GreetingElement extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: "open"});
    const content = template.content.cloneNode(true);
    const message = this.getAttribute('message');
    (content as DocumentFragment).querySelector('.message')!.textContent = message;
    shadowRoot.appendChild(content);
  }
}

customElements.define('x-greeting', GreetingElement);

