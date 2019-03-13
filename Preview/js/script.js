//PWA
//navigator.serviceWorker.register('/ProyectoFinalDaw/Preview/sw.js');

//SlideOut
/*var slideout = new Slideout({
  'panel': document.getElementById('panel'),
  'menu': document.getElementById('menu'),
  'padding': 256,
  'tolerance': 70
});

//SlideOut - Toggle button
document.querySelector('.toggle-button').addEventListener('click', function() {
  slideout.open();
}
);
function close(eve) {
  eve.preventDefault();
  slideout.close();
}
slideout
  .on('beforeopen', function() {
    this.panel.classList.add('panel-open');
  })
  .on('open', function() {
    this.panel.addEventListener('click', close);
  })
  .on('beforeclose', function() {
    this.panel.classList.remove('panel-open');
    this.panel.removeEventListener('click', close);
  });*/
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

// Hide Cookie Bar on click
$("#close-cookie-bar").click(function(){
  $('#cookie-container').fadeOut("slow");
  Cookies.set('cookie-accept', 'accepted', { expires: 5000 });
});

// Checking Cookie - if complete hide survey else show survey
$(document).ready(function(){
$('#cookie-container').hide();
if (Cookies.get('cookie-accept') == ('accepted')) {
  $('#cookie-container').hide();
  console.log('Cookies Accepted');
} else {
  $('#cookie-container').show();
  console.log('Show Cookie Bar');
}
});