//module4-task1
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

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkStringLength (string, length) {
  return string.length <= length;
}
checkStringLength('Нужно вызвать!',70);

const getRandomElement=(array)=>array[getRandomPositiveInteger(0,array.length-1)];

function createDescription(id){
  return{
    id: id,
    url:'photos/${id}.jpg',
    descriptione: getRandomElement(DESCRIPTION),
    likes: getRandomPositiveInteger(likesAmouth.min, likesAmouth.max),
    comments: Array.from({length:getRandomPositiveInteger(1,6)}).map((value, index)=>createComment(index+1))
  };
}

function createComment(id){
  return{
    id: getRandomPositiveInteger(1,500),
    avatar: 'img/avatar-${id}.svg',
    message: getRandomElement(MESSAGES),
    name: getRandomElement(NAMES),
  };
}

const array=Array.from({length:photosAmount}).map((value, index)=>createDescription(index+1));

function getRandom(min, max) {
  if (min>=0 && min<max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return 'Упс, что-то не так...';
}

function checksLength(string,maxLength){
  if(string.length<=maxLength){
    return true;
  }
  return false;
}
getRandom(2,5);
checksLength('uyciygct',5);
//master
