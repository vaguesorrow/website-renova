document.addEventListener('DOMContentLoaded', function () {
    const bluesph = document.querySelector('.bluesphere-ques-dev');
    const whitestr= document.querySelector('.white-str-dev');
    const text= document.querySelector('.device-text');

    bluesph.addEventListener('mouseover', function() {
        whitestr.style.display = 'flex';
        whitestr.classList.add('fullscreen');
        text.style.display = 'flex';
        text.classList.add('fullscreen');
    });

    bluesph.addEventListener('mouseout', function() {
        whitestr.style.display = 'none';
        text.style.display = 'none';
    });

    bluesph.addEventListener('click', function() {
        window.location.href = "instruction.html";
    });

    
});