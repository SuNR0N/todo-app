class Container extends React.Component {
  initialItems = [
    { label: 'Foo', done: false },
    { label: 'Bar', done: true },
  ];

  constructor() {
    super();
    this.state = {
      items: this.initialItems,
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleAdd(label) {
    const exists = this.state.items.findIndex((item) => item.label === label) !== -1;
    if (!exists) {
      this.setState({
        items: [
          ...this.state.items,
          {
            label,
            done: false,
          },
        ],
      });
    }
  }

  handleChange(item, done) {
    const items = this.state.items.map((i) => {
      if (i === item) {
        i.done = done;
      }
      return i;
    });
    this.setState({ items });
  }

  render() {
    const {
      handleAdd,
      handleChange,
      state: { items },
    } = this;

    return (
      <main className="container-fluid">
        <h1>React To-Do App</h1>
        <Info items={items} />
        <List
          items={items}
          onChange={handleChange}
        />
        <AddItem onAdd={handleAdd} />
      </main>
    );
  }
}