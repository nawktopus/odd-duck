'use strict'
let images =['/img/bag.jpg','/img/banana.jpg','/img/bathroom.jpg','/img/boots.jpg','/img/breakfast.jpg','/img/bubblegum.jpg','/img/chair.jpg','/img/cthulhu.jpg','/img/dog-duck.jpg','/img/dragon.jpg','/img/pen.jpg','/img/pet-sweep.jpg','/img/scissors.jpg','/img/shark.jpg','/img/sweep.png','/img/tauntaun.jpg','/img/unicorn.jpg','/img/water-can.jpg','/img/wine-glass.jpg', ];

function Image() {
    this.name = 'name';
    this.path = 'path';
    this.times = 0;
    this.score = 0;
    this.index = 0;

    this.rand = function() {
        this.index = array.sort(0.5 - Math.random().slice(0,3));
    }
    

} 

let image = new Image('bag',this.images[0],);

console.log(image.rand());