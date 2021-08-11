/*text scroll thingie*/
let stayHome = document.getElementById("stayHome")
let beSafe = document.getElementById("beSafe")

window.addEventListener('scroll',function(){
    var value = window.scrollY;

    beSafe.style.bottom = value / 5 +'px';
    stayHome.style.bottom = value +'px';
}) 
