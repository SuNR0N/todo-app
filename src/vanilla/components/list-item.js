const ListItem = ({
  id,
  item,
}) => {
  const liEl = document.createElement('li');
  const inputEl = document.createElement('input');
  const labelEl = document.createElement('label');

  const handleChange = (event) => {
    const toggleItemEvent = new CustomEvent(
      'toggleItem',
      {
        bubbles: true,
        detail: {
          item,
          done: event.target.checked,
        },
      }
    );
    inputEl.dispatchEvent(toggleItemEvent);
  }

  const render = () => {
    liEl.className = 'list-item form-check';

    inputEl.className = 'form-check-input';
    inputEl.id = id;
    inputEl.setAttribute('type', 'checkbox');
    if (item.done) {
      inputEl.setAttribute('checked', item.done);
    }
    inputEl.addEventListener('change', handleChange);
    liEl.appendChild(inputEl);

    labelEl.className = 'form-check-label';
    labelEl.innerText = item.label;
    labelEl.setAttribute('for', id);
    liEl.appendChild(labelEl);

    return liEl;
  };

  return { render };
};