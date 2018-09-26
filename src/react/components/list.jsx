const List = (props) => {
  const {
    items = [],
    onChange,
  } = props;

  const listItemRenderer = (item, index) => (
    <ListItem
      id={`item-${index}`}
      item={item}
      key={index}
      onChange={onChange}
    />
  )

  return (
    <ul className="list">
      {items.map(listItemRenderer)}
    </ul>
  );
}