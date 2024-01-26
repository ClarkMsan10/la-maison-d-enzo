var lastScroll = window.scrollY;

var topbar =  document.querySelector(".topbar");
var navbar = document.querySelector(".navbar");

console.log(topbar);
window.onscroll = function(){
    var currentScrollpos = window.scrollY;
    if(currentScrollpos < 10 ){
        topbar.style.top = "0";
    }
    else{
        topbar.style.top = "-400px";
    }
    
    navbar.classList.toggle("sticky", window.scrollY > 10);
}