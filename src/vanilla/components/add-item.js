const AddItem = ({
  id,
  text,
  placeholder,
} = {
    id: 'addButton',
    text: 'Add',
    placeholder: 'Item name',
  }) => {
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
    inputGroupEl.className = 'input-group add-item col-6 p-0';

    inputEl.className = 'form-control';
    inputEl.placeholder = placeholder;
    inputEl.setAttribute('aria-describedby', id);
    inputEl.setAttribute('aria-label', placeholder);
    inputEl.setAttribute('type', 'text');
    inputGroupEl.appendChild(inputEl);

    appendEl.className = 'input-group-append';

    buttonEl.className = 'btn btn-primary';
    buttonEl.id = id;
    buttonEl.setAttribute('type', 'button');
    buttonEl.innerText = text;
    buttonEl.addEventListener('click', clickHandler);
    appendEl.appendChild(buttonEl);

    inputGroupEl.appendChild(appendEl);

    return inputGroupEl;
  };

  return { render };
};