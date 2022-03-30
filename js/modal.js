const modalButton = document.querySelector('.more');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.modal__close');
const overlay = modal.querySelector('.overlay');

modalButton.addEventListener('click',() => {
    modal.classList.remove('hidden');
});

overlay.addEventListener('click',() => {
    modal.classList.add('hidden');
})

closeButton.addEventListener('click',() => {
    modal.classList.add('hidden');
})