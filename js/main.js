class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render(); //вывод товаров на страницу
    }

    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Jacket', price: 3500 },
            { id: 2, title: 'Shoes', price: 25000 },
            { id: 3, title: 'Shirt', price: 1500 },
            { id: 4, title: 'Socks', price: 5000 },
            { id: 5, title: 'Jacket', price: 3500 },
            { id: 6, title: 'Shoes', price: 2500 },
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
        }
    }
}

class ProductItem {
    constructor(product, img = 'https://dummyimage.com/320x240/331e33/f7f7f7.png') {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render() {
        return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();

