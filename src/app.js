import { interactivePlaceholder } from './blocks/text-field/text-field.js';
import { toggleSelectList } from './blocks/select-list/select-list.js';

export const app = () => {
  const state = {
    selectList: {
      isOpen: false,
    },
  };

  interactivePlaceholder();
  toggleSelectList(state);
};
