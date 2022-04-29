$(document).ready(function(){
    $("#ini").submit(function(){
        event.preventDefault();
    });

    $("#reg").submit(function(){
        event.preventDefault();

        let entrar = false;
        var usu = $("#reg-usu").val();
        if (usu.lenght<15 && usu.lenght>5){
            $("#reg-usu").addClass("is-valid");
            
        }
    });
    $("#reg_usu").blur(function(){
        
    });
});