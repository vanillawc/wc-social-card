/* eslint no-undef: 0 */
export class WCSocialCard extends HTMLElement {
  static get observedAttributes () {
    return ['image', 'title', 'type', 'url'];
  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[name] = newValue;
    }
  }

  get image () { return this.getAttribute('image'); }
  set image (value) {
    this.setAttribute('image', value);
    this.setImage(value);
  }

  get title () { return this.getAttribute('title'); }
  set title (value) {
    this.setAttribute('title', value);
    this.setTitle(value);
  }

  get type () { return this.getAttribute('type'); }
  set type (value) {
    this.setAttribute('type', value);
    this.setType(value);
  }

  get url () { return this.getAttribute('url'); }
  set url (value) {
    this.setAttribute('url', value);
    this.setURL(value);
  }

  constructor () {
    super();
    this.__head = null;
  }

  connectedCallback () {
    this.__head = document.querySelector('head');
  }

  setImage (content) {
    let el = this.__head.querySelector('meta[property="og:image"]');
    if (el === null) {
      el = document.createElement('meta');
      el.setAttribute('property', 'og:image');
      this.__head.appendChild(el);
    }
    el.setAttribute('content', content);
  }

  setTitle (content) {
    let el = this.__head.querySelector('meta[property="og:title"]');
    if (el === null) {
      el = document.createElement('meta');
      el.setAttribute('property', 'og:title');
      this.__head.appendChild(el);
    }
    el.setAttribute('content', content);
  }

  setType (content) {
    let el = this.__head.querySelector('meta[property="og:type"]');
    if (el === null) {
      el = document.createElement('meta');
      el.setAttribute('property', 'og:type');
      this.__head.appendChild(el);
    }
    el.setAttribute('content', content);
  }

  setURL (content) {
    let el = this.__head.querySelector('meta[property="og:url"]');
    if (el === null) {
      el = document.createElement('meta');
      el.setAttribute('property', 'og:url');
      this.__head.appendChild(el);
    }
    el.setAttribute('content', content);
  }
}

customElements.define('wc-social-card', WCSocialCard);
