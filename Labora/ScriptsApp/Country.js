function ListCountry() {
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/Country/ListCountry',
        data: {},
        success: function (result) {
            var counter = 0;
            if (result.length === 0) {
                $("#SelectCountry").append('<option value="">No hay Datos</option>');
            } else {
                $("#SelectCountry").empty().append('<option value="-1">Seleccione País</option>');
                $.each(result, function () {
                    $("#SelectCountry").append('<option value="' + result[counter].Id + '">' + result[counter].Name + '</option>');
                    counter++;
                });
            }
        },
    });
}