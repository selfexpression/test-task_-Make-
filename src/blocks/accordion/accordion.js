export const toggleAccordion = (state) => {
  const accordionButton = document.querySelector(
    '.accordion__item[data-item="item-1"] .accordion__button',
  );

  const toggleHandler = () => {
    const action = state.toggleAccordion.isOpen ? 'remove' : 'add';
    accordionButton.classList[action]('accordion__button--active');

    state.toggleAccordion.isOpen = !state.toggleAccordion.isOpen;
  };

  accordionButton.addEventListener('click', toggleHandler);
};
