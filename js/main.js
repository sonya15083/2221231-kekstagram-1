 import {getRandomPositiveInteger,checkStringLength} from './util.js';
 import {NAMES,DESCRIPTION,MESSAGES,getRandomElement} from './data.js';
 
const likesAmouth={min:15, max:200};
const photosAmount=25;

function createComment(id){
  return{
    id: getRandomPositiveInteger(1,500),
    avatar: `img/avatar-${id}.svg`,
    message: getRandomElement(MESSAGES),
    name: getRandomElement(NAMES),
  };
}

function createDescription(id){
  return{
    id: id,
    url:`photos/${id}.jpg`,
    descriptione: getRandomElement(DESCRIPTION),
    likes: getRandomPositiveInteger(likesAmouth.min, likesAmouth.max),
    comments: Array.from({length:getRandomPositiveInteger(1,6)}).map((value, index)=>createComment(index+1))
  };
}

const arrayOb=Array.from({length:photosAmount}).map((value, index)=>createDescription(index+1));
arrayOb.push(...' ');
