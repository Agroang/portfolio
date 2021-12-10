import 'bootstrap';
// import { targetDiv } from './_type';
import Typed from 'typed.js';

const options = {
  strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
  typeSpeed: 40
};

const targetDiv = document.getElementById('test');
const typed = new Typed(targetDiv, options);

console.log(targetDiv);
