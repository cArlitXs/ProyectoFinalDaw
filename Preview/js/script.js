//PWA
navigator.serviceWorker.register('/ProyectoFinalDaw/Preview/sw.js');

//SlideOut
var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70
  });
  
//SlideOut - Toggle button
document.querySelector('.toggle-button').addEventListener('click', function() {
    slideout.toggle();
  }
);
function CloseSlide(){
  if(slideout.isOpen()){
    slideout.close();
  }
}

//TOOLTIP
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//Progress Bar
window.onscroll = function () { scrollBarJS() };

function scrollBarJS() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("bar").style.width = scrolled + "%";
}

//LOADER
window.onload = function () {
    let contenedor = document.getElementById('content');
    contenedor.style.visibility = 'hidden';
    contenedor.style.transition = "all 0.2s";
    contenedor.style.opacity = '0';
}