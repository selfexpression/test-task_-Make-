export const renderInteractivePlaceholder = (isTouched, input) => {
  input
    .closest('.text-field__item')
    .classList.toggle('text-field__item--has-content', isTouched);
};
