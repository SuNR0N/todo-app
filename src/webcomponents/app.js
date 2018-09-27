(() => {
  const items = [
    { label: 'Foo', done: false },
    { label: 'Bar', done: true },
  ];

  function handleAddItem(event) {
    const exists = items.findIndex((item) => item.label === event.detail) !== -1;
    if (!exists) {
      const newItem = {
        label: event.detail,
        done: false,
      };
      items.push(newItem);
      infoElement.items = items;
      listElement.items = items;
    }
  }

  function handleToggleItem(event) {
    const toggledItem = items.find((_item, index) => index === event.detail.index);
    toggledItem.done = event.detail.checked;
    infoElement.items = items;
    listElement.items = items;
  }

  const addItemElement = document.querySelector('x-add-item');
  addItemElement.addEventListener('addItem', handleAddItem);

  const infoElement = document.querySelector('x-info');
  infoElement.items = items;

  const listElement = document.querySelector('x-list');
  listElement.addEventListener('toggleItem', handleToggleItem);
  listElement.items = items;
})();