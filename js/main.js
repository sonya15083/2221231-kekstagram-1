function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function checksLength(string,maxLength){
  if(string.length<=maxLength){
    return true;
  }
  return false;
}
