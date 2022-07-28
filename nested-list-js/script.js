let list = [
    'soap', [
        'mango',
        'salt',
        'oatmeal',
        'choculate'
    ],
    'candles', [
        'mango and milk',
        'pumpkin pie',
        'vetiver'
    ]
]

let box = document.querySelector('.box');
let ul1 = document.createElement('ul');

for (let el1 of list) {
    if (typeof el1 === 'string') {
        let li1 = document.createElement('li');
        li1.innerHTML = el1;
        ul1.append(li1);
    } else {
        let ul2 = document.createElement('ul');
        for (let el2 of el1) {
            if (typeof el2 === 'string') {
                let li2 = document.createElement('li');
                li2.innerHTML = '-----' + el2;
                ul2.append(li2); 
            }
        };
        ul1.append(ul2);
    }
}

box.append(ul1);