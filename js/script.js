"use strict"
const slider = document.querySelector(".image-slider");
const arrLeft = document.querySelector(".arrow-left");
const arrRight = document.querySelector(".arrow-right");
const heading = document.querySelector(".caption h1");
const desc = document.querySelector(".caption p");

const images = [
  "img-1.jpg", "img-2.jpg", "img-3.jpg", "img-4.jpg", "img-5.jpg"
];

const headings = [
  "New York, USA", "Tokyo, Japan", "Dubai, UAE", "Paris, France", "Rome, Italy"
]

const descs = [
  "The city that never sleeps",
  "The city of lights",
  "Home to the tallest skyscraper",
  "The city of love",
  "The city of seven hills",
]

let id = 0;

function slide(id){
  slider.style.backgroundImage = `url(../images/${images[id]})`;
  slider.classList.add('image-fade');
  setTimeout ( () =>{
    slider.classList.remove('image-fade');
  }, 550);
  heading.innerText = headings[id];
  desc.innerText = descs[id]
}

arrLeft.addEventListener('click', ()=>{
  id--;
  if(id < 0){
    id = images.length -1;
  }
  slide(id);
});

arrRight.addEventListener('click', ()=>{
  id++;
  if (id > images.length -1) {
    id = 0;
  }
  slide(id);
});