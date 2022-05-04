$(document).ready(function () {
    $.get("https://valorant-api.com/v1/agents?language=es-ES", function (data) {
        $.each(data.data, function (i, item) {
            $("#sv-agen").append('<option value=' + i + '>' + item.displayName + '</option>');
        });
    });
    $.get("https://valorant-api.com/v1/maps?language=es-ES", function (data) {
        $.each(data.data, function (i, item) {
            $("#sv-mapa").append('<option value=' + i + '>' + item.displayName + '</option>');
        });
    });
});



