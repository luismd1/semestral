$(document).ready(function(){
    $("#ini").submit(function(){
        event.preventDefault();
    });

    $("#reg").submit(function(){
        event.preventDefault();

        let entrar = false;
        var usu = $("#reg-usu").val();

        if (usu.lenght<5 || usu.lenght>15){
            $("#reg_usu").addClass("form-control is-valid");
        }
    });
    $("#reg_usu").blur(function(){
        
    });
})