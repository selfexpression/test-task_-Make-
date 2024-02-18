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

export const renderSelectedElement = (elementText, selectListLabel) => {
  const selectedElement = selectListLabel.querySelector('.select-list__selected');
  if (selectedElement) selectListLabel.removeChild(selectedElement);

  const newSelectedElement = document.createElement('span');
  newSelectedElement.classList.add('select-list__selected');
  newSelectedElement.textContent = elementText;
  selectListLabel.appendChild(newSelectedElement);
};
