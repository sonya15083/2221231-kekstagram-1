function getRandom(min, max) {
  if (min>=0 && min<max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return "Упс, что-то не так...";
}

function checksLength(string,maxLength){
  if(string.length<=maxLength){
    return true;
  }
  return false;
}
getRandom(2,5);
checksLength('uyciygct',5);
