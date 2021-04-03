console.log('Hello World!');
let makeDiv = document.getElementById('dot');
  let randomWay = Math.floor(Math.random()*100);
  let randomPosition = Math.floor(Math.random()*100);
  let randomSize = Math.floor(Math.random()*100)+20;
  let randomOpacity = Math.floor(Math.random()*10);
  
  makeDiv.style.zoom = randomSize+'%';
  makeDiv.style.left = randomWay+'vw';
  makeDiv.style.left = randomPosition+'vw';
  makeDiv.style.opacity = '0.'+randomOpacity;

