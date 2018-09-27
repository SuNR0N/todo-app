(() => {
  const template = document.createElement('template');
  template.innerHTML = `
    <style>
      .list-item input + label {
        text-decoration: none;
      }

      .list-item input[checked] + label {
        text-decoration: line-through;
      }
    </style>
    <li class="list-item form-check">
      <input
        class="form-check-input"
        type="checkbox"
      />
      <label class="form-check-label"></label>
    </li>
  `;

  class ListItem extends HTMLElement {
    static get observedAttributes() {
      return [
        'checked',
        'index',
        'label',
      ];
    }

    get checked() {
      return this._checked;
    }

    set checked(value) {
      this._checked = value;
    }

    get index() {
      return this._index;
    }

    set index(value) {
      this._index = value;
    }

    get label() {
      return this._label;
    }

    set label(value) {
      this._label = value;
    }

    constructor() {
      super();
      this.handleChange = this.handleChange.bind(this);
    }

    connectedCallback() {
      const temp = document.importNode(template.content, true);
      this.appendChild(temp);

      this.inputElement = this.querySelector('input');
      this.inputElement.id = `list-item-${this.index}`;
      if (this.checked) {
        this.inputElement.setAttribute('checked', this.checked);
      }

      this.labelElement = this.querySelector('label');
      this.labelElement.setAttribute('for', this.inputElement.id);
      this.labelElement.innerText = this.label;

      this.inputElement.addEventListener('change', this.handleChange);
    }

    disconnectedCallback() {
      this.inputElement.removeEventListener('change', this.handleChange);
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
      switch (attrName) {
        case 'checked':
          this.checked = newValue === 'true';
          break;
        case 'index':
          this.index = parseInt(newValue, 10);
          break;
        case 'label':
          this.label = newValue;
          break;
        default:
          break;
      }
    }

    handleChange(event) {
      const toggleItemEvent = new CustomEvent(
        'toggleItem',
        {
          bubbles: true,
          detail: {
            index: this.index,
            checked: event.target.checked,
          },
        }
      );
      this.dispatchEvent(toggleItemEvent);
    }
  }

  customElements.define('x-list-item', ListItem);
})();