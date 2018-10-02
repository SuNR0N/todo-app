(() => {
  'use strict';

  const items = [
    { label: 'Foo', done: false },
    { label: 'Bar', done: true },
  ];
  let info;
  let list;
  let addItem;

  function render() {
    info = new Info(
      document.querySelector('.info'),
      { items }
    );
    list = new List(
      document.querySelector('.list'),
      { items }
    );
    addItem = new AddItem(
      document.querySelector('.add-item')
    );
  }

  function handleAddItem(event) {
    const exists = items.findIndex((item) => item.label === event.detail) !== -1;
    if (!exists) {
      items.push({
        label: event.detail,
        done: false,
      });
      list.items = items;
      info.items = items;
    }
  }

  function handleToggleItem(event) {
    const toggledItem = items.find((item) => item === event.detail.item);
    if (toggledItem) {
      toggledItem.done = event.detail.done;
      list.items = items;
      info.items = items;
    }
  }

  function addEventListeners() {
    addItem.container.addEventListener('addItem', handleAddItem);
    list.container.addEventListener('toggleItem', handleToggleItem);
  }

  function init() {
    render();
    addEventListeners();
  }

  init();
})();