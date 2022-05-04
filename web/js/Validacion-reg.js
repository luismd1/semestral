$(document).ready(function(e){
    const formulario = document.getElementById("reg");
    const inputs = document.querySelectorAll('#reg input');

    const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{5,20}$/, // Letras, numeros, guion y guion_bajo
        password: /^[!"#$%&'()*+,\-./:;<=>?@\[\]^_`{|}~]?[a-zA-Z0-9]+[!"#$%&'()*+,\-./:;<=>?@\[\]^_`{|}~]+[a-zA-Z0-9]+[!"#$%&'()*+,\-./:;<=>?@\[\]^_`{|}~]?$/, // 5 a 20 digitos, con la primera letra mayuscula y terminando en punto.
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
    const size = (campo) => {
        if(){

        }else{
            
        }
    }
    const validarCampo = (expre, input, campo) => {
        if(expre.test(input.value)){
            $("#reg-"+campo).removeClass("is-invalid");
            $("#reg-"+campo).addClass("is-valid");
            $("#msj-"+campo).removeClass("d-block");
            $("#msj-"+campo).addClass("d-none");
            campos[campo] = true;
        }else{
            $("#reg-"+campo).removeClass("is-valid");
            $("#reg-"+campo).addClass("is-invalid");
            $("#msj-"+campo).removeClass("d-none");
            $("#msj-"+campo).addClass("d-block");
            campos[campo] = false;
        }
    }

    const coincidir = (campo) =>{
        var pass1 = document.getElementById("reg-"+campo);
        var pass2 = document.getElementById("reg-"+campo+"2");

        if (pass1.value !== pass2.value){
            $("#reg-"+campo+"2").removeClass("is-valid");
            $("#reg-"+campo+"2").addClass("is-invalid");
            $("#msj-"+campo+"2").removeClass("d-none");
            $("#msj-"+campo+"2").addClass("d-block");
            campos[campo] = false;
        }else{
            $("#reg-"+campo+"2").removeClass("is-invalid");
            $("#reg-"+campo+"2").addClass("is-valid");
            $("#msj-"+campo+"2").removeClass("d-block");
            $("#msj-"+campo+"2").addClass("d-none");
            campos[campo] = true;
        }
    }
    inputs.forEach((input) => {
        input.addEventListener('keyup', validacion);
        input.addEventListener('blur', validacion);
    });

    $("#reg").submit(function(e){
        e.preventDefault();
        const termino = document.getElementById("terminos");
        if(campos.usu && campos.pass && campos.email && termino.checked){
            formulario.reset();
            $("#reg-enviado").removeClass("d-none");
            $("#reg-enviado").addClass("d-block");
            $("input").removeClass("is-valid");
        }else{
            $("#reg-error").removeClass("d-none");
            $("#reg-error").addClass("d-block");
        }
    });
    $("#btn-error").click(function(){
        $("#reg-error").removeClass("d-block");
        $("#reg-error").addClass("d-none");
    });
    $("#btn-enviado").click(function(){
        $("#reg-enviado").removeClass("d-block");
        $("#reg-enviado").addClass("d-none");
    });
});