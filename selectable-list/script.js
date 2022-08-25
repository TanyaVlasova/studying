let multList = document.querySelector('.mult__list');
let multItems = document.querySelectorAll('.mult__item');
multList.addEventListener('click', highlightItem);

function highlightItem(event) {
    let li = event.target;
    console.log(event)
    if (li.tagName !== 'LI') return;
    (event.ctrlKey || event.metaKey) ? selectALot(li) : selectOne(li);
}

function selectALot(li) {
    li.classList.toggle('selected');
}

function selectOne(li) {
    for (let elem of multItems) {
        elem.classList.remove('selected');
    }
    li.classList.add('selected');
}