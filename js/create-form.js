import {validateForm, onFocusPreventClose} from './form-val.js';
import {onScaleButtonClick,onFilterButtonChange,initEffects,flag} from './effect.js';
import {sendData} from './api.js';
import {publicationMessage,errorMessage,isEscapeKey} from './util.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const form = document.querySelector('.img-upload__form');
const filePhoto = form.querySelector('#upload-file');
const placePhoto = form.querySelector('.img-upload__preview img');
const closeButton = form.querySelector('#upload-cancel');
const inputHashtags = form.querySelector('.text__hashtags');
const inputComment = form.querySelector('.text__description');
const buttonPlas = form.querySelector('.scale__control--bigger');
const buttonMin = form.querySelector('.scale__control--smaller');
const listButton = form.querySelector('.effects__list');
const sliderWrapper = document.querySelector('.effect-level');
const submitButton = document.querySelector('.img-upload__submit');
const imgPreview = document.querySelector('.img-upload__preview').querySelector('img');


const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикуется';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const check = (evt)=>{
  if (evt.type === 'click' || isEscapeKey(evt)){
    form.querySelector('.img-upload__overlay').classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    placePhoto.src='img/upload-default-image.jpg';
    closeButton.removeEventListener('click', check);
  }
};

filePhoto.addEventListener('change', () => {
  form.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  const file = filePhoto.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches){
    imgPreview.src = URL.createObjectURL(file);
  }

  closeButton.addEventListener('click', check);
  document.addEventListener('keydown', check);
});

inputHashtags.addEventListener('keydown', onFocusPreventClose);
inputComment.addEventListener('keydown',onFocusPreventClose);

form.addEventListener('submit', (evt)=>{
  evt.preventDefault();
  if (validateForm(form, inputHashtags,inputComment)){
    blockSubmitButton();
    sendData(
      ()=>{
        form.querySelector('.img-upload__overlay').classList.add('hidden');
        document.querySelector('body').classList.remove('modal-open');
        placePhoto.src= 'img/upload-default-image.jpg';
        publicationMessage();
        form.reset();
        form.querySelector('.scale__control--value').value ='100%';
        imgPreview.style.transform = 'scale(1)';
        imgPreview.style.filter = 'none';
        sliderWrapper.classList.add('hidden');
        unblockSubmitButton();
      },
      () =>{
        form.classList.add('hidden');
        errorMessage();
        unblockSubmitButton();
      },
      new FormData(form),
    );
  }
});

buttonPlas.addEventListener('click', onScaleButtonClick);
buttonMin.addEventListener('click',onScaleButtonClick);
listButton.addEventListener('change',(evt)=>{
  if (flag){
    initEffects();
  }
  onFilterButtonChange(evt);
});
