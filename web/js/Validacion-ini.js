$(document).ready(function () {
    const formulario = document.getElementById("ini");
    const inputs = document.querySelectorAll('#ini input');

    const expresiones = {
        password: /^[A-Z][a-zA-Z0-9]{3,18}\.$/, // 5 a 20 digitos, con la primera letra mayuscula y terminando en punto.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ // todo separado por un @ y terminando con punto algo
    }

    const campos = {
        pass : false,
        email : false
    }

    const validacion = (e) => {
        switch (e.target.name){
            case "email" :
                validarCampo(expresiones.correo, e.target, "email");
            break;
            case "pass" :
                validarCampo(expresiones.password, e.target, "pass");
            break;
        }
    }
    const validarCampo = (expre, input, campo) => {
        if(expre.test(input.value)){
            $("#ini-"+campo).removeClass("is-invalid");
            $("#ini-"+campo).addClass("is-valid");
            $("#msj-"+campo).removeClass("d-block");
            $("#msj-"+campo).addClass("d-none");
            campos[campo] = true;
        }else{
            $("#ini-"+campo).removeClass("is-valid");
            $("#ini-"+campo).addClass("is-invalid");
            $("#msj-"+campo).removeClass("d-none");
            $("#msj-"+campo).addClass("d-block");
            campos[campo] = false;
        }
    }
    inputs.forEach((input) => {
        input.addEventListener('keyup', validacion);
        input.addEventListener('blur', validacion);
    });
    $("#ini").submit(function(){
        event.preventDefault();
    })
});