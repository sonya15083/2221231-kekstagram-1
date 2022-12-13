import {validateForm, onFocusPreventClose} from "./form-val.js"
import {onScaleButtonClick,onFilterButtonChange,initEffects,flag} from "./effect.js"


const form = document.querySelector(".img-upload__form");
const filePhoto = form.querySelector("#upload-file");
const placePhoto = form.querySelector(".img-upload__preview img");
const isEscapeKey = (evt) => evt.key === 'Escape';
const closeButton = form.querySelector("#upload-cancel");
const inputHashtags = form.querySelector(".text__hashtags");
const inputComment = form.querySelector(".text__description");
const buttonPlas = form.querySelector(".scale__control--bigger");
const buttonMin = form.querySelector(".scale__control--smaller");
const listButton = form.querySelector(".effects__list");


filePhoto.addEventListener('change', () => {
    form.querySelector(".img-upload__overlay").classList.remove("hidden");
    document.querySelector("body").classList.add("modal-open");
});


closeButton.addEventListener('click', ()=>{
    form.querySelector(".img-upload__overlay").classList.add("hidden");
    document.querySelector("body").classList.remove("modal-open");
    placePhoto.src= "img/upload-default-image.jpg";
});

document.addEventListener('keydown', (evt)=>{
    if (isEscapeKey(evt)){
        form.querySelector(".img-upload__overlay").classList.add("hidden");
        document.querySelector("body").classList.remove("modal-open");
        placePhoto.src= "img/upload-default-image.jpg";
    } 
});

inputHashtags.addEventListener('keydown', onFocusPreventClose);
inputComment.addEventListener("keydown",onFocusPreventClose);

form.addEventListener('submit', (evt)=>{
    evt.preventDefault();
    if (!validateForm(form, inputHashtags,inputComment)){
        evt.preventDefault();
    }
});

buttonPlas.addEventListener('click', onScaleButtonClick);
buttonMin.addEventListener('click',onScaleButtonClick);
listButton.addEventListener('change',(evt)=>{
    if (flag){
        initEffects();
    }
    onFilterButtonChange(evt)

    });

