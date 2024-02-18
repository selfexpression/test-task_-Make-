export const toggleMenu = (state) => {
  const openedMenu = document.querySelector('.menu__opened');
  const closedMenu = document.querySelector('.menu__closed');
  const openButton = document.querySelector('.menu__ico');
  const closeButton = document.querySelector('.menu__close-button');

  const toggleHandler = () => {
    const openAction = state.menu.isOpened ? 'none' : 'block';
    const closeAction = state.menu.isOpened ? 'flex' : 'none';
    openedMenu.style.display = openAction;
    closedMenu.style.display = closeAction;

    state.menu.isOpened = !state.menu.isOpened;
  };

  openButton.addEventListener('click', toggleHandler);
  closeButton.addEventListener('click', toggleHandler);
};
