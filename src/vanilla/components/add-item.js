class AddItem {
  static markup({
    buttonText,
    placeholder,
  }) {
    return `
      <input
        class="form-control"
        type="text"
        placeholder="${placeholder}"
        aria-label="${placeholder}"
      />
      <div class="input-group-append">
        <button
          class="btn btn-primary"
          type="button"
        >${buttonText}</button>
      </div>
    `;
  }

  get buttonText() {
    return this._buttonText;
  }

  set buttonText(value) {
    this._buttonText = value;
    this.buttonElement.innerText = this._buttonText;
  }

  get placeholder() {
    return this._placeholder;
  }

  set placeholder(value) {
    this._placeholder = value;
    this.inputElement.setAttribute('placeholder', this._placeholder);
    this.inputElement.setAttribute('aria-label', this._placeholder);
  }

  constructor(container) {
    if (container.dataset.ref === undefined) {
      this.ref = Math.random();
      AddItem.refs[this.ref] = this;
      container.dataset.ref = this.ref;
      this.init(container);
    } else {
      return AddItem.refs[container.dataset.ref];
    }
  }

  init(container) {
    this.container = container;
    this.handleClick = this.handleClick.bind(this);
    this._buttonText = container.dataset.buttonText || 'Add';
    this._placeholder = container.dataset.placeholder || 'Add Item';
    this.render();
  }

  render() {
    this.container.innerHTML = AddItem.markup(this);
    this.container.classList.add('input-group');
    this.container.classList.add('col-6');
    this.container.classList.add('p-0');

    this.inputElement = this.container.querySelector('input');
    this.buttonElement = this.container.querySelector('button');

    this.addEventListeners();
  }

  addEventListeners() {
    this.buttonElement.addEventListener('click', this.handleClick);
  }

  handleClick() {
    const addItemEvent = new CustomEvent(
      'addItem',
      { detail: this.inputElement.value }
    );
    this.container.dispatchEvent(addItemEvent);
    this.inputElement.value = '';
  }
}

AddItem.refs = {};