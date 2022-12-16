
import {createPhotos} from './rendering.js';
import {getData} from './api.js';
import './filters.js';

getData((photo)=>createPhotos(photo));
