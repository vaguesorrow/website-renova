document.addEventListener('DOMContentLoaded', function(){
    const man = document.querySelector('.manifest');
    const finman = document.querySelector('.fin-manifest');

    man.addEventListener('animationend', () => {
        finman.style.opacity = '1';
    });
});