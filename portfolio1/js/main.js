
const list = document.querySelector('header nav ul');
const links = document.querySelectorAll('header nav ul li a');

links.forEach(a => {
    a.addEventListener('click', e => {
        list.style.left = '-100%';
        document.getElementById("checkbox").checked = false;
    });
});

document.getElementById("checkbox").addEventListener("change", e => {
    
    e.target.checked ? list.style.left = '0': list.style.left = '-100%';

});


/*

Carousel based on:

https://codepen.io/Nathan_James/pen/BvNLzO

*/

const carousel = document.querySelector("#experience ul");
const card = carousel.querySelector(".exp");
const leftButton = document.querySelector(".btn-prev");
const rightButton = document.querySelector(".btn-next");

const carouselWidth = 200;
const cardStyle = card.currentStyle || window.getComputedStyle(card)
const cardMarginRight = 0;


const cardCount = carousel.querySelectorAll(".exp").length;

let offset = 0;
const max = -(cardCount  * carouselWidth + (cardMarginRight * cardCount) - carouselWidth - cardMarginRight);

leftButton.addEventListener("click", () => {
  if(offset !== 0){
        offset += carouselWidth;
        carousel.style.transform = `translateX(${offset}px)`;
    }
});

rightButton.addEventListener("click", () => {
    if(offset !== max){
        offset -= carouselWidth;
        carousel.style.transform = `translateX(${offset}px)`;
    }
});