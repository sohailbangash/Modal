'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

//****** Final code this is function base code very hande for understanding ******/

const openModal = function() {
    modal.classList.remove('hidden'); //! Here not use (.hidden class name)
    overlay.classList.remove('hidden');
};

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal); //? openModal is function click with btn. And openModal() this is envok or direct fnt.

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Modal close using escape key

document.addEventListener('keydown', function(e) {
    //e mean event
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

//!   First look there is no function (We make function for  repeting code) **************/

// for (let i = 0; i < btnsOpenModal.length; i++)
//     btnsOpenModal[i].addEventListener('click', function() {
//         modal.classList.remove('hidden');
//         overlay.classList.remove('hidden');
//     });

// btnCloseModal.addEventListener('click', function() {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });

// overlay.addEventListener('click', function() {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// });

// Modal close using escape key

// document.addEventListener('keydown', function(e) {
//     //e mean event
//     console.log(e.key);
//     if (e.key === 'Escape') {
//         if (!modal.classList.contains('hidden')) {
//             closeModal();
//         }
//     }
// });