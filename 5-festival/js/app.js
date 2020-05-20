$(document).ready(function () {
  $("#fecha").countdown("2020/08/23", function (evento) {    
    $(this).html(evento.strftime('<span>%D</span> Días <span> %H</span> Horas <span> %M</span> Minutos <span> %S</span> Segundos'))
  });
});
