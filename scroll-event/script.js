let height = document.documentElement.getBoundingClientRect().height;
let list = document.querySelector('.list');
let buttonUp = document.querySelector('.button-up');
const content = `
    <li class="item"></li>
    <li class="item"></li>
    <li class="item"></li>

    <li class="item"></li>
    <li class="item"></li>
    <li class="item"></li>
`;

function addScroll() {
    let htmlHeight = document.documentElement.clientHeight;
    let htmlBottom = document.documentElement.getBoundingClientRect().bottom;
    if (htmlBottom - htmlHeight < 100) {
        list.insertAdjacentHTML('beforeend', content);
    }
}

function showButtonUp() {
    let listScrollTop = list.getBoundingClientRect().top;
    if (listScrollTop < -300) {
        buttonUp.classList.add('show');
    } else {
        buttonUp.classList.remove('show')
    }
}

document.addEventListener('scroll', addScroll);
document.addEventListener('scroll', showButtonUp);

buttonUp.addEventListener('click', event => {
    if (!buttonUp.classList.contains('show')) return;
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
})