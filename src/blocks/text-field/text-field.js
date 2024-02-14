export const interactivePlaceholder = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.text-field__input');

    const toggleLabel = (input) => {
      const action = input.value ? 'add' : 'remove';
      input.closest('.text-field__item').classList[action]('text-field__item--has-content');
    };

    inputs.forEach((input) => {
      input.addEventListener('input', () => toggleLabel(input));
      toggleLabel(input);
    });
  });
};
