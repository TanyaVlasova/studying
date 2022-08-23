/* +1 task */
let wiki = document.querySelector('.wiki');
wiki.addEventListener('click', transitionСonfirmation);

function transitionСonfirmation(event) {
    let link = event.target.closest('a');
    if (!link) return;
    if (!confirm(`Вы хотите перейти по ссылке ${link.href}?`)) {
        event.preventDefault();
    };
};
/* -1 task */

/* +2 task */
let selectedImage = document.querySelector('.gallery__selected-img');
let galleryList = document.querySelector('.gallery__list');
galleryList.addEventListener('click', chooseImage);

console.log(selectedImage.getAttribute('src'));
function chooseImage(event) {
    if (event.target.tagName != 'IMG') return;
    selectedImage.setAttribute('src', event.target.getAttribute('src'));
    selectedImage.setAttribute('alt', event.target.getAttribute('src'));
}
/* -2 task */