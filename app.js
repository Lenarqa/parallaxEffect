const parralax = document.getElementById('parralax');

window.addEventListener('scroll', function(){
    let offset = window.pageYOffset;
    parralax.style.backgroundPositionY = offset * 0.7 + 'px';
});