export const toggleSelectList = (state) => {
  const selectListLabel = document.querySelector('.select-list__label');
  const selectListInfo = document.querySelector('.select-list__info');
  const optionsWindow = document.querySelector('.select-list__options');
  const optionElements = document.querySelectorAll('.select-list__option');

  const toggleList = () => {
    const selectValue = state.selectList.isOpen ? 'remove' : 'add';
    selectListLabel.classList[selectValue]('select-list__label--active');
    optionsWindow.classList[selectValue]('select-list__options--active');

    selectListInfo.classList.remove('select-list__info--selected');

    state.selectList.isOpen = !state.selectList.isOpen;
  };

  const toggleElement = (element) => {
    const selectedElement = selectListLabel.querySelector('.select-list__selected');
    if (selectedElement) selectListLabel.removeChild(selectedElement);

    const elementText = element.textContent;
    const newSelectedElement = document.createElement('span');
    newSelectedElement.classList.add('select-list__selected');
    newSelectedElement.textContent = elementText;
    selectListLabel.appendChild(newSelectedElement);

    selectListInfo.classList.add('select-list__info--selected');

    optionElements.forEach((el) => {
      el.classList.remove('select-list__option--active');
    });

    element.classList.add('select-list__option--active');

    selectListLabel.classList.remove('select-list__label--active');
    optionsWindow.classList.remove('select-list__options--active');

    state.selectList.isOpen = false;
  };

  selectListLabel.addEventListener('click', toggleList);
  optionElements.forEach((element) => {
    element.addEventListener('click', () => toggleElement(element));
  });
};
