import { interactivePlaceholder } from './blocks/text-field/text-field.js';
import { toggleSelectList } from './blocks/select-list/select-list.js';
import { addImages } from './blocks/grid/grid.js';
import { toggleAccordion } from './blocks/accordion/accordion.js';
import { toggleMenu } from './blocks/menu/menu.js';
import { toggleTypography } from './blocks/typography/typography.js';

export const app = () => {
  const state = {
    selectList: {
      isOpen: false,
    },
    toggleAccordion: {
      isOpen: false,
    },
    menu: {
      isOpen: false,
    },
  };

  interactivePlaceholder();
  toggleSelectList(state);
  addImages();
  toggleAccordion(state);
  toggleMenu(state);
  toggleTypography();
};
