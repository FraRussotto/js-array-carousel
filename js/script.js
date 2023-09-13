/*
1. Creare l'array contente le immagini
2. Creo le variabili const querySelector
3. Inserisco le immagini dall'array al miniWrapper con un ciclo
4. Inserisco le funzioni del btnDown
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
const btnTop = document.querySelector('.up');
const btnDown = document.querySelector('.down');
let counterImg = 0;

//3.
for(let i = 0; i < archive.length; i++){
  const image = archive[i];
  imageWrapper.innerHTML += `<div class="full d-none">
  <img src="${image}"></div>`
  miniWrapper.innerHTML += `<div class="thumbnail">
  <img src="${image}"></div>`
}

const fullCollection = document.getElementsByClassName('full');
const thumbnailCollection = document.getElementsByClassName('thumbnail')

fullCollection[counterImg].classList.remove('d-none')


