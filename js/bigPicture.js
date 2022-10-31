const getEscapeEvent = (evt, action) => {
  if (evt.key === 'Escape') {
    action();
  }
};

const body = document.querySelector('body');
const socialCommentCount = document.querySelector('.social__comment-count');
const bigPictureImg = document.querySelector('.big-picture__img');
const bigPicture =  document.querySelector('.big-picture');
const bigPictureClose = bigPicture.querySelector('.big-picture__cancel');
const commentsLoader = document.querySelector('.comments-loader');
const commentsList = document.querySelector('.social__comments');
const commentElement = commentsList.querySelector('.social__comment');
const getBigPictureComment = (comment) => {
  const commentItem = commentElement.cloneNode(true);
  commentItem.querySelector('.social__picture').src = comment.avatar;
  commentItem.querySelector('.social__picture').alt = comment.name;
  commentItem.querySelector('.social__text').textContent = comment.message;
  return commentItem;
};

const createCommentsFragment = (commentsArray) => {
  const fragment = document.createDocumentFragment();
  commentsArray.forEach((comment) => {
    const newComment = getBigPictureComment(comment);
    fragment.appendChild(newComment);
  });
  commentsList.appendChild(fragment);
};

const showBigPhoto = (bigPhoto) => {
  body.classList.add('modal-open');
  commentsList.innerHTML = '';
  bigPictureImg.querySelector('img').src = bigPhoto.url;
  bigPicture.querySelector('.likes-count').textContent = bigPhoto.likes;
  bigPicture.querySelector('.comments-count').textContent = bigPhoto.comments.length;
  bigPicture.querySelector('.social__caption').textContent = bigPhoto.description;
  bigPicture.classList.remove('hidden');
  createCommentsFragment(bigPhoto.comments);
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.addEventListener('keydown', onBigPictureEscPress);
  bigPictureClose.addEventListener('click', onBigPictureCloseClick);
};

const showBigPictureOb = (pictureOb) => {
  showBigPhoto(pictureOb);
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onBigPictureEscPress);
  bigPictureClose.removeEventListener('click', onBigPictureCloseClick);
};

function onBigPictureCloseClick () {
  closeBigPicture();
}

function onBigPictureEscPress (evt) {
  getEscapeEvent(evt, closeBigPicture);
}
export {showBigPictureOb};
