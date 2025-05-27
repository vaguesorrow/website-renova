document.addEventListener('DOMContentLoaded', function () {
    const bluesph1 = document.querySelector('.bluesphere-ques-info-1');
    const whitestr1= document.querySelector('.white-str-info-1');
    const bluesph2 = document.querySelector('.bluesphere-ques-info-2');
    const whitestr2= document.querySelector('.white-str-info-2');
    const bluesph3 = document.querySelector('.bluesphere-ques-info-3');
    const whitestr3= document.querySelector('.white-str-info-3');
    const text1= document.querySelector('.info-text-1');
    const text2= document.querySelector('.info-text-2');
    const text3= document.querySelector('.info-text-3');

    bluesph1.addEventListener('mouseover', function() {
        whitestr1.style.display = 'flex';
        whitestr1.classList.add('fullscreen');
        text1.style.display = 'flex';
        text1.classList.add('fullscreen');
    });

    bluesph1.addEventListener('mouseout', function() {
        whitestr1.style.display = 'none';
        text1.style.display = 'none';
    });

    bluesph1.addEventListener('click', function() {
        window.location.href = "manifest.html";
    });

    bluesph2.addEventListener('mouseover', function() {
        whitestr2.style.display = 'flex';
        whitestr2.classList.add('fullscreen');
        text2.style.display = 'flex';
        text2.classList.add('fullscreen');
    });

    bluesph2.addEventListener('mouseout', function() {
        whitestr2.style.display = 'none';
        text2.style.display = 'none';
    });

    bluesph2.addEventListener('click', function() {
        window.location.href = "contact.html";
    });

    bluesph3.addEventListener('mouseover', function() {
        whitestr3.style.display = 'flex';
        whitestr3.classList.add('fullscreen');
        text3.style.display = 'flex';
        text3.classList.add('fullscreen');
    });

    bluesph3.addEventListener('mouseout', function() {
        whitestr3.style.display = 'none';
        text3.style.display = 'none';
    });

    bluesph3.addEventListener('click', function() {
        window.location.href = "device.html";
    });
});