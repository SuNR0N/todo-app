class Info {
  static markup({
    completedItems,
    totalItems,
  }) {
    return `${completedItems} out of ${totalItems} items are completed`;
  }

  get completedItems() {
    return this._items.reduce((sum, current) => {
      if (current.done) {
        sum += 1;
      }
      return sum;
    }, 0);
  }

  get totalItems() {
    return this._items.length;
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
      Info.refs[this.ref] = this;
      container.dataset.ref = this.ref;
      this.init(container, props);
    } else {
      return Info.refs[container.dataset.ref];
    }
  }

  init(container, props) {
    this.container = container;
    this._items = props.items;
    this.render();
  }

  render() {
    this.container.innerHTML = Info.markup(this);
  }
}

Info.refs = {};