class ListItem {
  static markup({
    id,
    item,
  }) {
    return `
      <input
        class="form-check-input"
        type="checkbox"
        id="${id}"
      />
      <label
        class="form-check-label"
        for="${id}"
      >${item.label}</label>
    `;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
    this.inputElement.id = this._id;
    this.labelElement.setAttribute('for', this._id);
  }

  get item() {
    return this._item;
  }

  set item(value) {
    this._item = value;
    this.labelElement.innerText = this._item.label;
    this.inputElement.setAttribute('checked', this._item.done ? '' : null);
  }

  constructor(container, props = {}) {
    if (container.dataset.ref === undefined) {
      this.ref = Math.random();
      ListItem.refs[this.ref] = this;
      container.dataset.ref = this.ref;
      this.init(container, props);
    } else {
      return ListItem.refs[container.dataset.ref];
    }
  }

  init(container, props) {
    this.container = container;
    this.handleChange = this.handleChange.bind(this);
    this._item = props.item;
    this._id = props.id;
    this.render();
  }

  render() {
    this.container.innerHTML = ListItem.markup(this);
    this.container.classList.add('form-check');

    this.inputElement = this.container.querySelector('input');
    this.labelElement = this.container.querySelector('label');

    if (this.item.done) {
      this.inputElement.setAttribute('checked', '');
    }

    this.addEventListeners();
  }

  addEventListeners() {
    this.inputElement.addEventListener('change', this.handleChange);
  }

  handleChange(event) {
    const toggleItemEvent = new CustomEvent(
      'toggleItem',
      {
        bubbles: true,
        detail: {
          item: this.item,
          done: event.target.checked,
        },
      }
    );
    this.inputElement.dispatchEvent(toggleItemEvent);
  }
}

ListItem.refs = {};