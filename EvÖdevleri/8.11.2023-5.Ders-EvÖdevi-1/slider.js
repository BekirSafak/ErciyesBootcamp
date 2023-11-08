let slider = document.querySelector('.imageSlider');
let leftBTN = document.querySelector('.leftBTN');
let rightBTN = document.querySelector('.rightBTN');
let textH1 = document.querySelector('.textContainer h1');
let textP = document.querySelector('.textContainer p');

let images = [
    "car1.jpg",
    "car2.jpg",
    "car3.jpg",
    "car4.jpg",
]

let textHeads = [
    "CAR-1",
    "CAR-2",
    "CAR-3",
    "CAR-4"
]

let textPar = [
    "Slider-1",
    "Slider-2",
    "Slider-3",
    "Slider-4",
]

let sliderID = 0;

function slide(sliderID) {
    slider.style.backgroundImage = `url(images/${images[sliderID]})`

    // Buradaki .imgOpc css içerisinde yazıldı.
    slider.classList.add('imgOpc');

    setTimeout(() => {
        slider.classList.remove('imgOpc')
    }, 500);

    textH1.innerText = textHeads[sliderID];
    textP.innerText = textPar[sliderID];
}

leftBTN.addEventListener('click', () => {
    sliderID--;
    if (sliderID < 0) {
        sliderID = images.length - 1;
    }
    slide(sliderID);
})

rightBTN.addEventListener('click', () => {
    sliderID++;
    if (sliderID > images.length - 1) {
        sliderID = 0;
    }
    slide(sliderID);
})

setInterval(() => {
    sliderID++;
    if (sliderID > images.length - 1) {
        sliderID = 0;
    }
    slide(sliderID);
    console.log('change')
}, 5000);