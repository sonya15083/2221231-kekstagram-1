const ALERT_SHOW_TIME=5000;
const getRandomPositiveInteger= (a, b) =>{
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const isEscapeKey = (evt) => evt.key === 'Escape';
const checkStringLength = (string, length) => string.length <= length;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '15px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const publicationMessage = () => {
  const message = document.querySelector('#success').content.cloneNode(true);
  document.body.append(message);
  const check = (evt)=>{
    if (evt.type === 'click'){
      if (!evt.target.closest('.succsess__inner')) {
        document.querySelector('.success').remove();
        document.removeEventListener('click',check);
      }
    }
    else if (evt.type === 'keydown'){
      if (isEscapeKey(evt)){
        document.querySelector('.success').remove();
        document.removeEventListener('click',check);
      }
    }
  };
  document.addEventListener('click', check);
  document.addEventListener('keydown', check);
};

const errorMessage =()=> {
  const message = document.querySelector('#error').content.cloneNode(true);
  document.body.append(message);
  const button = document.querySelector('.error__button');
  document.addEventListener('click', (evt)=>{
    if (!evt.target.closest('.error__inner')) {
      document.querySelector('.error').remove();
      document.querySelector('.img-upload__form').classList.remove('hidden');
    }
  });
  document.addEventListener('keydown', (evt)=>{
    if (isEscapeKey(evt)){
      document.querySelector('.error').remove();
      document.querySelector('.img-upload__form').classList.remove('hidden');
    }
  });
  button.addEventListener('click', ()=>{
    document.querySelector('.error').remove();
    document.querySelector('.img-upload__form').classList.remove('hidden');
  });
};

const debounce =(callback, timeoutDelay = 500)=> {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const shuffle=(array) =>{
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export {getRandomPositiveInteger,checkStringLength,showAlert,publicationMessage,errorMessage,debounce,shuffle,isEscapeKey};
