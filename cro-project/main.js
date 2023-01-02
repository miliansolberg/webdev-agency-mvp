import './style.css'
import javascriptLogo from './javascript.svg'

// set the dimensions of the logo
const logoWidth = 200;
const logoHeight = 100;

// set the speed of the animation (pixels per second)
const speed = 200;

// get the logo element
const logo = document.querySelectorAll("img");

// set the initial position of the logo
logo.style.left = "-200px";

// function to update the position of the logo
function updatePosition() {
  // get the current position of the logo
  const pos = parseInt(logo.style.left);

  // update the position of the logo
  logo.style.left = `${pos + speed/60}px`;

  // if the logo has moved off the screen, reset its position
  if (pos > window.innerWidth) {
    logo.style.left = "-200px";
  }
}

// start the animation loop
setInterval(updatePosition, 1000/60); // 60 fps
