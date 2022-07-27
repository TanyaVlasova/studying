let box = document.body.querySelector('.box');
let coordinates = document.body.querySelector('.coordinates');

let boxRect = box.getBoundingClientRect();

document.onclick = function(e) {
    coordinates.innerHTML = `
        x: ${e.clientX - boxRect.left}, 
        y: ${e.clientY - boxRect.top}
    `;
    let point = document.createElement('div');
    point.className = 'point';
    point.style.cssText = `
        width: 10px;
        height: 10px;
        background-color: #000;
        position: absolute;
        top: ${e.clientY - boxRect.top - 5}px;
        left: ${e.clientX - boxRect.left - 5}px;
    `;
    box.prepend(point);
};
