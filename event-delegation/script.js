/* +1 task */
let noticesList = document.querySelector('.notices__list');
noticesList.addEventListener('click', deleteNotice);

function deleteNotice(event) {
    if (event.target.tagName === 'BUTTON') {
        event.target.closest('.notices__item').remove();        
    };
};
/* -1 task */

/* +2 task */
let yummyList = document.querySelector('.yummy__list');
yummyList.addEventListener('click', hiddenList);

function hiddenList(event) {
    if (event.target.tagName != 'SPAN') return;

    let parentLi = event.target.closest('li');

    if (parentLi.lastElementChild.tagName === 'UL') {
        parentLi.lastElementChild.classList.toggle('hidden-list');
    };
};
/* -2 task */

/* +3 task */
let FOODDATA = [
    {
        name: 'Пицца с хамоном',
        price: 450
    },
    {
        name: 'Роллы Филадельфия',
        price: 390
    },
    {
        name: 'Вок с курицей',
        price: 420
    },
    {
        name: 'Сашими из тунца',
        price: 800
    },
    {
        name: 'Бургер с говядиной',
        price: 510
    },
    {
        name: 'Паста с креветками',
        price: 780
    }
];

let foodSort = document.querySelector('.food__sort');
let foodSortMenu = document.querySelector('.food__sort-menu');
let foodList = document.querySelector('.food__list');
let foodListArray = [];
let foodListArrayDefault = [];

for (let elem of FOODDATA) {
    foodList.insertAdjacentHTML('beforeend', `
        <li class="food__item">
            <h3 class="food__name">${elem.name}</h3>
            <span class="food__price">${elem.price}</span>
        </li>
    `);
};

for (let elem of Array.from(foodList.children)) {
    foodListArray.push(elem);
};

foodListArrayDefault = foodListArray.slice();
foodSort.addEventListener('click', toggleSortMenu);
let selectedSort = foodSort.lastElementChild.textContent;
foodSortMenu.addEventListener('click', chooseSort);

function chooseSort(event) {
    if (event.target.tagName != 'SPAN') return;

    foodSort.lastElementChild.innerHTML = event.target.textContent;
    if (selectedSort !== foodSort.lastElementChild.textContent) {
        selectedSort = foodSort.lastElementChild.textContent;

        toggleSortMenu();
        sortList(selectedSort);        
    };
};

function toggleSortMenu() {
    foodSortMenu.classList.toggle('is-open');
};

function sortList(selectedSort) {
    if (selectedSort == 'по умолчанию') {
        for (let elem of foodListArrayDefault) {
            foodList.append(elem);
        }
    };
    if (selectedSort == 'по убыванию цены') {
        foodListArray.sort(sortDescending);
        for (let elem of foodListArray) {
            foodList.append(elem);
        }
    };
    if (selectedSort == 'по возрастанию цены') {
        foodListArray.sort(sortAscending);
        for (let elem of foodListArray) {
            foodList.append(elem);
        }
    };
};

function sortDescending(a, b) {
    return +b.lastElementChild.textContent - +a.lastElementChild.textContent;
};

function sortAscending(a, b) {
    return +a.lastElementChild.textContent - +b.lastElementChild.textContent;
};
/* -3 task */