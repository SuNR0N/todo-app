class List {
  static markup({ items }) {
    return items
      .map(() => '<li class="list-item"></li>')
      .join('');
  }

  get items() {
    return this._items;
  }

  set items(value) {
    this._items = value;
    this.render();
  }


  constructor(container, props = {}) {
    if (container.dataset.ref === undefined) {
      this.ref = Math.random();
      List.refs[this.ref] = this;
      container.dataset.ref = this.ref;
      this.init(container, props);
    } else {
      return List.refs[container.dataset.ref];
    }
  }

  init(container, props) {
    this.container = container;
    this._items = props.items;
    this.render();
  }

  render() {
    this.container.innerHTML = List.markup(this);
    const listItems = this.container.querySelectorAll('.list-item');
    listItems.forEach((listItem, index) => new ListItem(listItem, { item: this.items[index], id: `list-item-${index}` }));
  }
}

List.refs = {};