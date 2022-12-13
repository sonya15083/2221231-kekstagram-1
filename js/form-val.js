import {checkStringLength} from './util.js';

const hashtagRule = /^#[А-Яа-яA-Za-zёЁ0-9]{1,19}$/;
const isEscapeKey = (evt) => evt.key === 'Escape';
const onFocusPreventClose = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};



const validateForm = (form, hashtags, comment) => {
  const pristine = new Pristine(form, {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextClass: 'img-upload__field-wrapper__error'
  });
  pristine.addValidator(hashtags,() => {
    const value = hashtags.value;
    const hashtagsList = value.split().map((hashtag) => hashtag.toLowerCase());
    const uniqueHashtags = [...new Set(hashtagsList)];
    return value === '' || hashtagsList.every((hashtag) => hashtagRule.test(hashtag)) && hashtagsList.length <= 5 && hashtagsList.length === uniqueHashtags.length;
    
  },
    'Уникальные хештеги, каждый не более 20 символов, должны быть разделены пробелом');

  pristine.addValidator(comment, () => {
    const value = comment.value;
    return checkStringLength(value, 140);
  }, 
    'Комментарий не более 140 символов');

  return pristine.validate();
};

export {validateForm, onFocusPreventClose};
