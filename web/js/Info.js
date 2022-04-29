$(document).ready(function () {
    $("#btnMenuAvatar").click(function(){
        $.get("https://valorant-api.com/v1/agents?language=es-ES", function(data){
            let puesto = "";
            $.each(data.data ,function(i, item){
                puesto = "avatar"+i;
                $("#"+puesto).html('<a class="dropdown-item" href=""><img class="avatar" src="'+item.displayIconSmall+'"></a>');
            });
        });
    });
});