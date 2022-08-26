/* +1 task */
let list = document.querySelector('.list');
let currentElem = null;

list.addEventListener('mouseover', function (event) {
    let elem = event.target.closest('li');
    if (!elem) return;
    elem.classList.add('item_selected');
})

list.addEventListener('mouseout', function (event) {
    let elem = event.target.closest('li');
    if (!elem) return;
    elem.classList.remove('item_selected');
})
/* -1 task */

/* +2 task */
let questions = document.querySelector('.questions');

questions.addEventListener('mouseover', function (event) {
    let elem = event.target.closest('.questions__text');
    if (!elem) return;
    elem.nextElementSibling.classList.add('tooltip-open');
});
questions.addEventListener('mouseout', function (event) {
    let elem = event.target.closest('.questions__text');
    if (!elem) return;
    elem.nextElementSibling.classList.remove('tooltip-open');
})
/* -2 task */