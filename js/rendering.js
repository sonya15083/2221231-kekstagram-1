const photosContainer = document.querySelector('.pictures');
const templatePicture =document.querySelector('#picture').content;
const newPictureTemplate=templatePicture.querySelector('.picture');
const picturesItems = [];

const loadPictures = (pictures) => {
  pictures.forEach((picture) => picturesItems.push(createPictureItem(picture)));
  showPictures(picturesItems);
};

const createClonePhoto = function({url, likes,comments}){
  const colnePicture = newPictureTemplate.cloneNode(true);
  colnePicture.querySelector('.picture__img').src=url;
  colnePicture.querySelector('.picture__likes').textContent=likes;
  colnePicture.querySelector('.picture__comments').textContent=comments.length;
};

const createPhotos = function(photos){
  const fragment = document.createDocumentFragment();
  for (let j=0;j<photos.length;j++){
    fragment.appendChild(createPhotos(photos[j]));
  }
  photosContainer.appendChild(fragment);
};

const showPictures = (pictures) => {
  deleteAllPictures();
  const fragment = new DocumentFragment;
  pictures.forEach((picture) => fragment.appendChild(picture));
  picturesList.appendChild(fragment);
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
};


export{createPhotos,picturesItems,showPictures};
