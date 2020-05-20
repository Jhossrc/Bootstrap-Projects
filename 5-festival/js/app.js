$(document).ready(function () {
  $("#fecha").countdown("2020/08/23", function (evento) {    
    $(this).html(evento.strftime('%D Días %H Horas %M Minutos %S Segundos'))
  });
});
