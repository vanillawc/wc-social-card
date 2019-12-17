/* eslint no-undef: 0 */
export class WCSocialCard extends HTMLElement {

  static get observedAttributes () {
    return [];
  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[name] = newValue;
    }
  }

  async connectedCallback () {}
}

customElements.define('wc-social-card', WCSocialCard);
