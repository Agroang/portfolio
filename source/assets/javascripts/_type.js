// typed.js plugin stuff
// documentation: https://github.com/mattboldt/typed.js/
import Typed from 'typed.js';

const typed = new Typed('#test', {
  strings: [
    'Welcome to my portfolio!',
    'I have some cool projects here...',
    'Feel free to look around!'],
  smartBackspace: true,
  typeSpeed: 50,
  startDelay: 50,
  loop: true,
  loopCount: Infinity,
});

export { typed };
// typed.js plugin stuff
