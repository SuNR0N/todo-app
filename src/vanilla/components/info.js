const Info = ({
  items = [],
}) => {
  const spanEl = document.createElement('span');
  const numberOfItems = items.length;
  const numberOfCompletedItems = items.reduce((sum, current) => {
    if (current.done) {
      sum += 1;
    }
    return sum;
  }, 0);

  const render = () => {
    spanEl.className = 'info';
    spanEl.innerText = `${numberOfCompletedItems} out of ${numberOfItems} items are completed`;

    return spanEl;
  };

  return { render };
};