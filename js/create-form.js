import {validateForm, onFocusPreventClose} from "./form-val.js"
import {onScaleButtonClick,onFilterButtonChange,initEffects,flag} from "./effect.js"
import {sendData} from "./api.js"
import {publicationMessage,errorMessage} from "./util.js"

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
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
const imgPreview = document.querySelector('.img-upload__preview').querySelector('img');
const sliderWrapper = document.querySelector('.effect-level');


filePhoto.addEventListener('change', () => {
    form.querySelector(".img-upload__overlay").classList.remove("hidden");
    document.querySelector("body").classList.add("modal-open");
    const file = filePhoto.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((it) => {
        return fileName.endsWith(it);
    });

    if (matches) {
        imgPreview.src = URL.createObjectURL(file);
    }
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
    if (validateForm(form, inputHashtags,inputComment)){
        sendData(
            ()=>{
                form.querySelector(".img-upload__overlay").classList.add("hidden");
                document.querySelector("body").classList.remove("modal-open");
                placePhoto.src= "img/upload-default-image.jpg";   
                publicationMessage();
                form.reset();
                form.querySelector(".scale__control--value").value ="100%";
                imgPreview.style.transform = 'scale(1)';
                imgPreview.style.filter = 'none';
                sliderWrapper.classList.add('hidden');
            },
            () =>{
                form.classList.add("hidden");
                errorMessage();

            },
            new FormData(form),
        )
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

