class AddItem extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onAdd(this.state.value);
    this.setState({ value: '' });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const {
      handleChange,
      handleClick,
      state: { value },
    } = this;

    return (
      <div className="input-group add-item col-6 p-0">
        <input
          aria-describedby="addButton"
          aria-label="Item name"
          className="form-control"
          onChange={handleChange}
          placeholder="Item name"
          type="text"
          value={value}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            id="addButton"
            onClick={handleClick}
            type="button"
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}