$(document).ready(function () {
    $("#btnMenuAvatar").click(function(){
        var cont=0;
        $.get("https://valorant-api.com/v1/agents?language=es-ES", function(data){
            $.each(data.data ,function(i, item){
                if(cont==0){
                    $("#dropdown-menu-avatar").append('<div class row>'+
                                                    '<div class="col-4 col-sm-3">'+
                                                        '<a class="dropdown-item" href=""><img class="avatar" src="'+item.displayIconSmall+'"></a>'+
                                                    '</div>'+
                                                '');
                }
                if (cont<4 && cont!=0){
                    $("#dropdown-menu-avatar").append('<div class="col-4 col-sm-3">'+
                                                        '<a class="dropdown-item" href=""><img class="avatar" src="'+item.displayIconSmall+'"></a>'+
                                                    '</div>');
                }
                if(cont>=4){
                    $("#dropdown-menu-avatar").append('</div>')
                    cont=0;
                }
                cont++;

            });
        });
    });
});