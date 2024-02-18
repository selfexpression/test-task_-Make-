export const renderMenu = (isOpen, elements) => {
  elements.menu.openedMenu
    .style.display = isOpen ? 'block' : 'none';

  elements.menu.closedMenu
    .style.display = isOpen ? 'none' : 'flex';
};
