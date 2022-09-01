/* +1 task */
let slider = document.querySelector('.slider');
let thumb = document.querySelector('.thumb');

thumb.addEventListener('mousedown', event => {
    let shiftX = event.clientX - thumb.getBoundingClientRect().left;
    document.addEventListener('mousemove', mouseMoveX);

    function mouseMoveX(event) {
        let min = 0;
        let max = slider.offsetWidth - thumb.offsetWidth;
        let coordLeft = event.pageX - slider.offsetLeft - shiftX;

        if (coordLeft < min) {
            thumb.style.left = `${min}px`;
        } else if (coordLeft > max) {
            thumb.style.left = `${max}px`;
        } else {
            thumb.style.left = `${coordLeft}px`;
        }
    }

    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', mouseMoveX);
    })
});
/* -1 task */

/* +2 task */
let circle = document.querySelector('.circle');
let goal = document.querySelector('.goal');
let field = document.querySelector('.field');
let goalXY = {
    left: goal.offsetLeft,
    top: goal.offsetTop,
    right: goal.offsetLeft + goal.offsetWidth,
    bottom: goal.offsetTop + goal.offsetHeight
}

circle.addEventListener('mousedown', event => {
    let shiftX = event.clientX - circle.getBoundingClientRect().left;
    let shiftY = event.clientY - circle.getBoundingClientRect().top;

    document.addEventListener('mousemove', mouseMoveXY);

    function mouseMoveXY(event) {
        let circleXY = {
            minX: 0,
            minY: 0,
            maxX: field.offsetWidth - circle.offsetWidth,
            maxY: field.offsetHeight - circle.offsetHeight,
            left: event.pageX - field.offsetLeft - shiftX,
            top: event.pageY - field.offsetTop - shiftY
        }

        if (circleXY.left < circleXY.minX) circleXY.left = circleXY.minX;
        if (circleXY.top < circleXY.minY) circleXY.top = circleXY.minY;
        if (circleXY.left > circleXY.maxX) circleXY.left = circleXY.maxX;
        if (circleXY.top > circleXY.maxY) circleXY.top = circleXY.maxY;

        circle.style.left = `${circleXY.left}px`;
        circle.style.top = `${circleXY.top}px`;

        if (circleXY.left + shiftX >= goalXY.left && circleXY.left + shiftX <= goalXY.right &&
            circleXY.top + shiftY >= goalXY.top && circleXY.top + shiftY <= goalXY.bottom) {
            goal.classList.add('goal-hover');
        } else {
            goal.classList.remove('goal-hover');
        }
    }

    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', mouseMoveXY);
    });
});
/* -2 task */