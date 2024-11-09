// renderProducts.js

function renderProducts() {
    const portfolioContainer = document.getElementById("portfolio-container");
    portfolioContainer.innerHTML = ""; // Очистить предыдущие карточки

    // Создать HTML для каждого продукта
    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        // Внутренний HTML для карточки продукта
        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.title}" class="product-image">
            <h3 class="product-title">${product.title}</h3>
        `;
        portfolioContainer.appendChild(productCard);
    });
}

// Вызываем функцию рендеринга при загрузке страницы
document.addEventListener("DOMContentLoaded", renderProducts);
