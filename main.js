console.log('Hello World!');
let makeDiv = document.getElementById('dot');
  makeDiv.innerText = '*';
  let randomNumber = Math.floor(Math.random()*100);
  let randomSize = Math.floor(Math.random()*100)+20;
  let randomOpacity = Math.floor(Math.random()*10);
  
  makeDiv.style.fontSize = randomSize+'%';
  makeDiv.style.left = randomNumber+'vw';
  makeDiv.style.opacity = '0.'+randomOpacity;

function moveDiv(){
  makeDiv.style.transform ='translate(200px 200px)' 
}