const products = [
    { title: 'Shirt', price: 1500},
    { title: 'Socks', price: 5000},
    { title: 'Jacket', price: 3500},
    { title: 'Shoes', price: 25000},
    { title: 'Shirt', price: 1500 },
    { title: 'Socks', price: 5000 },
    { title: 'Jacket', price: 3500 },
    { title: 'Shoes', price: 2500 },
    
];

//Функция для формирования верстки каждого товара

const renderProduct = (product, img ='https://dummyimage.com/320x240/331e33/f7f7f7.png') => {
    return `<div class="product-item">
                    <img src="${img}"/>
                    <h3>${product.title}</h3>
                    <p>${product.price}</p>
                    <button class="buy-btn">Купить</button>
            </div>`
};

const renderPage = list => {
    document.querySelector('.products').innerHTML = 
        (list.map(product => renderProduct(product))).join('')
};
renderPage(products);