import {openPhoto} from './screen.js';

const photosContainer = document.querySelector('.pictures');
const templatePicture =document.querySelector('#picture').content;
const newPictureTemplate=templatePicture.querySelector('.picture');
let picturesItems=[];

const createClonePhoto = ({url, likes,comments},index)=>{
  const clonePicture = newPictureTemplate.cloneNode(true);
  clonePicture.querySelector('.picture__img').src=url;
  clonePicture.querySelector('.picture__likes').textContent=likes;
  clonePicture.querySelector('.picture__comments').textContent=comments.length;
  clonePicture.dataset.index=index;
  return clonePicture;

};

const createPhotos = (photos)=>{
  photosContainer.querySelectorAll('.picture').forEach((photo)=>photo.remove());
  if (picturesItems.length===0) {
    picturesItems = photos;
  }
  const fragment = document.createDocumentFragment();
  for (let j=0;j<photos.length;j++){
    fragment.appendChild(createClonePhoto(photos[j],j));
  }
  photosContainer.addEventListener('click',( evt)=>{
    const picture = evt.target.closest('.picture');
    if (picture){
      openPhoto(photos[picture.dataset.index]);
    }

  });
  photosContainer.appendChild(fragment);
  document.querySelector('.pictures__title').classList.remove('visually-hidden');
};


export{createPhotos,picturesItems};
