const menuBtn = document.getElementById("menuBtn");//siempre camelkase primerminuscula y sigue con mayuscula
const aside = document.querySelector('aside');


menuBtn.addEventListener('click', function(){
    
    aside.classList.toggle('active');
})