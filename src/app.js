import { interactivePlaceholder } from './blocks/text-field/text-field.js';
import { toggleSelectList } from './blocks/select-list/select-list.js';
import { addImages } from './blocks/grid/grid.js';
import { toggleAccordion } from './blocks/accordion/accordion.js';

export const app = () => {
  const state = {
    selectList: {
      isOpen: false,
    },
    toggleAccordion: {
      isOpen: false,
    },
  };

  interactivePlaceholder();
  toggleSelectList(state);
  addImages();
  toggleAccordion(state);
};
