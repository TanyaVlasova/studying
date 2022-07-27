let products = [
    {
        name: 'Свеча в керамическом стакане',
        price: 2000,
        image: 'image/1product.jpg'
    },
    {
        name: 'Свеча в керамическом стакане',
        price: 2000,
        image: 'image/2product.jpg'
    },
    {
        name: 'Мыло Charcoal',
        price: 250,
        image: 'image/3product.jpg'
    }
];

let box = document.body.querySelector('.box');

// Первый вариант
for (let product of products) {

    let card = document.createElement('section');
    card.className = 'card';

    let imageBox = document.createElement('div');
    imageBox.className = 'image-box';

    let image = document.createElement('img');
    image.className = 'image';
    image.src = product.image;

    let name = document.createElement('p');
    name.className = 'name';
    name.innerHTML = product.name;

    let price = document.createElement('span');
    price.className = 'price';
    price.innerHTML = product.price;

    imageBox.append(image);
    card.append(imageBox, name, price);
    box.append(card);
};

// Второй вариант
for (let product of products) {
    box.insertAdjacentHTML('beforeend', `
        <section class='card'>
            <div class='image-box'>
                <img class='image' src='${product.image}'>
            </div>
            <p class='name'>${product.name}</p>
            <span class='price'>${product.price}</span>
        </section>
    `)
}