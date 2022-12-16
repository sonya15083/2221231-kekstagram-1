import { createPhotos, picturesItems } from './rendering.js';
import { debounce,shuffle } from './util.js';

const filtersForm = document.querySelector('.img-filters__form');
const RANDOM_PICTURES_COUNT = 10;

document.querySelector(".img-filters").classList.remove("img-filters--inactive");
const OnFilterButtonClick = debounce((evt) => {
  const selectedButton = evt.target;
  if (selectedButton.tagName === 'BUTTON') {
    filtersForm.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    selectedButton.classList.add('img-filters__button--active');
    createPhotos(filters[selectedButton.id.replace('filter-', '')]());
  }
});

const filters = {
  default: () => { 
  return picturesItems.slice();},
  
  random: () => {
    return shuffle(picturesItems.slice()).slice(0, RANDOM_PICTURES_COUNT);},

  discussed: () => {
    return picturesItems.slice()
    .sort((picture1, picture2) => picture2.comments.length - picture1.comments.length);},
};

filtersForm.addEventListener('click', OnFilterButtonClick);