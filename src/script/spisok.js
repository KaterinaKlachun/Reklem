const customSelect = document.querySelector('.custom-select');
const selected = customSelect.querySelector('.selected');
const optionsContainer = customSelect.querySelector('.options');
const arrow = selected.querySelector('.arrow');

selected.addEventListener('click', () => {
    const isOpen = optionsContainer.style.display === 'block';
    optionsContainer.style.display = isOpen ? 'none' : 'block';
    customSelect.classList.toggle('open', !isOpen); // Добавляем/убираем класс для поворота стрелки
});

customSelect.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', () => {
        selected.firstChild.textContent = option.textContent; // Устанавливаем текст выбранного цвета
        optionsContainer.style.display = 'none'; // Скрываем опции
        customSelect.classList.remove('open'); // Убираем класс для стрелки
    });
});

// Закрываем выпадающий список, если кликнули вне его
document.addEventListener('click', (event) => {
    if (!customSelect.contains(event.target)) {
        optionsContainer.style.display = 'none';
        customSelect.classList.remove('open');
    }
});
