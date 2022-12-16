
import {getRandomPositiveInteger} from './util.js';
import {NAMES,DESCRIPTION,MESSAGES,getRandomElement} from './data.js';
import {createPhotos} from './rendering.js';
import {getData} from './api.js';
import "./filters.js";
getData((photo)=>createPhotos(photo));