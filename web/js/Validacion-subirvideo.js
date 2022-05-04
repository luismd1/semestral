$(document).ready(function () {
    const formulario = document.getElementById("formsubirvideo");
    const inputs = document.querySelectorAll('#formsubirvideo input');
    const seles = document.querySelectorAll('#formsubirvideo select');

    const expresiones = {
        titulo: /^[a-zA-Z0-9^\s]{3,30}$/,
        descripcion: /^[a-zA-Z0-9^\s]{1,200}$/,
        incorporacion: /^https:\/\/www.youtube.com\/embed\/[a-zA-Z0-9]+$/ //  tiene que empezar con la direccion https://www.youtube.com/embed/....................... del video
    }

    const campos = {
        tit: false,
        agen: false,
        mapa: false,
        band: false,
        desc: false,
        incor: false
    }

    const validacion = (e) => {
        switch (e.target.name) {
            case "titulo":
                validarCampo(expresiones.titulo, e.target, "tit");
                break;
            case "descripcion":
                validarCampo(expresiones.descripcion, e.target, "desc");
                break;
            case "incorporacion":
                validarCampo(expresiones.incorporacion, e.target, "incor");
                break;
        }
    }

    const validarCampo = (expre, input, campo) => {
        if (expre.test(input.value)) {
            $("#sv-" + campo).removeClass("is-invalid");
            $("#sv-" + campo).addClass("is-valid");
            $("#msj-" + campo).removeClass("d-block");
            $("#msj-" + campo).addClass("d-none");
            campos[campo] = true;
        } else {
            $("#sv-" + campo).removeClass("is-valid");
            $("#sv-" + campo).addClass("is-invalid");
            $("#msj-" + campo).removeClass("d-none");
            $("#msj-" + campo).addClass("d-block");
            campos[campo] = false;

        }
    }

    const vselect = (e) => {
        switch (e.target.name) {
            case "agente":
                validarSelect("agen");
                break;
            case "mapa":
                validarSelect("mapa");
                break;
            case "bando":
                validarSelect("band");
                break;
        }
    }

    const validarSelect = (campo) => {
        var sele = $("#sv-" + campo).val();
        if (sele != "nada") {
            $("#msj-" + campo).removeClass("d-block");
            $("#msj-" + campo).addClass("d-none");
            campos[campo] = true;
        } else {
            $("#msj-" + campo).removeClass("d-none");
            $("#msj-" + campo).addClass("d-block");
            campos[campo] = false;
        }
    }

    seles.forEach((select) => {
        select.addEventListener('blur', vselect);
    });


    inputs.forEach((input) => {
        input.addEventListener('keyup', validacion);
        input.addEventListener('blur', validacion);
    });
    $("#formsubirvideo").submit(function () {
        event.preventDefault();
        if(campos.tit && campos.agen && campos.mapa && campos.band && campos.desc && campos.incor){
            $("#mensaj-envio").removeClass("d-none");
            $("#mensaj-envio").addClass("d-block");
            $("#mensaj-error").addClass("d-none");
            $("#mensaj-error").removeClass("d-block");
        }else{
            $("#mensaj-error").removeClass("d-none");
            $("#mensaj-error").addClass("d-block");
            $("#mensaj-envio").addClass("d-none");
            $("#mensaj-envio").removeClass("d-block");
        }
    })
});