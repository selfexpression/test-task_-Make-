export const renderSelectList = (isOpen, elements) => {
  const {
    selectListLabel,
    optionsWindow,
    selectListInfo,
  } = elements.selectList;

  selectListLabel
    .classList.toggle('select-list__label--active', isOpen);

  optionsWindow
    .classList.toggle('select-list__options--active', isOpen);

  const selectedElementExists = !!selectListLabel.querySelector('.select-list__selected');
  selectListInfo.style.display = isOpen || !selectedElementExists ? 'block' : 'none';
};

export const renderSelectedElement = (element, selectListLabel, elements) => {
  const selectedElement = selectListLabel.querySelector('.select-list__selected');
  if (selectedElement) selectListLabel.removeChild(selectedElement);

  elements.selectList.optionElements
    .forEach((el) => el.classList.remove('select-list__option--active'));
  element.classList.add('select-list__option--active');

  const newSelectedElement = document.createElement('span');
  newSelectedElement.classList.add('select-list__selected');
  newSelectedElement.textContent = element.textContent;
  selectListLabel.appendChild(newSelectedElement);
};
