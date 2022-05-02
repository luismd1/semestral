$(document).ready(function(){
    const inputs = document.querySelectorAll('#reg input');

    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{5,20}$/, // Letras, numeros, guion y guion_bajo
        password: /^[A-Z][a-zA-Z0-9]{3,18}\.$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // todo separado por un @ y terminando con punto algo
    }

    const validacion = (e) => {
        switch (e.target.name){
            case "usuario" :
                validarCampo(expresiones.usuario, e.target, "usu");
            break;
            case "pass" :
                validarCampo(expresiones.password, e.target, "pass");
            break;
            case "pass2" :
                coincidir("pass");
            break;
            case "email" :
                validarCampo(expresiones.correo, e.target, "email");
            break;
            case "email2" :
                
            break;
        }
    }

    const validarCampo = (expre, input, campo) => {
        if(expre.test(input.value)){
            $("#reg-"+campo).removeClass("is-invalid");
            $("#reg-"+campo).addClass("is-valid");
            $("#msj-"+campo).removeClass("d-block");
            $("#msj-"+campo).addClass("d-none");
        }else{
            $("#reg-"+campo).removeClass("is-valid");
            $("#reg-"+campo).addClass("is-invalid");
            $("#msj-"+campo).removeClass("d-none");
            $("#msj-"+campo).addClass("d-block");
        }
    }

    const coincidir = (campo) =>{
        const elemento = $("#reg-"+campo).value;
        const elemento2 = $("#reg-"+campo+"2").value;

        if (elemento !== elemento2){
            $("#reg-"+campo+"2").removeClass("is-valid");
            $("#reg-"+campo+"2").addClass("is-invalid");
            $("#msj-"+campo+"2").removeClass("d-none");
            $("#msj-"+campo+"2").addClass("d-block");
        }else{
            $("#reg-"+campo+"2").removeClass("is-invalid");
            $("#reg-"+campo+"2").addClass("is-valid");
            $("#msj-"+campo+"2").removeClass("d-block");
            $("#msj-"+campo+"2").addClass("d-none");
        }
    }

    inputs.forEach((input) => {
        input.addEventListener('keyup', validacion);
        input.addEventListener('blur', validacion);
    });

    function primeraLetra(texto){
        letra = texto.charAt(0);
        return letra == letra.toUpperCase();
    }
});