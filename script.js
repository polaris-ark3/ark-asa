document.addEventListener('DOMContentLoaded', function () {
    // Находим все заголовки с классом .toggle-btn
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    // Для каждого заголовка добавляем обработчик событий
    toggleButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Находим следующий элемент (список) после заголовка
            const toggleContent = button.nextElementSibling;

            // Проверяем, существует ли список, и переключаем класс .show
            if (toggleContent && toggleContent.classList.contains('toggle-content')) {
                toggleContent.classList.toggle('show');
            }
        });
    });
});
