(() => {
  'use strict';

  const items = [
    { label: 'Foo', done: false },
    { label: 'Bar', done: true },
  ];

  function render() {
    const rootEl = document.querySelector('#root');
    rootEl.innerHTML = '';
    const container = Container({
      items,
      title: 'Vanilla To-Do App',
    }).render();
    rootEl.appendChild(container);
  }

  function handleAddItem(event) {
    const exists = items.findIndex((item) => item.label === event.detail) !== -1;
    if (!exists) {
      items.push({
        label: event.detail,
        done: false,
      });
      render();
    }
  }

  function handleToggleItem(event) {
    const toggledItem = items.find((item) => item === event.detail.item);
    if (toggledItem) {
      toggledItem.done = event.detail.done;
      render();
    }
  }

  function addListeners() {
    document.addEventListener('addItem', handleAddItem);
    document.addEventListener('toggleItem', handleToggleItem);
  }

  function init() {
    addListeners();
    render();
  }

  init();
})();