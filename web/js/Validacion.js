$(document).ready(function(){
    $("#ini").submit(function(){
        event.preventDefault();
    });

    $("#reg").submit(function(){
        event.preventDefault();

        let entrar = false;
        
    });
    $("#reg-usu").blur(function(){
        var usu = $("#reg-usu").val();
        usu.toString();
        if (usu.length<26 && usu.length>5){
            $("#reg-usu").addClass("is-valid");
            
        }
    });
    $("#reg_pass").blur(function(){
        var pass = $("#reg-usu").val();
        pass.toString();
        let valido = false;
        let valido2 = false;
        if (pass.length<26 && pass.length>5){
            valido = true;
        }
        if (primeraLetra(pass)){
            valido2 = true;
        }
        //Otra validacion
    });
    function primeraLetra(texto){
        letra = texto.charAt(0);
        return letra == letra.toUpperCase();
    }
});