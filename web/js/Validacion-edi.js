$(document).ready(function(e){
    const formulario = document.getElementById("edi");
    const inputs = document.querySelectorAll('#edi input');

    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{5,20}$/, // Letras, numeros, guion y guion_bajo
        password: /^[A-Z][a-zA-Z0-9]{3,18}\.$/, // 5 a 20 digitos, con la primera letra mayuscula y terminando en punto.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ // todo separado por un @ y terminando con punto algo
    }

    const campos = {
        usu : false,
        pass : false,
        email : false
    }
    const validacion = (e) => {
        switch (e.target.name){
            case "usuario" :
                validarCampo(expresiones.usuario, e.target, "usu");
            break;
            case "pass" :
                validarCampo(expresiones.password, e.target, "pass");
                coincidir("pass");
            break;
            case "pass2" :
                coincidir("pass");
            break;
            case "email" :
                validarCampo(expresiones.correo, e.target, "email");
                coincidir("email");
            break;
            case "email2" :
                coincidir("email");
            break;
        }
    }

    const validarCampo = (expre, input, campo) => {
        if(expre.test(input.value)){
            $("#edi-"+campo).removeClass("is-invalid");
            $("#edi-"+campo).addClass("is-valid");
            $("#msj-"+campo).removeClass("d-block");
            $("#msj-"+campo).addClass("d-none");
            campos[campo] = true;
        }else{
            $("#edi-"+campo).removeClass("is-valid");
            $("#edi-"+campo).addClass("is-invalid");
            $("#msj-"+campo).removeClass("d-none");
            $("#msj-"+campo).addClass("d-block");
            campos[campo] = false;
        }
    }

    const coincidir = (campo) =>{
        var pass1 = document.getElementById("edi-"+campo);
        var pass2 = document.getElementById("edi-"+campo+"2");

        if (pass1.value !== pass2.value){
            $("#edi-"+campo+"2").removeClass("is-valid");
            $("#edi-"+campo+"2").addClass("is-invalid");
            $("#msj-"+campo+"2").removeClass("d-none");
            $("#msj-"+campo+"2").addClass("d-block");
            campos[campo] = false;
        }else{
            $("#edi-"+campo+"2").removeClass("is-invalid");
            $("#edi-"+campo+"2").addClass("is-valid");
            $("#msj-"+campo+"2").removeClass("d-block");
            $("#msj-"+campo+"2").addClass("d-none");
            campos[campo] = true;
        }
    }
    inputs.forEach((input) => {
        input.addEventListener('keyup', validacion);
        input.addEventListener('blur', validacion);
    });

    $("#edi").submit(function(e){
        e.preventDefault();
        const termino = document.getElementById("terminos");
        if(campos.usu && campos.pass && campos.email && termino.checked){
            formulario.reset();
            $("#edi-enviado").removeClass("d-none");
            $("#edi-enviado").addClass("d-block");
            $("input").removeClass("is-valid");
        }else{
            $("#edi-error").removeClass("d-none");
            $("#edi-error").addClass("d-block");
        }
    });
    $("#btn-error").click(function(){
        $("#edi-error").removeClass("d-block");
        $("#edi-error").addClass("d-none");
    });
    $("#btn-enviado").click(function(){
        $("#edi-enviado").removeClass("d-block");
        $("#edi-enviado").addClass("d-none");
    });
});