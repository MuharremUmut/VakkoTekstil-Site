// script.js

document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.product-item button');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productItem = button.closest('.product-item');
            const productName = productItem.querySelector('h3').innerText;
            const price = parseFloat(productItem.querySelector('p').innerText);

            addToCart(productName, price);
        });
    });
});

function addToCart(productName, price) {
    let cartItems = localStorage.getItem('cartItems');
    cartItems = cartItems ? JSON.parse(cartItems) : [];

    cartItems.push({ name: productName, price: price });

    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Sepet sayfasına yönlendirme
    window.location.href = 'sepet.html';
}
function addToCart(productName, price) {
    // Sepet öğelerini localStorage'de saklamak için JSON formatında ekliyoruz
    let cartItems = localStorage.getItem('cartItems');
    cartItems = cartItems ? JSON.parse(cartItems) : [];

    // Yeni ürünü sepete ekliyoruz
    cartItems.push({ name: productName, price: price });

    // localStorage'de güncellenmiş sepet öğelerini saklıyoruz
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Sepet sayfasına yönlendirme
    window.location.href = 'sepet.html';
}

function addToCart(productName, price, imageUrl) {
    // Sepet öğelerini localStorage'de saklamak için JSON formatında ekliyoruz
    let cartItems = localStorage.getItem('cartItems');
    cartItems = cartItems ? JSON.parse(cartItems) : [];

    // Yeni ürünü sepete ekliyoruz
    cartItems.push({ name: productName, price: price, image: imageUrl });

    // localStorage'de güncellenmiş sepet öğelerini saklıyoruz
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Sepet sayfasına yönlendirme
    window.location.href = 'sepet.html';
}

document.addEventListener('DOMContentLoaded', function() {
    // localStorage'den sepet öğelerini al
    let cartItems = localStorage.getItem('cartItems');
    cartItems = cartItems ? JSON.parse(cartItems) : [];

    // Sepet listesini al
    const productList = document.getElementById('productList');

    // Her ürün için liste öğesi oluştur ve sepet listesine ekle
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price}£`;
        productList.appendChild(li);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.product-item button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Ürün bilgilerini al
            const productItem = this.closest('.product-item');
            const productName = productItem.querySelector('h3').textContent;
            const productPrice = productItem.querySelector('p').textContent;

            // Sepet öğelerini localStorage'e eklemek için işlemler
            let cartItems = localStorage.getItem('cartItems');
            cartItems = cartItems ? JSON.parse(cartItems) : [];

            cartItems.push({ name: productName, price: productPrice });

            localStorage.setItem('cartItems', JSON.stringify(cartItems));

            // Sepet sayfasına yönlendirme
            window.location.href = 'sepet.html';
        });
    });
});
