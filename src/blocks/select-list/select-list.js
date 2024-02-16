export const toggleSelectList = (state) => {
  const selectListLabel = document.querySelector('.select-list__label');
  const selectListInfo = document.querySelector('.select-list__info');
  const optionsWindow = document.querySelector('.select-list__options');
  const optionElements = document.querySelectorAll('.select-list__option');

  const updateSelectListInfoDisplay = () => {
    const selectedElementExists = !!selectListLabel.querySelector('.select-list__selected');
    selectListInfo.style.display = state.selectList.isOpen || !selectedElementExists ? 'block' : 'none';
  };

  const toggleList = () => {
    state.selectList.isOpen = !state.selectList.isOpen;
    selectListLabel.classList.toggle('select-list__label--active', state.selectList.isOpen);
    optionsWindow.classList.toggle('select-list__options--active', state.selectList.isOpen);

    updateSelectListInfoDisplay();
  };

  const toggleElement = (element) => {
    const selectedElement = selectListLabel.querySelector('.select-list__selected');
    if (selectedElement) selectListLabel.removeChild(selectedElement);

    const elementText = element.textContent;
    const newSelectedElement = document.createElement('span');
    newSelectedElement.classList.add('select-list__selected');
    newSelectedElement.textContent = elementText;
    selectListLabel.appendChild(newSelectedElement);

    optionElements.forEach((el) => el.classList.remove('select-list__option--active'));
    element.classList.add('select-list__option--active');

    selectListLabel.classList.remove('select-list__label--active');
    optionsWindow.classList.remove('select-list__options--active');
    state.selectList.isOpen = false;

    updateSelectListInfoDisplay();
  };

  selectListLabel.addEventListener('click', toggleList);
  optionElements.forEach((element) => {
    element.addEventListener('click', () => toggleElement(element));
  });
};
