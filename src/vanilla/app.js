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
      title: 'To-Do App',
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
    // TODO
  }

  function setListeners() {
    document.addEventListener('addItem', handleAddItem);
    document.addEventListener('toggleItem', handleToggleItem);
  }

  function init() {
    setListeners();
    render();
  }

  init();
})();