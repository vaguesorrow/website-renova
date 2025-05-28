document.addEventListener('DOMContentLoaded', function () {
    const bluesph = document.querySelector('.bluesphere-ques-instr');
    const whitestr= document.querySelector('.white-str-instr');
    const text= document.querySelector('.instr-text');

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