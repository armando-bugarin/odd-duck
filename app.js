'use strict';

let workingImages = [];
const allImages = [];
const leftImage = document.querySelector('section img:first-child');
const centerImage = document.querySelector('section img:nth-child(2)');
const rightImage = document.querySelector('section img:nth-child(3)');
const viewResults = document.querySelector('div');
const ulElem = document.querySelector('ul');
let leftImageInstance = null;
let centerImageInstance = null;
let rightImageInstance = null;
let clickCtr = 0;
const maxRounds = 25;

function Image(name, imagePath) {
  this.name = name;
  this.imagePath = imagePath;
  this.timesShown = 0;
}

let bag = new Image('bag', 'img/bag.jpg');
let banana = new Image('banana', 'img/banana.jpg');
let bathroom = new Image('bathroom', 'img/bathroom.jpg');
let boots = new Image('boots', 'img/boots.jpg');
let breakfast = new Image('breakfast', 'img/breakfast.jpg');
let bubblegum = new Image('bubblegum', 'img/bubblegum.jpg');
let chair = new Image('chair', 'img/chair.jpg');
let cthulhu = new Image('cthulhu', 'img/cthulhu.jpg');
let dogduck = new Image('dog-duck', 'img/dog-duck.jpg');
let dragon = new Image('dragon', 'img/dragon.jpg');
let pen = new Image('pen', 'img/pen.jpg');
let petsweep = new Image('pet-sweep', 'img/pet-sweep.jpg');
let scissors = new Image('scissors', 'img/scissors.jpg');
let shark = new Image('shark', 'img/shark.jpg');
let sweep = new Image('sweep', 'img/sweep.jpg');
let tauntaun = new Image('tauntaun', 'img/tauntaun.jpg');
let unicorn = new Image('unicorn', 'img/unicorn.jpg');
let watercan = new Image('water-can', 'img/water-can.jpg');
let wineglass = new Image('wine-glass', 'img/wine-glass.jpg');

allImages.push(bag);
allImages.push(banana);
allImages.push(bathroom);
allImages.push(boots);
allImages.push(breakfast);
allImages.push(bubblegum);
allImages.push(chair);
allImages.push(cthulhu);
allImages.push(dogduck);
allImages.push(dragon);
allImages.push(pen);
allImages.push(petsweep);
allImages.push(scissors);
allImages.push(shark);
allImages.push(sweep);
allImages.push(tauntaun);
allImages.push(unicorn);
allImages.push(watercan);
allImages.push(wineglass);

function renderImages() {

  if (clickCtr == maxRounds) {

    viewResults.addEventListener('click', handleViewResultsClick);

    leftImage.removeEventListener('click', handleLeftImageClick);
    centerImage.remoteEventListener('click', handleCenterImageClick);
    rightImage.removeEventListener('click', handleRightImageClick);
  }

  console.log(allImages);
  if (workingImages.length <= 1) {
    workingImages = allImages.slice();
    shuffleArray(workingImages);
  }

  leftImageInstance = workingImages.pop();
  console.log(leftImageInstance.imagePath);
  leftImage.setAttribute('src', leftImageInstance.imagePath);

  centerImageInstance = workingImages.pop();
  centerImage.setAttribute('src', centerImageInstance.imagePath);

  rightImageInstance = workingImages.pop();
  rightImage.setAttribute('src', rightImageInstance.imagePath);

  leftImageInstance.views += 1;
  centerImageInstance.views += 1;
  rightImageInstance.views += 1;
}

renderImages();

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function handleLeftImageClick() {
  if(clickCtr < maxRounds) {
    leftImageInstance.clicks += 1;
    clickCtr += 1;
  }
  renderImages();
}

function handleCenterImageClick() {
  if(clickCtr < maxRounds) {
    centerImageInstance.clicks += 1;
    clickCtr += 1;
  }
  renderImages();
}

function handleRightImageClick() {
  if(clickCtr < maxRounds) {
    rightImageInstance.clicks += 1;
    clickCtr += 1;
  }
  renderImages();
}

function handleViewResultsClick() {
  renderResults();
}

leftImage.addEventListener('click', handleLeftImageClick);
centerImage.addEventListener('click', handleCenterImageClick);
rightImage.addEventListener('click', handleRightImageClick);

renderImages();

function renderResults() {
  for(let i = 0; i < allImages.length; i++) {
    const currentImage = allImages[i];
    const result = `${currentImage.name} has ${currentImage.views} views and was clicked ${currentImage.clicks} times.`;

    const liElem = document.createElement('li');
    ulElem.appendChild(liElem);
    liElem.textContent = result;
  }
}
