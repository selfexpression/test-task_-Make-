export const renderTypographyTable = (elements, state) => {
  const { isDesktopView, isMobileView } = state.typography;

  elements.typography.desktopButton
    .classList.toggle('desktop-button--active', isDesktopView);

  elements.typography.mobileButton
    .classList.toggle('desktop-button--active', isMobileView);

  elements.typography.desktopElement
    .style.display = isDesktopView ? 'block' : 'none';

  elements.typography.mobileElement
    .style.display = isMobileView ? 'block' : 'none';
};
