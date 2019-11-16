import { home } from './home.js';
import { request } from './request.js';
import { menu } from './menu.js';

const urlHome = 'http://127.0.0.1:5500/JS/projectOne/app/data/home.json';
request(urlHome, home);
menu();