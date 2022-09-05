const tracker = document.querySelector('.task-tracker');
const sections = document.querySelectorAll('.section');

document.addEventListener('mousedown', event => {
    event.preventDefault();
    let task = event.target.closest('.task');
    if (!task) return;

    let cell = event.target.closest('.cell');
    let currentCell = cell;
    let section = event.target.closest('.section');

    let trackerCoords = {
        minLeft: tracker.offsetLeft - cell.offsetLeft,
        maxLeft: tracker.offsetWidth - cell.offsetWidth + tracker.offsetLeft - cell.offsetLeft,
        minTop: tracker.offsetTop - cell.offsetTop,
        maxTop: tracker.offsetHeight - cell.offsetHeight + tracker.offsetTop - cell.offsetTop
    }

    let shiftX = event.clientX - task.getBoundingClientRect().left;
    let shiftY = event.clientY - task.getBoundingClientRect().top;

    document.addEventListener('mousemove', moveTask);
    document.addEventListener('mouseup', taskDrop, { once: true });

    function moveTask(event) {
        let moveX = event.pageX - cell.offsetLeft - shiftX;
        let moveY = event.pageY - cell.offsetTop - shiftY;

        if (moveX < trackerCoords.minLeft) moveX = trackerCoords.minLeft;
        if (moveX > trackerCoords.maxLeft) moveX = trackerCoords.maxLeft;
        if (moveY < trackerCoords.minTop) moveY = trackerCoords.minTop;
        if (moveY > trackerCoords.maxTop) moveY = trackerCoords.maxTop;

        task.style.left = `${moveX}px`;
        task.style.top = `${moveY}px`;
        task.style.zIndex = 1000;

        task.classList.add('hide');
        let sectionBellow = document.elementFromPoint(event.clientX, event.clientY);
        if (sectionBellow) {
            sectionBellow = sectionBellow.closest('.section')
        }
        task.classList.remove('hide');

        for (let elem of sections) {
            if (elem !== section && elem.lastElementChild.hasChildNodes()) {
                elem.insertAdjacentHTML('beforeend', `<li class="cell"></li>`)
            }
        }

        if (sectionBellow) {
            currentCell.classList.remove('hovered');

            if (sectionBellow == section) {
                currentCell = cell;
                currentCell.classList.add('hovered');
            } else {
                currentCell = sectionBellow.lastElementChild;
                currentCell.classList.add('hovered');
            }
        } else {
            currentCell.classList.remove('hovered');
        }
    }

    function taskDrop() {
        document.removeEventListener('mousemove', moveTask);
        task.style.zIndex = '';

        if (!currentCell) return;

        currentCell.append(task);
        task.style.left = `0`;
        task.style.top = `0`;

        for (let section of sections) {
            for (let cell of section.children) {
                if (!cell.hasChildNodes()) {
                    cell.remove()
                }
            }
        }
    }
});