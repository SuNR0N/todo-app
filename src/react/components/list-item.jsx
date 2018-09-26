const ListItem = (props) => {
  const {
    id,
    item: {
      done,
      label,
    },
  } = props;

  const handleChange = (event) => {
    props.onChange(props.item, event.target.checked);
  }

  return (
    <li className="list-item form-check">
      <input
        className="form-check-input"
        defaultChecked={done}
        id={id}
        onChange={handleChange}
        type="checkbox"
      />
      <label
        className="form-check-label"
        htmlFor={id}
      >
        {label}
      </label>
    </li>
  );
}