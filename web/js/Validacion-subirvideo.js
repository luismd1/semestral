$(document).ready(function () {
    $("#formsubirvideo").submit(function (e) {
        e.preventDefault();
        var titulo = $("#tit").val();
        var descripcion = $("#desc").val();
        var incorporacion = $("#incor").val();
        var mensaje = "";

        let si = false;

        if (titulo.trim().length < 3 || titulo.trim().length > 20) {
            mensaje += "<br> <aviso style='color: red'> El titulo tiene que tener entre 3 a 20 caracteres <aviso> <br>"
            si = true
        }

        if (descripcion.trim().length < 3 || descripcion.trim().length > 200) {
            mensaje += "<br> <aviso style='color: red'> La descripcion tiene que tener entre 3 a 200 caracteres <aviso> <br>"
            si = true
        }

        if (incorporacion.trim().length < 1 || incorporacion.trim().length > 200) {
            mensaje += "<br> <aviso style='color: red'> Escriba la URL <aviso> <br>"
            si = true
        }

        if (si) {
            $("#mensajes").html(mensaje);
        } else {
            $("#mensajes").html("<br> <aviso style='color:#FFFF'> Video Enviado <aviso> <br>")
        }

    })
})