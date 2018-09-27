const Container = ({
  items = [],
  title,
}) => {
  const mainEl = document.createElement('main');
  const headerEl = document.createElement('h1');
  const infoEl = Info({ items }).render();
  const listEl = List({ items }).render();
  const addItemEl = AddItem().render();

  const render = () => {
    mainEl.className = 'container-fluid';

    headerEl.innerText = title;

    mainEl.appendChild(headerEl);
    mainEl.appendChild(infoEl);
    mainEl.appendChild(listEl);
    mainEl.appendChild(addItemEl);

    return mainEl;
  };

  return { render };
};