ulmob = document.querySelector('.ul_mobile');
contbur = document.querySelector('.contburger');

contbur.addEventListener('click', function(){
    ulmob.style.display = 'block';
    ulmob.style.position = 'absolute';
    ulmob.style.top = '60px';
    ulmob.style.zIndex = '15';
    ulmob.style.background = 'white';
})