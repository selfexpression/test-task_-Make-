import { renderAccordion } from './blocks/accordion/accordion.js';
import { addImages } from './blocks/grid/grid.js';
import { renderMenu } from './blocks/menu/menu.js';
import { renderSelectList, renderSelectedElement } from './blocks/select-list/select-list.js';
import { renderInteractivePlaceholder } from './blocks/text-field/text-field.js';
import { renderTypographyTable } from './blocks/typography/typography.js';

const accordionController = (initialState, toggleState, elements) => {
  let appState = initialState;

  const handleToggleAccordion = (state) => {
    const newState = toggleState(state, 'accordion');
    renderAccordion(newState.accordion.isOpen, elements);
    return newState;
  };

  elements.accordion.accordionButton
    .addEventListener('click', () => {
      appState = handleToggleAccordion(appState);
    });
};

const menuController = (initialState, toggleState, elements) => {
  let appState = initialState;

  const handleToggleMenu = (state) => {
    const newState = toggleState(state, 'menu');
    renderMenu(newState.menu.isOpen, elements);
    return newState;
  };

  elements.menu.openButton
    .addEventListener('click', () => {
      appState = handleToggleMenu(appState);
    });
  elements.menu.closeButton
    .addEventListener('click', () => {
      appState = handleToggleMenu(appState);
    });
};

const selectListController = (initialState, toggleState, elements) => {
  let appState = initialState;

  const { selectListLabel, optionElements } = elements.selectList;

  const handleToggleList = (state) => {
    const newState = toggleState(state, 'selectList');
    renderSelectList(newState.selectList.isOpen, elements);
    return newState;
  };

  selectListLabel
    .addEventListener('click', () => {
      appState = handleToggleList(appState);
    });

  optionElements
    .forEach((element) => {
      element.addEventListener('click', () => {
        renderSelectedElement(element.textContent, selectListLabel);
        appState = handleToggleList(appState);
      });
    });
};

const textFieldController = (elements) => {
  const handleTogglePlaceholder = (e) => (input) => {
    renderInteractivePlaceholder(!!e.target.value, input);
  };

  elements.textField.inputs.forEach((input) => {
    input.addEventListener('input', (e) => {
      handleTogglePlaceholder(e)(input);
    });
  });
};

const typographyTableController = (initialState, elements) => {
  let appState = initialState;

  const handleToggle = (state) => {
    const newState = {
      ...state,
      typography: {
        ...state.typography,
        isDesktopView: !state.typography.isDesktopView,
        isMobileView: !state.typography.isMobileView,
      },
    };

    renderTypographyTable(elements, newState);
    return newState;
  };

  elements.typography.desktopButton
    .addEventListener('click', () => {
      appState = handleToggle(appState);
    });

  elements.typography.mobileButton
    .addEventListener('click', () => {
      appState = handleToggle(appState);
    });
};

const toggleState = (state, component) => ({
  ...state,
  [component]: {
    ...state[component],
    isOpen: !state[component].isOpen,
  },
});

export const app = () => {
  const initialState = {
    accordion: {
      isOpen: false,
    },
    menu: {
      isOpen: false,
    },
    selectList: {
      isOpen: false,
    },
    typography: {
      isDesktopView: true,
      isMobileView: false,
    },
  };

  const elements = {
    accordion: {
      accordionButton: document.querySelector(
        '.accordion__item[data-item="item-1"] .accordion__button',
      ),
    },
    menu: {
      openedMenu: document.querySelector('.menu__opened'),
      closedMenu: document.querySelector('.menu__closed'),
      openButton: document.querySelector('.menu__ico'),
      closeButton: document.querySelector('.menu__close-button'),
    },
    selectList: {
      selectListLabel: document.querySelector('.select-list__label'),
      selectListInfo: document.querySelector('.select-list__info'),
      optionsWindow: document.querySelector('.select-list__options'),
      optionElements: document.querySelectorAll('.select-list__option'),
    },
    textField: {
      inputs: document.querySelectorAll('.text-field__input'),
    },
    typography: {
      desktopElement: document.querySelector('.typography__desktop'),
      mobileElement: document.querySelector('.typography__mobile'),
      desktopButton: document.querySelector('.desktop-button'),
      mobileButton: document.querySelector('.mobile-button'),
    },
  };

  addImages();
  accordionController(initialState, toggleState, elements);
  menuController(initialState, toggleState, elements);
  selectListController(initialState, toggleState, elements);
  textFieldController(elements);
  typographyTableController(initialState, elements);
};
