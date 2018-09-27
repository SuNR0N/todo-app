const AddItem = () => {
  const inputGroupEl = document.createElement('div');
  const inputEl = document.createElement('input');
  const appendEl = document.createElement('div');
  const buttonEl = document.createElement('button');

  const clickHandler = () => {
    const addItemEvent = new CustomEvent(
      'addItem',
      {
        bubbles: true,
        detail: inputEl.value,
      }
    );
    inputEl.dispatchEvent(addItemEvent);
    inputEl.value = '';
  };

  const render = () => {
    inputGroupEl.className = 'input-group add-item';

    inputEl.className = 'form-control';
    inputEl.placeholder = 'Item name';
    inputEl.setAttribute('aria-describedby', 'addButton');
    inputEl.setAttribute('aria-label', 'Item name');
    inputEl.setAttribute('type', 'text');
    inputGroupEl.appendChild(inputEl);

    appendEl.className = 'input-group-append';

    buttonEl.className = 'btn btn-primary';
    buttonEl.id = 'addButton';
    buttonEl.setAttribute('type', 'button');
    buttonEl.innerText = 'Add';
    buttonEl.addEventListener('click', clickHandler);
    appendEl.appendChild(buttonEl);

    inputGroupEl.appendChild(appendEl);

    return inputGroupEl;
  };

  return { render };
};