(() => {
  const template = document.createElement('template');
  template.innerHTML = `
    <style>
      span {
        font-style: italic;
      }
    </style>
    <span>0 out of 0 items are completed<span>
  `;

  class Info extends HTMLElement {
    get items() {
      return this._items;
    }

    set items(value) {
      this._items = value;
      const totalItems = this._items.length;
      const completedItems = this._items.reduce((sum, current) => {
        if (current.done) {
          sum += 1;
        }
        return sum;
      }, 0);
      this.textElement.innerText = `${completedItems} out of ${totalItems} items are completed`;
    }

    constructor() {
      super();
      this._items = [];

      this.root = this.attachShadow({ mode: 'open' });
      this.root.appendChild(template.content.cloneNode(true));

      this.textElement = this.root.querySelector('span');
    }
  }

  customElements.define('x-info', Info);
})();