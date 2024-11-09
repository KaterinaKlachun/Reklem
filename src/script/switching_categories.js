// Функция для рендеринга продуктов
function renderProducts(category) {
    const catalogContainer = document.getElementById("catalog-container");
    catalogContainer.innerHTML = ""; // Очистить предыдущие карточки

    // Получить продукты выбранной категории
    const categoryProducts = products[category];

    // Создать HTML для каждого продукта
    categoryProducts.forEach((product, index) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.setAttribute("data-category", category); // Добавляем атрибут категории
        productCard.setAttribute("data-id", index + 1); // Устанавливаем ID товара

        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.title}" class="product-image">
            <h3 class="product-title">${product.title}</h3>
            <button class="product-button" data-id="${index + 1}">Выбрать вид</button>
            <p class="product-price">${product.price}</p>
        `;
        catalogContainer.appendChild(productCard);
    });

    // Привязываем обработчики событий к кнопкам после рендеринга
    attachButtonListeners();
}

// Функция для привязки обработчиков к кнопкам
function attachButtonListeners() {
    document.querySelectorAll(".product-button").forEach(button => {
        button.addEventListener("click", () => {
            const productCard = button.closest('.product-card');
            const category = productCard.getAttribute("data-category");
            const productId = productCard.getAttribute("data-id");

            // Формируем URL для страницы нужной категории
            const productPageUrl = `/html/${category}.html?id=${productId}`;
            window.location.href = productPageUrl;
        });
    });
}

// Обработчик клика на категории
document.querySelectorAll(".category_1").forEach(categoryElement => {
    categoryElement.addEventListener("click", (event) => {
        event.preventDefault(); // Предотвращаем перезагрузку страницы
        const category = categoryElement.getAttribute("data-category"); // Получаем категорию
        renderProducts(category); // Отображаем продукты для этой категории
    });
});

// Загружаем "Кружки" по умолчанию
renderProducts("mugs");
