(() => {
  const template = document.createElement('template');
  template.innerHTML = `
    <div class="input-group col-6 p-0">
      <input
        class="form-control"
        type="text"
      />
      <div class="input-group-append">
        <button
          class="btn btn-primary"
          type="button"
        />
      </div>
    </div>
  `;

  class AddItem extends HTMLElement {
    static get observedAttributes() {
      return [
        'button-text',
        'placeholder',
      ];
    }

    get buttonText() {
      return this._buttonText;
    }

    set buttonText(value) {
      this._buttonText = value;
    }

    get placeholder() {
      return this._placeholder;
    }

    set placeholder(value) {
      this._placeholder = value;
    }

    constructor() {
      super();
      this._buttonText = 'Add';
      this._placeholder = 'Add Item';
      this.handleClick = this.handleClick.bind(this);
    }

    connectedCallback() {
      const temp = document.importNode(template.content, true);
      this.appendChild(temp);

      this.inputElement = this.querySelector('input');
      this.inputElement.setAttribute('placeholder', this.placeholder);
      this.inputElement.setAttribute('aria-label', this.placeholder);

      this.buttonElement = this.querySelector('button');
      this.buttonElement.innerText = this.buttonText;

      this.buttonElement.addEventListener('click', this.handleClick);
    }

    disconnectedCallback() {
      this.buttonElement.removeEventListener('click', this.handleClick);
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
      switch (attrName) {
        case 'button-text':
          this.buttonText = newValue;
          break;
        case 'placeholder':
          this.placeholder = newValue;
          break;
        default:
          break;
      }
    }

    handleClick() {
      const addItemEvent = new CustomEvent(
        'addItem',
        {
          detail: this.inputElement.value,
        }
      );
      this.dispatchEvent(addItemEvent);
      this.inputElement.value = '';
    }
  }

  customElements.define('x-add-item', AddItem);
})();