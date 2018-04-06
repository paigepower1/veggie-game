'use strict';

// document.addEventListener('click', (e) => {
//     let i = document.getElementsByClassName('veg');
//     for ( let i = 0; i === i.length; i++){
//         [i].style.visibility = 'hidden';
//     }
//     console.log('clicked');
// });

var veggie = document.querySelector('.veggie');

veggie.addEventListener('click', getCarrot);

function getCarrot(e) {
    for (var i = 0; i = i.length; i++) {
        [i].style.display = 'none';
        console.log([i]);
    }
    console.log('clicked');
}

console.log('veggie');

// console.log('veggie');

// const veggies = document.querySelectorAll('.veg');
// let hideVeggies;

// function 

// on clicks hide veggie
// document.addEventListener('click', (e) => {
//     let hideElement = document.getElementsByClassName('veg');
//     if (hideElement[0]) {
//         hideElement[0].style.display = 'none';
//     }
//     console.log('clicked');
// });

// global scope
// const veggies = document.querySelectorAll('.hole');

// function hideVeggie(veggies) {
//     let veggieArray = Math.floor(Math.random() * veggies.length);

// }


// const veggie = document.getElementsByClassName('.veg');


// const hideVeggieOnClick = (e) => {
//     hide('click'.veggie);
//     console.log('clicked');
// }


// function randomVeg(veggies) {

// }


// this hides div entirely from view
// document.getElementsByClassName('veg')[0].style.visibility = 'hidden';