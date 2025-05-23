document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.menu');
    const iconmenu = document.querySelector('.icon-menu')
    const btnmenu = document.querySelector('.clickmenu');

    btnmenu.addEventListener('click', function () {
        menu.style.display = 'flex';
        menu.classList.add('fullscreen');
        iconmenu.style.display = 'flex';
        iconmenu.classList.add('fullscreen');
    });

    menu.addEventListener('click', function () {
        menu.style.display = 'none';
        iconmenu.style.display = 'none';
    });

    document.querySelector(".text-menu-1").addEventListener("click", () => {
        window.location.href = "info.html";
    });
});