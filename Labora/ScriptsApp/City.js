function ListCity() {
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/City/ListCity',
        data: {},
        success: function (result) {
            var counter = 0;
            if (result.length === 0) {
                $("#SelectCity").append('<option value="">No hay Datos</option>');
            } else {
                $("#SelectCity").empty().append('<option value="-1">Seleccione Ciudad</option>');
                $.each(result, function () {
                    $("#SelectCity").append('<option value="' + result[counter].Id + '">' + result[counter].Name + '</option>');
                    counter++;
                });
            }
        },
    });
}