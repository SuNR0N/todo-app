const Info = (props) => {
  const numberOfItems = props.items.length;
  const numberOfCompletedItems = props.items.reduce((sum, current) => {
    if (current.done) {
      sum += 1;
    }
    return sum;
  }, 0);

  return (
    <span className="info">{numberOfCompletedItems} out of {numberOfItems} items are completed</span>
  );
}