export const renderAccordion = (isOpen, elements) => {
  elements.accordion.accordionButton
    .classList.toggle('accordion__button--active', isOpen);
};
