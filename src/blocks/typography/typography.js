export const toggleTypography = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const desktop = document.querySelector('.typography__desktop');
    const mobile = document.querySelector('.typography__mobile');
    const desktopButton = document.querySelector('.desktop-button');
    const mobileButton = document.querySelector('.mobile-button');

    const toggleDesktopHandler = () => {
      desktopButton.classList.add('desktop-button--active');
      mobileButton.classList.remove('desktop-button--active');
      desktop.style.display = 'block';
      mobile.style.display = 'none';
    };

    const toggleMobileHandler = () => {
      mobileButton.classList.add('desktop-button--active');
      desktopButton.classList.remove('desktop-button--active');
      desktop.style.display = 'none';
      mobile.style.display = 'block';
    };

    desktopButton.addEventListener('click', toggleDesktopHandler);
    mobileButton.addEventListener('click', toggleMobileHandler);
  });
};
