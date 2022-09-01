'use strict'

let imageContainer = document.querySelector('section');
let resultButton = document.querySelector('section + div');
let img1 = document.querySelector('section img:first-child');
let img2 = document.querySelector('section img:nth-child(2)');
let img3 = document.querySelector('section img:nth-child(3)');

let click = 0;
let maxClick = 25;

function Image(name, src) {
    this.name = name;
    this.src = src;
    this.views = 0;
    this.click = 0;
    Image.imgArray.push(this);
} 

Image.imgArray = [];

function getRand() {
    return Math.floor(Math.random() * Image.imgArray.length);
}

function getImage() {
    let image1 = getRand();
    let image2 = getRand();
    let image3 = getRand();

    while(image1 === image2) {
        image2 = getRand();
    }

    while(image1 === image3) {
        image3 = getRand();
    }

    while (image2 === image3) {
        image3 = getRand();
    }

    img1.src = Image.imgArray[image1].src;
    img2.src = Image.imgArray[image2].src;
    img3.src = Image.imgArray[image3].src;
    img1.alt = Image.imgArray[image1].name;
    img2.alt = Image.imgArray[image2].name;
    img3.alt = Image.imgArray[image3].name;
    Image.imgArray[image1].views++;
    Image.imgArray[image2].views++; 
    Image.imgArray[image3].views++;  
}

function imageClicks(event) {
    if (event.target === imageContainer) {
        alert('Please click on the image')
    }
    click++;
    let clickImage = event.target.alt; 
    for (let i = 0; i < Image.imgArray.length; i++) {
        if (clickImage === Image.imgArray[i].name) {
        Image.imgArray[i].click++;
        break;
        }
    }

if (click === maxClick) {
    imageContainer.removeEventListener('click', imageClicks);
    resultButton.addEventListener('click', getResults);
    resultButton.className = 'clicks-allowed';
    imageContainer.className = 'no-voting';
} else {
    getImage();
}
}


function getResults() {
    let ul = document.querySelector('ul');
    for (let i=0; i < Image.imgArray.length; i++) {
        let li =document.createElement('li')
        li.textContent = `${Image.imgArray[i].name} had ${Image.imgArray[i].views} view and was clicked ${Image.imgArray[i].click} times.`;
        ul.appendChild(li);
    }
}

new Image('bag', './img/bag.jpg');
new Image('banana', './img/banana.jpg');
new Image('bathroom', './img/bathroom.jpg');
new Image('boots', './img/boots.jpg');
new Image('breakfast', './img/breakfast.jpg');
new Image('bubblegum', './img/bubblegum.jpg');
new Image('chair', './img/chair.jpg');
new Image('cthulhu', './img/cthulhu.jpg');
new Image('dog-duck', './img/dog-duck.jpg');
new Image('dragon', './img/dragon.jpg');
new Image('pen', './img/pen.jpg');
new Image('pet-sweep', './img/pet-sweep.jpg');
new Image('scissors', './img/scissors.jpg');
new Image('shark', './img/shark.jpg');
new Image('sweep', './img/sweep.png');
new Image('tauntaun', './img/tauntaun.jpg');
new Image('unicorn', './img/unicorn.jpg');
new Image('water-can', './img/water-can.jpg');
new Image('wine-glass', './img/wine-glass.jpg');

getImage();

imageContainer.addEventListener('click', imageClicks);
// let image = new Image('bag', images[0],);

// function getRand(images) {
//     const test = document.getElementById('content');
//     let len = images.length;
//     let rand = Math.floor(Math.random() * len);
//     let item = images[rand];
//     test2.appendChild(item);
//     test.appendChild(test2);
// }

//  function randomImage () {
//         let index = array.sort(0.5 - Math.random().slice(0,3));
//     }

// getRand();