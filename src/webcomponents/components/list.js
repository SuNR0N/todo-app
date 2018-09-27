(() => {
  const template = document.createElement('template');
  template.innerHTML = `
    <style>
      .list {
        list-style: none;
        padding-left: 1rem;
      }
    </style>
    <ul class="list"></ul>
  `;

  class List extends HTMLElement {
    get items() {
      return this._items;
    }

    set items(value) {
      this._items = value;
      this.listElement.innerHTML = '';
      value.forEach(({ done, label }, index) => {
        const listItem = document.createElement('x-list-item');
        listItem.setAttribute('checked', done);
        listItem.setAttribute('index', index);
        listItem.setAttribute('label', label);
        this.listElement.appendChild(listItem);
      });
    }

    constructor() {
      super();
      this._items = [];
    }

    connectedCallback() {
      const temp = document.importNode(template.content, true);
      this.appendChild(temp);

      this.listElement = this.querySelector('ul');
    }
  }

  customElements.define('x-list', List);
})();