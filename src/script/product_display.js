// Получаем ID товара из URL
function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Функция отображения данных о товаре
function displayProduct() {
    const productId = getProductIdFromUrl();
    const product = productData[productId];

    if (product) {
        document.getElementById("product-image").src = product.img;
        document.getElementById("product-title").textContent = product.title;
        document.getElementById("product-price").textContent = `${product.price} ₽`;
        document.getElementById("product-description").textContent = product.description;
        document.getElementById("product-quantity").textContent = product.quantity;
        document.getElementById("product-art").textContent = product.art;

        // Обработчики для счетчика
        const quantityDisplay = document.getElementById("quantity-display");
        let quantity = 1;

        document.querySelector(".decrement-button").addEventListener("click", () => {
            if (quantity > 1) {
                quantity--;
                quantityDisplay.textContent = quantity;
            }
        });

        document.querySelector(".increment-button").addEventListener("click", () => {
            if (quantity < 100) {  // можно задать максимальное количество
                quantity++;
                quantityDisplay.textContent = quantity;
            }
        });

    } else {
        document.body.innerHTML = "<p>Товар не найден</p>";
    }
}

document.addEventListener("DOMContentLoaded", displayProduct);
