import desktopImage from '../../assets/images/desktop.png';
import tabletImage from '../../assets/images/tablet.png';
import mobileImage from '../../assets/images/mobile.png';

const images = [
  { src: desktopImage, altText: 'desktop' },
  { src: tabletImage, altText: 'tablet' },
  { src: mobileImage, altText: 'mobile' },
];

const createImage = (src, altText) => {
  const imageElement = new Image();
  imageElement.src = src;
  imageElement.alt = altText;
  document.querySelector(`.grid__${altText}`).appendChild(imageElement);
};

export const addImages = () => {
  images.forEach(({ src, altText }) => createImage(src, altText));
};
