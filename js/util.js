function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

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
  
 
function checkStringLength (string, length) {
  return string.length <= length;
}
checkStringLength('Нужно вызвать!',70);

export {getRandomPositiveInteger,checkStringLength,showAlter};
