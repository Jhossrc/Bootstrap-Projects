/* Cambiar el fondo del nav al hacer scroll */
window.addEventListener('scroll', (e) => {

  const header = document.getElementById('navegacion-principal')

  const scroll = window.scrollY;
  if (scroll > 300) {
    header.classList.add('bg-success');
  } else {
    header.classList.remove('bg-success');
  }
})

/* Smooth Scroll con JS Nativo */
document.querySelectorAll('.navbar .nav-link').forEach(enlace => {
  enlace.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(enlace.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
});


/* JQuery Countdown */
$(document).ready(function () {
  $("#fecha").countdown("2020/08/23", function (evento) {    
    $(this).html(evento.strftime('<span>%D</span> Días <span> %H</span> Horas <span> %M</span> Minutos <span> %S</span> Segundos'))
  });
});
