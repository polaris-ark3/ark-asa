// Функция для случайного перехода на одну из трех страниц
function circleTeleport() {
    const pages = ["AbberationPage.html", "EarthPage.html", "TheCenterPage.html"];
    const randomPage = pages[Math.floor(Math.random() * pages.length)];
    window.location.href = randomPage;
}
