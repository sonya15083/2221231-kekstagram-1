 import {getRandomPositiveInteger,checkStringLength} from './util.js';
 
 const NAMES = ['Мария','Дарья','Михаил','Евгений','Алексей','Ольга','Никита','Елизавета'];

const DESCRIPTION = ['Прекрасное начало дня',
  'Начало этой истории..','На бис',
  'Пользователь занят, на зонки не отвечает)',
  'Моя мир искрится впечатлениями',
  'Держи, и никому не отдавай',
  'Мне только снится, что я тебе верю',
  'Я буду всегда','Как ангелы и боги',
  'Все дороги открыты','И никто этого не узнает'];

const MESSAGES=['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'];

const likesAmouth={min:15, max:200};
const photosAmount=25;

const getRandomElement=(array)=>array[getRandomPositiveInteger(0,array.length-1)];

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
