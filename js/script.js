/*
1. Creare l'array contente le immagini
2. Creo le variabili const querySelector
3. Inserisco le immagini dall'array al miniWrapper con un ciclo
4. Inserisco le funzioni del btnDown e del btnUp
*/


//1.
const archive = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp'
];

console.log(archive)

//2.
const imageWrapper = document.querySelector('.image_wrapper');
const miniWrapper = document.querySelector('.mini_wrapper');
const btnUp = document.querySelector('.up');
const btnDown = document.querySelector('.down');
let counterImg = 0;
console.log(counterImg)

//3.
for(let i = 0; i < archive.length; i++){
  const image = archive[i];
  imageWrapper.innerHTML += `<div class="full hide">
  <img src="${image}"></div>`
  miniWrapper.innerHTML += `<div class="thumbnail">
  <img src="${image}"></div>`
}

const fullCollection = document.getElementsByClassName('full');
const thumbnailCollection = document.getElementsByClassName('thumbnail')

fullCollection[counterImg].classList.remove('hide')


btnUp.addEventListener('click', function(){
  //a.
  fullCollection[counterImg].classList.add('hide')
  // thumbnailCollection[counterImg].classList.remove('active');
  //b.
  counterImg++;
  console.log(counterImg);
  //c.
  fullCollection[counterImg].classList.remove('hide')
  // thumbnailCollection[counterImg].classList.add('active');
  });

//5.
btnDown.addEventListener('click', function(){
  itemsCollection[counterImg].classList.add('hide')
//   thumbnailCollection[counterImg].classList.remove('active');
  counterImg--;
  itemsCollection[counterImg].classList.remove('hide')
  // thumbnailCollection[counterImg].classList.add('active');
  
});
