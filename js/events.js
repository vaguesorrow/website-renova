document.addEventListener('DOMContentLoaded', function() {
    const events=document.querySelector('.posters');
    const fearpost=document.querySelectorAll('.fear');
    const fearevent=document.querySelector('.event-fear');
    const oktopost=document.querySelectorAll('.okto');
    const oktoevent=document.querySelector('.event-okto');
    const opendaypost=document.querySelectorAll('.openday');
    const opendayevent=document.querySelector('.event-openday');
    const presentpost=document.querySelectorAll('.present');
    const presentevent=document.querySelector('.event-present');
    const sciencepost=document.querySelectorAll('.science');
    const scienceevent=document.querySelector('.event-science');
    const restartbutton=document.querySelectorAll('.restart');
    const imgcont=document.querySelectorAll('.img-cont');
    const posters=document.querySelectorAll('.poster');

    fearpost.forEach(function(element){
        element.addEventListener('click', function(){
            events.style.display = 'none';
            fearevent.style.display = 'flex';
            fearevent.classList.add('fullscreen');
        });
    });

    oktopost.forEach(function(element){
        element.addEventListener('click', function(){
            events.style.display = 'none';
            oktoevent.style.display = 'flex';
            oktoevent.classList.add('fullscreen');
        });
    });

    opendaypost.forEach(function(element){
        element.addEventListener('click', function(){
            events.style.display = 'none';
            opendayevent.style.display = 'flex';
            opendayevent.classList.add('fullscreen');
        });
    });

    presentpost.forEach(function(element){
        element.addEventListener('click', function(){
            events.style.display = 'none';
            presentevent.style.display = 'flex';
            presentevent.classList.add('fullscreen');
        });
    });

    sciencepost.forEach(function(element){
        element.addEventListener('click', function(){
            events.style.display = 'none';
            scienceevent.style.display = 'flex';
            scienceevent.classList.add('fullscreen');
        });
    });

    restartbutton.forEach(function(element){
        element.addEventListener('click', function(){
            fearevent.style.display='none';
            oktoevent.style.display='none';
            opendayevent.style.display='none';
            presentevent.style.display='none';
            scienceevent.style.display='none';
            events.style.display = 'flex';
            events.classList.add('fullscreen');
        });
    });

    posters.forEach(poster => {
        poster.addEventListener('click', () => {
            posters.forEach(post => post.style.zIndex = 1);
            poster.style.zIndex = 9999;
        });
    });
});