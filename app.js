'use strict';

function Rand () {
    this.name = "name";
    this.path = "path";
    this.times = 0;
    this.clicks = 0;
}

let photos = ['img/bag.jpg', 
'img/banana.jpg', 
'img/bathroom.jpg', 
'img/boots.jpg', 
'img/breakfast.jpg', 
'img/bubblegum.jpg', 
'img/chair.jpg', 
'img/cthulhu.jpg', 
'img/dog-duck.jpg', 
'img/dragon.jpg', 
'img/pen.jpg', 
'img/pet-sweep.jpg', 
'img/scissors.jpg', 
'img/shark.jpg', 
'img/sweep.jpg', 
'img/tauntaun.jpg', 
'img/unicorn.jpg', 
'img/water-can.jpg', 
'img/wine-glass.jpg',];

let item = 0;

function getRand(photos) {
    const test = document.getElementById('img');
    let len = photos.length;
    let rand = Math.floor(Math.random() * len);
    let item = photos[rand];
    test.appendChild(item);
}

console.log(photos[0]);
console.log(this.rand);

