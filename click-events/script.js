function hideAppear() {
    if (text1.style.display != 'none') {
        text1.style.display = 'none';
        list1.style.display = 'none';
        this.innerHTML = 'вернуть текст';
    } else {
        text1.style.display = '';
        list1.style.display = '';
        this.innerHTML = 'скрыть текст';
    }
};


function dropdownMenu() {
    box3.classList.toggle('open');
    if (box3.matches('.open')) {
        button3Text.innerHTML = 'скрыть меню';
    } else {
        button3Text.innerHTML = 'открыть меню';
    }
};

function moveBall(event) {
    let fieldCoords = field.getBoundingClientRect();
    let ballCoords = {
        top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
        left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
    };
    if (ballCoords.top < 0) {
        ballCoords.top = 0;
    };
    if (ballCoords.left < 0) {
        ballCoords.left = 0;
    };
    if (ballCoords.top > field.clientHeight - ball.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
    };
    if (ballCoords.left > field.clientWidth - ball.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
    };

    ball.style.top = `${ballCoords.top}px`;
    ball.style.left = `${ballCoords.left}px`;
};

function moveСarousel(event) {
    if ((event.currentTarget === arrowR) && (carouselCoords >= -(carouselList.clientWidth - carouselContainer.clientWidth))
        ) {
        if (carouselCoords === -(carouselList.clientWidth - carouselContainer.clientWidth)) {
            carouselCoords = 0;
            carouselList.style.left = `${carouselCoords}px`; 
        } else {
            carouselCoords -= carouselStep;
            carouselList.style.left = `${carouselCoords}px`;            
        }
    }

    if ((event.currentTarget === arrowL) && (carouselCoords <= 0)) {
        if (carouselCoords === 0) {
            carouselCoords = -(carouselList.clientWidth - carouselContainer.clientWidth);
            carouselList.style.left = `${carouselCoords}px`; 
        } else {
            carouselCoords += carouselStep;
            carouselList.style.left = `${carouselCoords}px`;            
        }
    }
}

let button1 = document.body.querySelector('.box1__button');
let text1 = document.body.querySelector('.box1__text');
let list1 = document.body.querySelector('.box1__list');

let notices = document.body.querySelectorAll('.notice');

let box3 = document.body.querySelector('.box3');
let button3 = document.body.querySelector('.box3__button');
let button3Text = document.body.querySelector('.box3__button-text');

let field = document.body.querySelector('.field');
let ball = document.body.querySelector('.ball');

let [arrowL, arrowR] = document.body.querySelectorAll('.carousel__button');
let carouselList = document.body.querySelector('.carousel__list');
let carouselContainer = document.body.querySelector('.carousel__container');
let carouselItem = document.body.querySelector('.carousel__item');
let carouselStep = parseInt(getComputedStyle(carouselItem).marginRight) + carouselItem.clientWidth;
let carouselCoords = 0;    

button1.addEventListener('click', hideAppear);
for (let notice of notices) {
    notice.insertAdjacentHTML('afterbegin', `<button class='notice__close'>&#215;</button>`);
    notice.firstElementChild.addEventListener('click', () => {
        notice.remove();
    })
}
button3.addEventListener('click', dropdownMenu);
field.addEventListener('click', moveBall);
arrowL.addEventListener('click', moveСarousel);
arrowR.addEventListener('click', moveСarousel);