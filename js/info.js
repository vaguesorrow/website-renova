document.addEventListener('DOMContentLoaded', function () {
    const bluesph1 = document.querySelector('.bluesphere-ques-info-1');
    const whitestr1= document.querySelector('.white-str-info-1');

    bluesph1.addEventListener('mouseover', function() {
        whitestr1.style.display = 'flex';
        whitestr1.classList.add('fullscreen');
    });

    bluesph1.addEventListener('mouseout', function() {
        whitestr1.style.display = 'none';
    });
});