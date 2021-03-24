console.log('Hello World!');

for(i=0;i<=40;i++){
  let randomNumber = Math.floor(Math.random()*100);
  let randomSize = Math.floor(Math.random()*100);
  let makeDiv = document.createElement('div');
  makeDiv.style.fontSize = randomSize+'%';
  makeDiv.style.left = randomNumber+'vw';
  makeDiv.innerText = '*';
  document.getElementById('dot').appendChild(makeDiv)
};