const List = ({
  items = [],
  onChange,
}) => {
  const ulEl = document.createElement('ul');

  const render = () => {
    ulEl.className = 'list';
    items.forEach((item, index) => {
      const listItem = ListItem({
        id: `item-${index}`,
        item,
      }).render();
      ulEl.appendChild(listItem);
    });

    return ulEl;
  };

  return { render };
};